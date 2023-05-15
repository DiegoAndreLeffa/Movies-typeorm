import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  listMoviesController,
  updateMovieController,
} from "../controllers/movie.controller";
import { movieExistsMiddleware } from "../middlewares/movieExists.middleware";
import { nameMovieAlreadExists } from "../middlewares/nameAlreadyRegister.middleware";
import { validatedData } from "../middlewares/validated.middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schema";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  validatedData(movieCreateSchema),
  nameMovieAlreadExists,
  createMovieController
);

movieRoutes.get("", listMoviesController);

movieRoutes.patch(
  "/:id",
  validatedData(movieUpdateSchema),
  movieExistsMiddleware,
  nameMovieAlreadExists,
  updateMovieController
);

movieRoutes.delete("/:id", movieExistsMiddleware, deleteMovieController);

export { movieRoutes };
