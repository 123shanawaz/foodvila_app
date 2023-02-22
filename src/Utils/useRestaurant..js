import { useState, useEffect } from "react";
import { REST_MANU_URL } from "../config";
const useRestaurant = (id) => {
  const [resturant, setresturant] = useState(null);

  useEffect(() => {
    getresturantdeta();
  }, []);

  async function getresturantdeta() {
    const data = await fetch(REST_MANU_URL + id);
    const json = await data.json();
    // console.log(json);
    setresturant(json.data);
  }

  return resturant;
};

export default useRestaurant;
