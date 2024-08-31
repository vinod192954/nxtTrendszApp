import Header from "../Header"
import AllProductsItems from "../AllProductsItems"
import PrimeDeals from "../PrimeDeals"
import "./index.css"
const Products=()=>{
    return (
        <>
        <Header/>
            <div className="products-section">
                <PrimeDeals />
                <h1 className="products-heading">All Products</h1>
               <AllProductsItems/>
            </div>
        </>
    )
}

export default Products