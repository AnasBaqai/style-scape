
import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

const CartIcon = ()=>{
    return(
        <div className="cart-icon-container">
        <BagLogo className = "shopping-icon"/>
        <span className="item-count">0</span>
        </div>
    )
}


export default CartIcon