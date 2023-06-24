import "./productsCard.styles.scss"
import Button from "../Button/Button.Component"
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
const ProductsCard = ({product})=>{
    const {imageUrl,price,name}= product;
    const {addItemToCart} = useContext(CartContext)
   return(
    <div  className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={()=>addItemToCart(product)}>Add to Cart</Button>
   
    </div>
   ) 
}



export default ProductsCard