import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchReviewsByMovieId } from "components/services/moviesApi";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import Loader from "../Loader";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            try {
                const data = await fetchReviewsByMovieId(movieId);
                setReviews(data.results);
            } catch {
                toast.error("Something wrong!");
            } finally {
                setIsLoading(false);
            }
        };
        fetchReviews();
    }, [movieId]);

    return isLoading ? (
        <Loader />
    ) : reviews.length > 0 ? (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <ReviewsItem key={id} author={author} content={content} />
            ))}
        </ul>
    ) : (
        <p>We don't have any reviews for this movie</p>
    );
}