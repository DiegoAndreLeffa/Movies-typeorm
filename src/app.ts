import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors";
import { movieRoutes } from "./routers/movie.routes";

const app: Application = express();

app.use(express.json());

app.use("/movies", movieRoutes);

app.use(handleError);
export default app;
