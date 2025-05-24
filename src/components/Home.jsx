import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";

const Home = () => {
  return (
    <>
      <Sidenav></Sidenav>
      <div className='w-[80%] h-full'>
        <Topnav></Topnav>
      </div>
    </>
  )
}

export default Home;
