import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../utils/axios"
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Loading from './partials/Loading';

const People = () => {

  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title ="TF | " + category.toUpperCase() + " People";

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if(data.results.length > 0){
      setPeople((prevState) => [...prevState, ...data.results]);
      setPage(page+1);
      }else{
        setHasMore(false);
      }
      

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const refreshHandler =async() => {
    if(people.length===0){
      GetPeople();
    }else{
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  }

  useEffect(()=>{
    refreshHandler();
  }, [category])


  return people.length > 0 ? (
    <div className="w-screen h-screen bg-[#1f1e24]">
      <div className="w-full flex items-center justify-between px-[3%] ">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          People
        </h1>

        <div className="flex items-center w-[80%] ">
          <Topnav></Topnav>
          
        </div>
      </div>
      <InfiniteScroll
      dataLength={people.length}
      loader={<h1>LOADING</h1>}
      next={GetPeople}
      hasMore={hasMore}>
        <Cards data={people} title="people"></Cards>
      </InfiniteScroll>
      

    </div>
  ): (
    <Loading></Loading>)
};

export default People;