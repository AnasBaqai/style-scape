import { Routes,Route } from "react-router-dom"
import { useEffect } from "react"
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component"
import Category from "../Category/Category.component"
import { getCategoriesAndDocuments } from "../../utils/FireBase/firebase.utils"
import {setCategoriesMap} from "../../store/categories/categories.action"
import { useDispatch } from "react-redux"
import "./shop.styles.scss"
const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategories= async()=>{
            const fetchedCategories = await getCategoriesAndDocuments()
            dispatch(setCategoriesMap(fetchedCategories))
          
        }
        getCategories();
   
    },[dispatch])
return(
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    </Routes>
)
}


export default Shop 