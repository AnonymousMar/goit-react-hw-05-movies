import PropTypes from "prop-types";
import MoviesItem from "./MoviesItem/MoviesItem";
import { List } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
    return (
        <List>
            {movies.map((item) => (
                <MoviesItem key={item.id} id={item.id} title={item.title} />
            ))}
        </List>
    );
}
MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};