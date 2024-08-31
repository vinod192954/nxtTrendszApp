import { BsFilterRight } from "react-icons/bs";
import "./index.css"
const ProductsHeader=(props)=>{
    const {sortbyOptions,activeOptionId,updateActiveOptionId} = props

    const onChangeOption=(event)=>{
        updateActiveOptionId(event.target.value)
    }

    return (
        <div className="products-header-container">
            <h1 className="products-heading">All Products</h1>
            <div className="filter-container">
                <BsFilterRight size={30}/>
                <h1 className="sort-heading">Sort by</h1>
                <select value={activeOptionId} onChange={onChangeOption} className="filter-options">
                    {sortbyOptions.map(eachOption=>(
                        <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                        >{eachOption.displayText}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ProductsHeader