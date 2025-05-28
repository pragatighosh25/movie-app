import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/partials/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TVShows from "./components/TVShows";
import People from "./components/People";
import MovieDetails from "./components/partials/MovieDetails";
import TVShowDetails from "./components/partials/TVShowDetails";
import PeopleDetails from "./components/partials/PeopleDetails";

function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movie />}>
          <Route
            path="/movie/details/:id"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Route>
        <Route path="/TVShows" element={<TVShows />}>
          <Route
            path="/tv/details/:id"
            element={<TVShowDetails></TVShowDetails>}
          ></Route>
        </Route>
        <Route path="/People" element={<People />}>
        <Route
            path="/people/details/:id"
            element={<PeopleDetails></PeopleDetails>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
