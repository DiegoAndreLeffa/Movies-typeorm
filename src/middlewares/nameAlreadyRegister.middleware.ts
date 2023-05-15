import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const nameMovieAlreadExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movieName: string = request.body.name;

  const findMovie = await movieRepository.findOne({
    where: {
      name: movieName,
    },
  });

  if (findMovie?.name === movieName) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};

export { nameMovieAlreadExists };
