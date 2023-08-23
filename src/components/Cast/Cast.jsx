import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchCastByMovieId } from "../services/moviesApi";
import CastItem from "./CastItem/CastItem";
import DefaultImage from '../images/avatar.jpg'
import Loader from "../Loader";

export default function Cast() {
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const ImgBaseURL = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchCast = async () => {
            setIsLoading(true);
            try {
                const data = await fetchCastByMovieId(movieId);
                setCast(data.cast);
            } catch {
                toast.error("Something wrong!");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCast();
    }, [movieId]);

    return isLoading ? (
        <Loader />
    ) : (
        !!cast && (
            <ul>
                {cast.map(({ id, name, character, profile_path }) => (
                    <CastItem
                        key={id}
                        name={name}
                        character={character}
                        imageUrl={
                            profile_path ? `${ImgBaseURL}/${profile_path}` : DefaultImage
                        }
                    />
                ))}
            </ul>
        )
    );
}