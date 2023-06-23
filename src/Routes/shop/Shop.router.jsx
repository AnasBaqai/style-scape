import { useContext } from "react"
import { productsContext } from "../../Context/productsContext"
import ProductsCard from "../../Components/ProductsCard/ProductsCard.component";
import "./shop.styles.scss"
const Shop = () => {
    const { products } = useContext(productsContext);
    console.log(products)
    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return (
                        <ProductsCard key={product.id} product={product} />
                    )
                })
            }
        </div>

    )
}


export default Shop 