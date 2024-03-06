
import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useSelector } from "react-redux";
import { selectNewCartCount } from "../../store/cart/cart.selector";
const CartIcon = ({onCLickHandler})=>{
    // const {totalItems}= useContext(CartContext)
    const totalItems = useSelector(selectNewCartCount)
    return(
        <div className="cart-icon-container" onClick={onCLickHandler}>
        <BagLogo className = "shopping-icon"/>
        <span className="item-count">{totalItems}</span>
        </div>
    )
}


export default CartIcon