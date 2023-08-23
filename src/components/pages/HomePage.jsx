import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "../services/moviesApi";
import PageTitle from "components/PageTitle/PageTitle";
import ButtonLoadMore from "components/ButtonLoadMore/ButtonLoadMore";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [showButton, setShowButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const data = await fetchTrendingMovies(page);

                data.total_pages === page ? setShowButton(false) : setShowButton(true);

                page === 1
                    ? setTrendingMovies(data.results)
                    : setTrendingMovies((state) => [...state, ...data.results]);
            } catch {
                toast.error("Something wrong!");
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, [page]);

    const handelLoadMore = () => {
        setPage((state) => state + 1);
    };

    return (
        <div>
            <PageTitle text="Trending Movies for the week" />

            <MoviesList movies={trendingMovies} />

            {isLoading ? (
                <Loader />
            ) : (
                showButton && <ButtonLoadMore onloadMore={handelLoadMore} />
            )}
        </div>
    );
}