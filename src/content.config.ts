import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const pageConfig = defineCollection({
    loader: file("src/pageConfig.json"),
    schema: ({ image }) => z.object({
        title: z.string(),
        bio: z.string(),
        image: image(),
        links: z.array(z.object({
            label: z.string(),
            href: z.string(),
            highlight: z.boolean().default(false),
        })),
        social: z.array(z.object({
            type: z.string(),
            href: z.string(),
        })),
    }),
});

export const collections = { pageConfig };
