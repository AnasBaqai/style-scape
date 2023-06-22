import { useContext } from "react"
import { productsContext } from "../../Context/productsContext"

const Shop = () => {
    const {products} = useContext(productsContext);
    console.log(products)
    return (
        products.map(({ id, name }) => {
            return (
                <div key={id} >
                    <h1>{name}</h1>
                </div>
            )
        })
    )
}


export default Shop 