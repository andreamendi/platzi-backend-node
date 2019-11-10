const express = require("express");
const joi = require('@hapi/joi');
const MoviesService = require("../services/movies");

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require("../utils/schema/movies.js");

const validationHandler = require("../utils/middleware/validationHandler.js");

function moviesApi(app) {
  const router = express.Router();
  const moviesService = new MoviesService();

  app.use("/api/movies", router);

  router.get("/", async function(req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });
      // throw new Error('Error getting movies');

      res.status(200).json({
        data: movies,
        message: "movies listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    "/:movieId",
    validationHandler(joi.object({ movieId: movieIdSchema }), "params"),
    async function(req, res, next) {
      const { movieId } = req.params;

      try {
        const movies = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movies,
          message: "movie retrieved"
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post("/", validationHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: "movies created"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    "/:movieId",
    validationHandler(joi.object({ movieId: movieIdSchema }), "params"),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: updatedMovieId,
          message: "movie updated"
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    "/:movieId",
    validationHandler(joi.object({ movieId: movieIdSchema }), "params"),
    async function(req, res, next) {
      const { movieId } = req.params;
      // const { body: movie } = req;

      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: "movie deleted"
        })
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch("/:movieId", async function(req, res, next) {
    const { movieId } = req.params;

    try {
      const patchedMovieId = await moviesService.patchMovie({ movieId });

      res.status(200).json({
        data: patchedMovieId,
        message: "movie patched"
      });
    } catch (err) {
      next(err);
    }
  });
}
module.exports = moviesApi;
