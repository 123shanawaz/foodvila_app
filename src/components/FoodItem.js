import { IMG_CDN_LINK } from "../config";

const FoodItem= ({
  name,
  description,
  cloudinaryImageId,
  price,
}) => {
  
  return (
    <div className="w-52 p-2 m-2 shadow-2xl  bg-white truncate">
      <img src={IMG_CDN_LINK + cloudinaryImageId} />
      <h2 className="font-bold text-2xl ">{name}</h2>
      <h3>{description}</h3>
      <h4> Rupee:{price}</h4>
      {/* <h5>{user.name}</h5> */}
    </div>
  );
};
export default FoodItem;
