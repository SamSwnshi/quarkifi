import express from 'express'

const apiRoutes = express.Router()

apiRoutes.get("/movies",getMovies)

export default apiRoutes;