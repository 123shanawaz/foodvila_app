import { useContext, useState } from "react";
// import { restaurantList } from "../config";
import Resturantcard from "./ResturantCrd";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useBody from "../Utils/useBody";
// import useOnline from "../Utils/useOnline";
// import UserContext from "../Utils/UserContext";
import Crausal from "./Carusal";







const Body = () => {
  // const serachtext="kfc";

  const [serachtext, setserachtext] = useState("");
  // const [Allrestaurant, setAllsetrestaurant] = useState([]);
  // const [filterdRestaurant, setfilterdrestaurant] = useState([]);

  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  // async function getRestaurants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5562163&lng=88.37238099999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   setfilterdrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  //   setAllsetrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  // }

  const [Allrestaurant,filterdRestaurant,setfilterdrestaurant]=useBody();
  // const isoffline=useOnline();

  // const {user,setUser}=useContext(UserContext);

  // if (filterdRestaurant?.length===0){
  //   return <h1> not Resturant Match </h1>

  // }
  

  // if(!isoffline){
  //   return <h1> 🔴please check ur internet connection</h1>
  // }

  return Allrestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Crausal/>
      <div className="text-center ">
        <input
          type="text"
          className="box-border border-black w-[40%] bg-slate-200 pl-3 py-3  my-3 rounded-lg border-inherit "
          placeholder="search"
          value={serachtext}
          onChange={(e) => {
            setserachtext(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-lg borde "
          onClick={() => {
            const data = filterData(serachtext, Allrestaurant);
            setfilterdrestaurant(data);
          }}
        >
          Search
        </button>
       {/* <input value={user.name} onChange={
        e=>setUser({
          name:e.target.value,
          email:"new email",
          
        })
       }/> */}
      </div>
      <div className="pl-10 flex flex-wrap ">
        {filterdRestaurant?.map((restaurant) => {
          return (
            <Link to={"/resturant/"+restaurant?.data?.id} key={restaurant?.data?.id}>
              {" "}
              <Resturantcard {...restaurant?.data}  />
              {/* <Resturantcard {...restaurant?.data} user={user} /> */}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
