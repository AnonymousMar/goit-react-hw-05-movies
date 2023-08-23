import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovies } from "../services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import ButtonLoadMore from "components/ButtonLoadMore/ButtonLoadMore";
import Searchbar from "components/Searchbar/Searchbar";

export default function MoviesPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    let params = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        if (params !== "" && !query) {
            setQuery(params);
            return;
        }

        const fetchMoviesByQuery = async () => {
            setIsLoading(true);
            try {
                const data = await fetchMovies(query, page);

                page === 1
                    ? setMovies(data.results)
                    : setMovies((state) => [...state, ...data.results]);

                data.total_pages === page ? setShowButton(false) : setShowButton(true);
            } catch {
                toast.error("Something wrong!");
            } finally {
                setIsLoading(false);
            }
        };
        fetchMoviesByQuery();
    }, [page, params, query]);

    const handleFormSubmit = (query) => {
        navigate({ ...location, search: `query=${query}` });
        setQuery(query);
        setPage(1);
    };
    const handelLoadMore = () => {
        setPage((state) => state + 1);
    };

    return (
        <div>
            <Searchbar onSubmit={handleFormSubmit} />

            {movies.length > 0 && <MoviesList movies={movies} />}

            {isLoading ? (
                <Loader />
            ) : (
                showButton && <ButtonLoadMore onloadMore={handelLoadMore} />
            )}
        </div>
    );
}