import { IMovie, IMovieReturn } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { returnMovieSchema } from "../schema";

const createMovieService = async (movieData: IMovie): Promise<IMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = returnMovieSchema.parse(movie);

  return newMovie;
};

export { createMovieService };
