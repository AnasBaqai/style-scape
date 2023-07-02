import "./categoryItem.scss"
import { useNavigate } from "react-router-dom"
const CategoryItem= ({category})=>{
    const {title,imageUrl,route}= category
    const navigate = useNavigate()
    const navigateHandler = ()=>navigate(route)
    return(
        <div className="category-container" onClick={navigateHandler}>
        <div className="background-image" style={{
          backgroundImage:`url(${imageUrl})`
        }} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>shop Now</p>
        </div>
      </div>
    )
}


export default CategoryItem