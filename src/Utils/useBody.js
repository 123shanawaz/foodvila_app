import { useState,useEffect } from "react";
const useBody=()=>{
    const [serachtext, setserachtext] = useState("");
    const [Allrestaurant, setAllsetrestaurant] = useState([]);
    const [filterdRestaurant, setfilterdrestaurant] = useState([]);
  
    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5562163&lng=88.37238099999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
  
      setfilterdrestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setAllsetrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }


    
    return [Allrestaurant,filterdRestaurant,setfilterdrestaurant];
  
}
export default useBody;