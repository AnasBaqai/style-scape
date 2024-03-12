import { Routes,Route } from "react-router-dom"
import { useEffect } from "react"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component"
import Category from "../Category/Category.component"
import {fetchCategoriesAsync} from "../../store/categories/categories.action"
import { useDispatch } from "react-redux"
import "./shop.styles.scss"
const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesAsync())
    },[dispatch])
return(
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    </Routes>
)
}


export default Shop 