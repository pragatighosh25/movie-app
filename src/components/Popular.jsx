import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios"
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Loading from './partials/Loading';

const Popular = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title ="TF | Popular " + category.toUpperCase();

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if(data.results.length > 0){
      setPopular((prevState) => [...prevState, ...data.results]);
      setPage(page+1);
      }else{
        setHasMore(false);
      }
      

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler =async() => {
    if(popular.length===0){
      GetPopular();
    }else{
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  }

  useEffect(()=>{
    refreshHandler();
  }, [category])


  return popular.length > 0 ? (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <div className="w-full flex items-center justify-between px-[3%] ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          <Dropdown title="Category" options={[ "movie", "tv"]} func={(e)=> setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          
        </div>
      </div>
      <InfiniteScroll
      dataLength={popular.length}
      loader={<h1>LOADING</h1>}
      next={GetPopular}
      hasMore={hasMore}>
        <Cards data={popular} title="movie"></Cards>
      </InfiniteScroll>
      

    </div>
  ): (
    <Loading></Loading>
  )
  

};

export default Popular
