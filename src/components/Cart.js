import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart =()=>{

    const CardItem=useSelector(Store=>Store.card.items);
    return (

        <div>
            <h1 className="font-bold text-3xl flex">Cart-item{CardItem.length}</h1>
            <div className="flex flex-wrap">
            {CardItem.map(item => <FoodItem key={item.id}{...item}/>)}
            </div>
       

        </div>
    )

}
export default Cart;