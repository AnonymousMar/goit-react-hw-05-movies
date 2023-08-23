import PropTypes from "prop-types";
import { AuthorName, Text, UserIcon } from "./ReviewsItem.styled";

export default function ReviewsItem({ author, content }) {
    return (
        <li>
            <AuthorName>
                <UserIcon />
                {author}
            </AuthorName>
            <Text>{content}</Text>
        </li>
    );
}

ReviewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};