// Build-time book metadata from Open Library (no key, no auth).
// Fetches title/author/year/pages/cover by ISBN, then stores the result in a
// COMMITTED data file (src/lib/openlibrary-data.json) that is the source of
// truth for production builds. Vercel's build network can't reach
// openlibrary.org (connect timeout), so prod must NOT depend on a live fetch —
// it reads the committed data instead. The fetch only runs locally to fill in
// ISBNs not yet in the file; after adding a book, build/preview locally to
// populate it, then commit the updated openlibrary-data.json alongside the .md.
// Runs only at build — never in the browser.

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";

export interface BookMeta {
	title?: string;
	author?: string;
	year?: number;
	pages?: number;
	coverUrl?: string;
}

const CACHE_DIR = "src/lib";
const CACHE_FILE = `${CACHE_DIR}/openlibrary-data.json`;

async function loadCache(): Promise<Record<string, BookMeta>> {
	try {
		if (existsSync(CACHE_FILE)) {
			return JSON.parse(await readFile(CACHE_FILE, "utf-8"));
		}
	} catch {
		/* ignore corrupt cache */
	}
	return {};
}

async function saveCache(cache: Record<string, BookMeta>): Promise<void> {
	try {
		if (!existsSync(CACHE_DIR)) await mkdir(CACHE_DIR, { recursive: true });
		await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
	} catch {
		/* non-fatal — cache is an optimization */
	}
}

/**
 * Returns a map of ISBN -> metadata. Cached misses (empty objects) are kept so
 * we don't refetch every build; delete src/lib/openlibrary-data.json to force a refresh.
 */
export async function getBooksMeta(isbns: string[]): Promise<Record<string, BookMeta>> {
	const cache = await loadCache();
	const missing = [...new Set(isbns)].filter((isbn) => isbn && !(isbn in cache));

	if (missing.length > 0) {
		const bibkeys = missing.map((i) => `ISBN:${i}`).join(",");
		const url = `https://openlibrary.org/api/books?bibkeys=${bibkeys}&format=json&jscmd=data`;
		try {
			const res = await fetch(url);
			if (res.ok) {
				const data: Record<string, any> = await res.json();
				for (const isbn of missing) {
					const entry = data[`ISBN:${isbn}`];
					if (entry) {
						const yearMatch = String(entry.publish_date ?? "").match(/\d{4}/);
						cache[isbn] = {
							title: entry.title,
							author: Array.isArray(entry.authors)
								? entry.authors.map((a: any) => a.name).filter(Boolean).join(", ")
								: undefined,
							year: yearMatch ? Number(yearMatch[0]) : undefined,
							pages: typeof entry.number_of_pages === "number" ? entry.number_of_pages : undefined,
							coverUrl: entry.cover?.large || entry.cover?.medium || entry.cover?.small,
						};
					} else {
						cache[isbn] = {}; // cache the miss
					}
				}
				await saveCache(cache);
			} else {
				console.warn(`[openlibrary] request failed: ${res.status}`);
			}
		} catch (err) {
			console.warn(`[openlibrary] fetch error — using whatever is cached`, err);
		}
	}

	return cache;
}
