import "./category-preview.styles.scss"
import ProductsCard from "../ProductsCard/ProductsCard.component"
import { useNavigate } from "react-router-dom"



const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const onClickHandler = ()=>{
        navigate("/shop/"+title)
    }
    return (
        <div className="category-preview-container">
            <h2>
                <span className="title" onClick={onClickHandler}>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products.filter((_, index) => index < 4)
                        .map((product) => {
                            return (
                                <ProductsCard key={product.id} product={product} />
                            )
                        })
                }
            </div>

        </div>
    )
}


export default CategoryPreview