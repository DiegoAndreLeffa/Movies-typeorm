import {
  movieCreateSchema,
  returnAllMoviesSchema,
  returnMovieSchema,
} from "../schema";
import { z } from "zod";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type IMovie = z.infer<typeof movieCreateSchema>;
type IMovieReturn = z.infer<typeof returnMovieSchema>;

type IMoviesReturn = z.infer<typeof returnAllMoviesSchema>;

type IMovieUpdate = DeepPartial<IMovie>;

type allMoviesReturn = Array<IMovieReturn>;

type iMovieRepo = Repository<Movie>;

interface Ipagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: allMoviesReturn;
}

export {
  IMovie,
  IMovieReturn,
  IMoviesReturn,
  IMovieUpdate,
  Ipagination,
  iMovieRepo,
};
