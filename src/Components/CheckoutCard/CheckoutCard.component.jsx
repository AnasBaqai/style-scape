import "./checkout-card.styles.scss"


const CheckoutCard = ({ cartItem,removeItemFromCart,addItemToCart,removeItemCompletely }) => {
  
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className="checkout-item-container">
            <div className="image-container ">
                <img src={imageUrl} alt={name} />
            </div>

            <span className="name">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={()=>{removeItemFromCart(cartItem)}}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItemCompletely(cartItem)}>&#10005;</div>
        </div>
    )
}


export default CheckoutCard