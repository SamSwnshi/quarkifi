import express from 'express'
import { getMovies, searchById, searchMovies } from '../controllers/movies.controllers.js';

const apiRoutes = express.Router()

apiRoutes.get("/movies",getMovies)
apiRoutes.get('/movies/:id',searchById)
apiRoutes.post('/search',searchMovies)

export default apiRoutes;