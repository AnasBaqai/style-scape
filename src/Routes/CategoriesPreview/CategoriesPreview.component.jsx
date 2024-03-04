// import { useContext } from "react"
// import { categoriesContext } from "../../Context/CategoriesContext"
import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
const CategoriesPreview = () => {
    const  categoriesMap = useSelector(selectCategoriesMap);
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