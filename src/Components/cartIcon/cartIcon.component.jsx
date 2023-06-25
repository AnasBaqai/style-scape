
import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartIcon = ({onCLickHandler})=>{
    const {totalItems}= useContext(CartContext)
    return(
        <div className="cart-icon-container" onClick={onCLickHandler}>
        <BagLogo className = "shopping-icon"/>
        <span className="item-count">{totalItems}</span>
        </div>
    )
}


export default CartIcon