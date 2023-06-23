
import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

const CartIcon = ({onCLickHandler})=>{
    return(
        <div className="cart-icon-container" onClick={onCLickHandler}>
        <BagLogo className = "shopping-icon"/>
        <span className="item-count">0</span>
        </div>
    )
}


export default CartIcon