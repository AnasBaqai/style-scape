import "./checkout-page.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CheckoutCard from "../../Components/CheckoutCard/CheckoutCard.component"
import { useSelector } from "react-redux"
import { removeItemFromCart,addItemToCart,removeItemCompletely } from "../../store/cart/cart.action"
import { selectCartItems,selectNewCartTotal  } from "../../store/cart/cart.selector"
const CheckOutPage = () => {
    // const { cartItems, removeItemFromCart, addItemToCart, removeItemCompletely, totalPrice } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectNewCartTotal)
    return (
        <div className="checkout-container">
            <div className="checkout-header ">

                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>

            </div>
            {
                cartItems.map((cartItem) => {
                    return <CheckoutCard key={cartItem.id} cartItem={cartItem} cartItems= {cartItems}removeItemFromCart={removeItemFromCart} addItemToCart={addItemToCart}
                        removeItemCompletely={removeItemCompletely}
                    />

                })
            }
            <span className="total">total:${totalPrice}</span>
        </div>

    )
}


export default CheckOutPage