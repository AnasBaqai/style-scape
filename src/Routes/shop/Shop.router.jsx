import { useContext,Fragment } from "react"
import { categoriesContext } from "../../Context/CategoriesContext"
import ProductsCard from "../../Components/ProductsCard/ProductsCard.component";
import "./shop.styles.scss"
const Shop = () => {
    const { categoriesMap } = useContext(categoriesContext)
   
    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    return (
                        <Fragment key={title}>
                            <h2>{title}</h2>
                            <div className="products-container">
                                {
                                    categoriesMap[title].map((product) => {
                                        return (
                                            <ProductsCard key={product.id} product={product} />
                                        )
                                    })
                                }
                            </div>
                        </Fragment>
                    )
                })
            }
        </>


    )
}


export default Shop 