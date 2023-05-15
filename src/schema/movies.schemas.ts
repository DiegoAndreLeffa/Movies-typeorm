import { z } from "zod";

const movieCreateSchema = z.object({
  name: z.string().max(50),
  description: z.string().optional().nullable(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const movieUpdateSchema = movieCreateSchema.partial();

const returnMovieSchema = movieCreateSchema.extend({
  id: z.number(),
});

const returnAllMoviesSchema = returnMovieSchema.array();

export {
  movieCreateSchema,
  returnMovieSchema,
  returnAllMoviesSchema,
  movieUpdateSchema,
};
