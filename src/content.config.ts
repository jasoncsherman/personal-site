import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each collection = a folder of Markdown files under src/content/<name>/.
// The schema validates front matter: a bad value fails the build loudly.

const bookshelf = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/bookshelf" }),
	schema: z.object({
		isbn: z.string().optional(), // primary lookup key for Open Library
		// title/author are fetched from Open Library; set these only to override/fallback
		title: z.string().optional(),
		author: z.string().optional(),
		status: z.enum(["reading", "read", "tbr", "abandoned"]),
		started: z.coerce.date().optional(),
		finished: z.coerce.date().optional(), // used to sort the "Read" shelf
		rating: z.number().min(1).max(5).optional(),
	}),
});

const writing = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
	schema: z.object({
		title: z.string(),
		type: z.enum(["Note", "Essay", "Reflection", "Field note"]).default("Note"),
		topic: z.string().optional(),
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
		status: z.enum(["draft", "published"]).default("published"),
		excerpt: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		kind: z.string().optional(),
		status: z.enum(["forming", "exploring", "active", "paused", "shipped", "revisiting"]),
		started: z.coerce.date().optional(),
		motivation: z.string().optional(),
		currentQuestion: z.string().optional(),
		nextStep: z.string().optional(),
		link: z.string().optional(),
		order: z.number().default(0),
	}),
});

const fieldNotes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/field-notes" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		tool: z.string().optional(),
		mode: z.enum(["learning", "workflow", "reflection", "experiment"]).default("learning"),
		confidence: z.enum(["low", "growing", "solid"]).optional(),
		keyLesson: z.string().optional(),
	}),
});

const photos = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/photos" }),
	schema: z.object({
		title: z.string(),
		place: z.string().optional(),
		dateOrSeason: z.string().optional(),
		mood: z.string().optional(),
		theme: z.string().optional(),
		whyItMatters: z.string().optional(),
		cover: z.string().optional(),
	}),
});

export const collections = { bookshelf, writing, projects, fieldNotes, photos };
