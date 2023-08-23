import PropTypes from "prop-types";
import { Item, Wrapper, Image, Text, Name } from "./CastItem.styled";

export default function CastItem({ name, character, imageUrl }) {
    return (
        <Item>
            <Image src={imageUrl} alt={name} />
            <Wrapper>
                <Name>{name}</Name>
                <Text>Character: {character}</Text>
            </Wrapper>
        </Item>
    );
}
CastItem.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};