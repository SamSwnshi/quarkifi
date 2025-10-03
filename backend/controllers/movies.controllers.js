import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const IMDB_URL = process.env.IMDB_API_URL;

export const getMovies = async (req, res) => {
  try {
    const url = `${IMDB_URL}/titles`;
    console.log("Fetching from:", url);

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching data from IMDb API:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({ error: "Failed to fetch movies from external service." });
  }
};

export const searchMovies = async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    const url = `${IMDB_URL}/search/titles?query=${query}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error searching movies from IMDb API:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({ error: "Failed to search movies from external service." });
  }
};

export const searchById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Movie ID is required." });
  }
  try {
    const url = `${IMDB_URL}/titles/${id}`;
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(
      "Error fetching movie details from IMDb API:",
      error.response?.data || error.message
    );
    res
      .status(500)
      .json({ error: "Failed to fetch movie details from external service." });
  }
};
