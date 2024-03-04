import "./Category.styles.scss"
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { categoriesContext } from "../../Context/CategoriesContext"
import ProductsCard from "../../Components/ProductsCard/ProductsCard.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"
const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <>
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="cat-container">

                {
                    products && products.map((product) => {
                        return <ProductsCard key={product.id} product={product} />
                    })
                }

            </div>
        </>
    )
}

export default Category