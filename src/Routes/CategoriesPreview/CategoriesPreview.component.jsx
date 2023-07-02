import { useContext } from "react"
import { categoriesContext } from "../../Context/CategoriesContext"

import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(categoriesContext)


    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </div>


    )
}


export default CategoriesPreview