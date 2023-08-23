import { TailSpin } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";
const Loader = () => {
    return (
        <LoaderContainer>
            <TailSpin color="#2196f3" />
        </LoaderContainer>
    );
};
export default Loader;