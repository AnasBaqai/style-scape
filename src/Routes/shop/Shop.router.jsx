import shopData from "../../shop-data.json"

const Shop = () => {
    return (
        shopData.map(({ id, name }) => {
            return (
                <div key={id} >
                    <h1>{name}</h1>
                </div>
            )
        })
    )
}


export default Shop 