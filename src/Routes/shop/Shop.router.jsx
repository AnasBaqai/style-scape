import { Routes,Route } from "react-router-dom"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component"
import Category from "../Category/Category.component"
import "./shop.styles.scss"
const Shop = () => {
return(
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    </Routes>
)
}


export default Shop 