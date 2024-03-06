import "./cart-dropdown.styles.scss"
import Button from "../Button/Button.Component"
import CartItem from "../CartItem/CartItem.component"
import { useNavigate } from "react-router-dom"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useSelector } from "react-redux"
const CartDropDown = ()=>{
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate("/checkout")
    }
    // const {cartItems}= useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    return(
        <div className="cart-dropdown-container">
        <div className="cart-items">
        {
            cartItems.map((cartItem)=>{
                return(
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                )
            })
        }
            
        </div>
        <Button onClick= {navigateHandler}>GO TO CHECKOUT</Button>

        </div>
    )
}


export default CartDropDown