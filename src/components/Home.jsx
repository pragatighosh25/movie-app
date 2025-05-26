import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCatergory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomIndex = Math.floor(Math.random() * data.results.length);
      let randomData = data.results[randomIndex];
      setWallpaper(randomData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav></Sidenav>
      <div className="w-[80%] h-full overflow-x-hidden overflow-auto">
        <Topnav></Topnav>
        <Header data={wallpaper}></Header>
        <div className="my-5 flex justify-between p-5">
          <h1 className="text-3xl text-zinc-400  mb-5 font-semibold">
            Trending
          </h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCatergory(e.target.value)}
          ></Dropdown>
        </div>
        <HorizontalCards data={trending}></HorizontalCards>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
