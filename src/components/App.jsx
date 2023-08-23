import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Container } from "./App.styled";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() =>
  import("./pages/HomePage" )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" )
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" )
);
const Cast = lazy(() =>
  import("./Cast/Cast" )
);
const Reviews = lazy(() =>
  import("./Reviews/Reviews" )
);

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Container>
  );
}

export default App;