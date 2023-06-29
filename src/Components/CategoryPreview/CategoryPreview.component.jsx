import "./category-preview.styles.scss"
import ProductsCard from "../ProductsCard/ProductsCard.component"



const CategoryPreview = ({ title, products }) => {
 
    return (
        <div className="category-preview-container">
            <h2>
                <span className="title">{title.toUpperCase()}</span>
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