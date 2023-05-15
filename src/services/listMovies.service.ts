import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMoviesReturn, Ipagination } from "../interfaces/movies.interfaces";
import { returnAllMoviesSchema } from "../schema";

const listMoviesService = async (
  page: number,
  perPage: number,
  sort: any,
  order: any
): Promise<IMoviesReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const baseUrl: string = `http://localhost:3000/movies`;

  let previousPage: string | null = `${baseUrl}?page=${
    page - 1
  }&perPage=${perPage}`;

  let nextPage: string | null = `${baseUrl}?page=${
    page + 1
  }&perPage=${perPage}`;

  if (page === 1) {
    previousPage = null;
  }

  if (sort === undefined && order == "asc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        id: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === undefined && order == "desc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        id: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "price" && order === undefined) {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        price: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "duration" && order === undefined) {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        duration: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "duration" && order == "asc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        duration: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "duration" && order == "desc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        duration: "DESC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "price" && order === "asc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        price: "ASC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  } else if (sort === "price" && order === "desc") {
    const findMovies = await movieRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: {
        price: "DESC",
      },
    });

    const pageNull = page + 1;

    const findMoviesPageNull = await movieRepository.find({
      take: perPage,
      skip: perPage * (pageNull - 1),
    });
    const findAllMovies = await movieRepository.find();
    const movies = returnAllMoviesSchema.parse(findMovies);
    const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

    if (moviesNull.length === 0) {
      nextPage = null;
    }

    const pageResult: any = {
      prevPage: previousPage,
      nextPage: nextPage,
      count: findAllMovies.length,
      data: movies,
    };

    return pageResult;
  }

  const findMovies = await movieRepository.find({
    take: perPage,
    skip: perPage * (page - 1),
    order: {
      id: "ASC",
    },
  });

  const pageNull = page + 1;

  const findMoviesPageNull = await movieRepository.find({
    take: perPage,
    skip: perPage * (pageNull - 1),
  });

  const findAllMovies = await movieRepository.find();

  const movies = returnAllMoviesSchema.parse(findMovies);
  const moviesNull = returnAllMoviesSchema.parse(findMoviesPageNull);

  if (moviesNull.length === 0) {
    nextPage = null;
  }

  const pageResult: any = {
    prevPage: previousPage,
    nextPage: nextPage,
    count: findAllMovies.length,
    data: movies,
  };

  return pageResult;
};

export { listMoviesService };
