import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";

const Home = () => {

  const [wallpaper, setWallpaper] = useState([]);
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

useEffect(() => {
  GetHeaderWallpaper();
}, []); //if there is no wallpaper then call the function and get a wallpaper.

  return wallpaper ? ( 
    <>
      <Sidenav></Sidenav>
      <div className='w-[80%] h-full'>
        <Topnav></Topnav>
        <Header data={wallpaper}></Header>
      </div>
    </>
  ): <h1>Loading</h1>
}

export default Home;
