import express from 'express'
import { getMovies, searchMovies } from '../controllers/movies.controllers.js';

const apiRoutes = express.Router()

apiRoutes.get("/movies",getMovies)
apiRoutes.post('/search',searchMovies)

export default apiRoutes;