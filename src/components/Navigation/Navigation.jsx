import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledNavLink, Header } from "./Navigation.styled";
import Loader from "../Loader";

function Navigation() {
    return (
        <>
            <Header>
                <nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="/movies">Movies</StyledNavLink>
                </nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
}
export default Navigation;