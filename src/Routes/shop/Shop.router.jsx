import { useContext, Fragment } from "react"
import { categoriesContext } from "../../Context/CategoriesContext"
import ProductsCard from "../../Components/ProductsCard/ProductsCard.component";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.component";
import "./shop.styles.scss"
const Shop = () => {
    const { categoriesMap } = useContext(categoriesContext)
   

    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }
        </div>


    )
}


export default Shop 