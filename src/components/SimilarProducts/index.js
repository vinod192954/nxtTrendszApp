import "./index.css"
const SimilarProducts=(props)=>{
    const {similarProduct} = props 
    const {title,brand,price,rating,imageUrl} = similarProduct
    return (
        <li className="similar-product-item">
            <img className="similar-product-img" src={imageUrl} alt="similar product" />
            <h1 className="title">{title}</h1>
            <p>{`by ${brand}`}</p>
            <div className="priceAndRating">
                <p className="price">{`Rs ${price}`}</p>
                <div className="rating">
                    <p>{rating}</p>
                    <img className="star-custom" src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
                </div>
            </div>
        </li>
    )
}
export default SimilarProducts