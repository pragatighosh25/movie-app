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
import Trailer from "./components/partials/Trailer";
import Error from "./components/partials/Error";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route
          path="/movie/details/:id"
          element={<MovieDetails></MovieDetails>}
        >
          <Route
            path="/movie/details/:id/trailer"
            element={<Trailer />}
          ></Route>
        </Route>
        <Route path="/tv" element={<TVShows />}></Route>
        <Route path="/tv/details/:id" element={<TVShowDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />}></Route>
        </Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/people/details/:id" element={<PeopleDetails />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
