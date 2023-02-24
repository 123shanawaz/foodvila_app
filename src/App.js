import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client ";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import Resturantcard from "./components/ResturantCrd";
import Resturantmanue from "./components/Resturantmanue";
import Profile from "./components/profile";
import Basic from "./components/Basic";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import Cart from "./components/Cart";



// import Instamart from "./components/Instamart";

// const Resturantcard=()=>{
//   return(
//   <div className="card">
//     <img className="img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/syd5yoza8hcfahqivwzd"/>
//     <h2>Burger King</h2>
//     <h3>Burgers,American</h3>
//     <h4>4.2 Stars</h4>
//     </div>
//   );

// };

// const Burgerking={
//   name:"Burger king",
//   image:
//   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/syd5yoza8hcfahqivwzd",
//   cusines:["Burger","American"],
//   rating:"4.2",
// };

//using propos//

// const Resturantcard=(props)=>{
//     // console.log(props);
//     return(
//     <div className="card">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?. cloudinaryImageId}/>
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
//       <h4>{props.restaurant.data?.lastMileTravel}minute</h4>
//       </div>
//     );

//   };

//using Destructring array //

// const Resturantcard=({restaurant})=>{

//       return(
//       <div className="card">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?. cloudinaryImageId}/>
//         <h2>{restaurant.data?.name}</h2>
//         <h3>{restaurant.data?.cuisines.join(",")}</h3>
//         <h4>{restaurant.data?.lastMileTravel}minute</h4>
//         </div>
//       );

//     };

//using 2nd method of destructing object//
// const Resturantcard=({restaurant})=>{
//       const {name,cuisines,cloudinaryImageId,lastMileTravel }=restaurant.data;
//       return(
//       <div className="card">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
//         <h2>{name}</h2>
//         <h3>{cuisines.join(",")}</h3>
//         <h4>{lastMileTravel}minute</h4>
//          </div>
//       );

//     };

//usong another method destructing aaray//

// const Body = () => {
//   return (
//     <div className="restro-list">

//        <Resturantcard {...restaurantList[0].data}
//        />

//        <Resturantcard {...restaurantList[1].data}
//        />

//        <Resturantcard {...restaurantList[2].data}
//        />

//        <Resturantcard {...restaurantList[3].data}
//        />

//        <Resturantcard {...restaurantList[4].data}
//        />
//        <Resturantcard {...restaurantList[5].data}
//        />

//     </div>
//   );
// };

const Instamart=lazy(()=>import("./components/Instamart"))
const Applayout = () => {

 
  return (
    <Provider store={Store}>
    <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About/>,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <Resturantmanue />,
      },
      {
      
        path:"/instamart",
        element:<Suspense>
          <Instamart/>
        </Suspense>
      },
      {
      
        path:"/login",
        element:<Basic/>
      },
      {
      
        path:"/cart",
        element:<Cart/>
      },
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
