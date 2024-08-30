import Header from "../Header"
import AllProductsItems from "../AllProductsItems"
import "./index.css"
const Products=()=>{
    return (
        <>
        <Header/>
            <div className="products-section">
                <h1 className="products-heading">All Products</h1>
               <AllProductsItems/>
            </div>
        </>
    )
}

export default Products