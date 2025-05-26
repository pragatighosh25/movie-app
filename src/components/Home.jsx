import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {

  const [wallpaper, setWallpaper] = useState([]);
  const [trending, setTrending] = useState([]);

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
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
      
      
    } catch (error) {
      console.log("error: ", error);
    }
  };

useEffect(() => {
  GetHeaderWallpaper();
  GetTrending();
}, []);

  return wallpaper && trending ? ( 
    <>
      <Sidenav></Sidenav>
      <div className='w-[80%] h-full overflow-x-hidden overflow-auto'>
        <Topnav></Topnav>
        <Header data={wallpaper}></Header>
        <HorizontalCards data={trending} ></HorizontalCards>
      </div>
    </>
  ): <h1>Loading</h1>
}

export default Home;
