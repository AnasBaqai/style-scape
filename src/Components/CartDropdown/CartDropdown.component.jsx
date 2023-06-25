import "./cart-dropdown.styles.scss"
import Button from "../Button/Button.Component"
import CartItem from "../CartItem/CartItem.component"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useNavigate } from "react-router-dom"
const CartDropDown = ()=>{
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate("/checkout")
    }
    const {cartItems}= useContext(CartContext)
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