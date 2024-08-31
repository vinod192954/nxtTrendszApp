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
               <AllProductsItems/>
            </div>
        </>
    )
}

export default Products