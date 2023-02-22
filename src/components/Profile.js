import LOgo from "../assets/img/swiggy.jpeg";
const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="pl-3 ">
        <h1 className="text-7xl text-cyan-600 py-3">
          welcome to
          <br />
          swiggy
          <br />
          <span>Testy and frsh Food</span>
        </h1>
        <h2 className="w-96 p-3 m-3">
          Hundreds Of Options To Choose From And The Most Delicious Food To
          Gorge On. Order Now. Give The Food You Love A Boost. Use Swiggy App
          And Get 50% Off On Your First Order. Hassle-Free Ordering. Live Order
          Tracking. Lightning Fast Delivery.
        </h2>
      </div>

      <div className="about-right">
        <img className=" shadow-xl w-96 h-96 p-4 m-4" src={LOgo} alt="swiggy.com" />
      </div>
    </div>
  );
};
export default Profile;
