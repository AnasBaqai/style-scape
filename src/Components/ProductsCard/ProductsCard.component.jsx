import "./productsCard.styles.scss"
import Button from "../Button/Button.Component"
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductsCard = ({product})=>{
    const {imageUrl,price,name}= product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
   return(
    <div  className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        </div>
        <Button buttonType="inverted" onClick={()=>dispatch(addItemToCart(cartItems,product))}>Add to Cart</Button>
   
    </div>
   ) 
}



export default ProductsCard