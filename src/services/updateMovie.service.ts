import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovie, IMovieUpdate } from "../interfaces/movies.interfaces";
import { returnMovieSchema } from "../schema";

const updateMovieService = async (
  movieData: IMovieUpdate,
  idMovie: number
): Promise<IMovieUpdate> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldMovieData = await movieRepository.findOne({
    where: {
      id: idMovie,
    },
  });

  const movie = movieRepository.create({
    ...oldMovieData,
    ...movieData,
  });

  await movieRepository.save(movie);

  const updatedMovie: IMovie = returnMovieSchema.parse(movie);

  return updatedMovie;
};

export { updateMovieService };
