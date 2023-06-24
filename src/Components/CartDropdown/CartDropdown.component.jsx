import "./cart-dropdown.styles.scss"
import Button from "../Button/Button.Component"
import CartItem from "../CartItem/CartItem.component"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
const CartDropDown = ()=>{
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
        <Button>GO TO CHECKOUT</Button>

        </div>
    )
}


export default CartDropDown