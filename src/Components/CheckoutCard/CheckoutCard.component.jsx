import "./checkout-card.styles.scss"
import { useDispatch } from "react-redux"
import { addItemToCart, removeItemCompletely, removeItemFromCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useSelector } from "react-redux"
const CheckoutCard = ({ cartItem }) => {
  
    const { name, quantity, imageUrl, price } = cartItem
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    return (
        <div className="checkout-item-container">
            <div className="image-container ">
                <img src={imageUrl} alt={name} />
            </div>

            <span className="name">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={()=>dispatch(removeItemFromCart(cartItems,cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>dispatch(addItemToCart(cartItems,cartItem))}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>dispatch(removeItemCompletely(cartItems,cartItem))}>&#10005;</div>
        </div>
    )
}


export default CheckoutCard