import { IMG_CDN_LINK } from "../config";
// import { useContext } from "react";
// import UserContext from "../Utils/UserContext";
const Resturantcard=( {name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
//  const {user}=useContext(UserContext);
    return(
    <div className="w-56 p-2 m-2 shadow-2xl  bg-white truncate">
      <img src={IMG_CDN_LINK + cloudinaryImageId}/>
      <h2 className="font-bold text-2xl ">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4 >{lastMileTravelString}</h4>
      {/* <h5>{user.name}</h5> */}
      </div>
    );
  
  };
  export default Resturantcard;