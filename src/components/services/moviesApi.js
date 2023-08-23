const API_KEY = "f28c6e4cd4b5fdd3cdf71f987d321bdd";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async (page) => {
    const response = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    return response.ok
        ? response.json()
        : Promise.reject(
            new Error("Images has not been found. Please, check your request!")
        );
};

export const fetchMovies = async (query, page) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    return response.ok
        ? response.json()
        : Promise.reject(
            new Error("Images has not been found. Please, check your request!")
        );
};

export const fetchMoviesById = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

    return response.ok
        ? response.json()
        : Promise.reject(
            new Error("Images has not been found. Please, check your request!")
        );
};

export const fetchCastByMovieId = async (id) => {
    const response = await fetch(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.ok
        ? response.json()
        : Promise.reject(
            new Error("Images has not been found. Please, check your request!")
        );
};
export const fetchReviewsByMovieId = async (id) => {
    const response = await fetch(
        `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );

    return response.ok
        ? response.json()
        : Promise.reject(
            new Error("Images has not been found. Please, check your request!")
        );
};