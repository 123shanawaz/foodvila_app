import { useState, } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Store from "../Utils/Store";
// import Theme from "../Utils/UserContext"
// import useOnline from "../Utils/useOnline";
// import UserContext from "../Utils/UserContext";
// const loginuser=()=>{
//   return true;
// }

const title = (
  <a href="/">
    <img
      className="h-20 p-2 rounded-lg"
      alt="logo"
      src="https://www.ujudebug.com/wp-content/uploads/2019/08/food_villa-min.jpg"
    ></img>
  </a>
);

const Header = () => {
  const [loginuser, setloginuser] = useState(true);
  // const isonline = useOnline();

  const cardItems=useSelector(Store=>  Store.card.items);
  // console.log(cardItems);


  // const {user}=useContext(UserContext)

  return (
    <div className="flex justify-between bg-white shadow-lg w-screen h-20 rounded-md  items-center overflow-y-auto ">
      {title}

      <div className="">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="px-2">About</li>
          </Link>
          <Link to="/Contact">
            <li className="px-2">Contact</li>
          </Link>
          
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">cart-{cardItems.length}</li>
          </Link>
         

        </ul>

      </div>
      {/* <h1>{isonline ? "🟢" : "🔴"}</h1> */}
     {/* <h1 className="p-10 font-bol
     ">{user.name}</h1>  */}

     <Link to="/login">
      {loginuser ? (
        <button  className="p-2 m-2  text-white bg-black rounded-sm" onClick={() => setloginuser(false)}>Logout</button>
        
      ) : (
        <button className="p-2 m-2  text-white bg-black rounded-sm" onClick={() => setloginuser(true)}>Login</button>
      )}
      </Link>
    </div>
  );
};
export default Header;
