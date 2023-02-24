// import { useEffect,} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
import useRestaurant from "../Utils/useRestaurant.";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant.";
import { addItems } from "../Utils/CardSlice";
import { useDispatch } from "react-redux";

const Resturantmanue = () => {
  const param = useParams();
  const { id } = param;

  const resturant = useRestaurant(id);
  const dispatch = useDispatch();

  const addfoodItems = (item) => {
    dispatch(addItems(item));
    // console.log(item);
  };

  if (!resturant) {
    return <Shimmer />;
  }
  // if(!resturant){
  //   return null;
  // }

  return (
    <div className=" flex ">
      <div className="p-3 font-bold">
        <h1>Resturant id:{id}</h1>
        <h2>{resturant?.name}</h2>
        <img src={IMG_CDN_LINK + resturant?.cloudinaryImageId} />
        <h3>{resturant?.area}</h3>
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.costForTwoMsg}</h3>
        <h3>{resturant?.avgRating},Stars</h3>
      </div>
      <div></div>
      <div>
        <h1>Menu</h1>
        <ul>
          
          {resturant?.menu?.items &&
            Object.values(resturant?.menu?.items).map((item) => (
              <li key={item?.id}>
                {item?.name}-
                <button
                  className="m-1 p-1 bg-black text-white"
                  onClick={() => {
                    addfoodItems(item);
                  }}
                >
                  add-Item
                </button>
              </li>
             
              
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Resturantmanue;
