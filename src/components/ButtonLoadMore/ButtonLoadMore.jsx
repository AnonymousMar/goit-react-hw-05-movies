import PropTypes from "prop-types";
import { Button } from "./ButtonLoadMore.styled";

export default function ButtonLoadMore({ onloadMore }) {
    return (
        <Button type="button" onClick={onloadMore}>
            Load more
        </Button>
    );
}
ButtonLoadMore.propTypes = {
    onloadMore: PropTypes.func.isRequired,
};