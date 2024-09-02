import {Link} from "react-router-dom"
import "./index.css"
const ProductCard=(props)=>{
    const {product} = props
    const {id,brand,imageUrl,price,rating,title} =product
    return (
     <Link className="product-link" to={`/products/${id}`}>
        <li className="product-item">
            <img className="product-image" src={imageUrl} alt={title} />
            <h1 className="title-name">{title}</h1>
            <p>{`by ${brand}`}</p>
            <div className="product-details">
                <p className="price">{`Rs ${price}/-`}</p>
                <div className="rating-container">
                    <p>{rating}</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="start" className="star"/>
                </div>
            </div>
        </li>
        </Link>
    )
}

export default ProductCard