import { defineCollection, z } from "astro:content";

// Define the recipes content collection (post type)
const recipes = defineCollection({

    // Now define the fields for recipes along with the value types
    schema: z.object({
        title: z.string(),
        slug: z.string().optional(),
        description: z.string(),
        featuredImage: z.string(),
        prepTime: z.number(),
        cookTime: z.number(),
        nutrition: z.object({
            calories: z.string(),
            carbs: z.string(),
            protein: z.string(),
            fat: z.string(),
        }),  
    })
})