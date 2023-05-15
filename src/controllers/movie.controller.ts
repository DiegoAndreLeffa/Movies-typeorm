import { Request, Response } from "express";
import { IMovie } from "../interfaces/movies.interfaces";
import { createMovieService } from "../services/createMovie.service";
import { deleteMovieService } from "../services/deleteMovie.service";
import { listMoviesService } from "../services/listMovies.service";
import { updateMovieService } from "../services/updateMovie.service";

const createMovieController = async (request: Request, response: Response) => {
  const movieData: IMovie = request.body;

  const newMovie = await createMovieService(movieData);

  return response.status(201).json(newMovie);
};

const listMoviesController = async (request: Request, response: Response) => {
  let page = Number(request.query.page) || 1;
  let perPage = Number(request.query.perPage) || 5;

  if (page <= 0 || perPage <= 0) {
    page = 1;
    perPage = 5;
  }
  if (typeof page !== "number" || typeof perPage !== "number") {
    page = 1;
    perPage = 5;
  }
  if (perPage > 5) {
    perPage = 5;
  }

  let sort = request.query.sort || undefined;
  let order = request.query.order || undefined;

  const movies = await listMoviesService(page, perPage, sort, order);

  return response.json(movies);
};

const updateMovieController = async (request: Request, response: Response) => {
  const movieData = request.body;
  const idMovie = parseInt(request.params.id);

  const updatedMovie = await updateMovieService(movieData, idMovie);

  return response.status(200).json(updatedMovie);
};

const deleteMovieController = async (request: Request, response: Response) => {
  const idMovie = parseInt(request.params.id);

  await deleteMovieService(idMovie);

  return response.status(204).send();
};

export {
  createMovieController,
  listMoviesController,
  deleteMovieController,
  updateMovieController,
};
