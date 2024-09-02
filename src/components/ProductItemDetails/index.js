import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import Header from "../Header"
import SimilarProducts from "../SimilarProducts"
import CartContext from "../context/CartContext"
import "./index.css"
const ProductItemDetails=(props)=>{
     const [detailedProductItem,setDetailedProduct] = useState({})
     const [similarProducts,setSimilarProducts] = useState([])
     const [quantity,setQuantity] = useState(1)
    const getDetailedProduct=async()=>{
        const {match} = props 
        const {params} =match 
        const {id} = params 
        const url=`https://apis.ccbp.in/products/${id}` 
        const Token = Cookies.get("jwt_token") 
        const options={
            method:"GET",
            headers:{
                Authorization:`Bearer ${Token}`,
            }
        }
    
        const response = await fetch(url,options)
        const data = await response.json() 
        const newProduct = {
            id:data.id,
            brand:data.brand,
            description:data.description,
            imageUrl:data.image_url,
            price:data.price,
            rating:data.rating,
            title:data.title,
            availability:data.availability,
            similarProducts:data.similar_products,
            totalReviews:data.total_reviews,
        }
        const newSimilarproducts= newProduct.similarProducts.map((eachProduct)=>({
            id:eachProduct.id,
            brand:eachProduct.brand,
            description:eachProduct.description,
            imageUrl:eachProduct.image_url,
            price:eachProduct.price,
            rating:eachProduct.rating,
            title:eachProduct.title,
            totalReviews:eachProduct.total_reviews,
        }))

        setDetailedProduct(newProduct)
        setSimilarProducts(newSimilarproducts)
    }

    const increaseQuantity=()=>{
        setQuantity(prevState=>prevState+1)
    }
    const decreaseQuantity=()=>{
        if (quantity>=1){
            setQuantity(prevState=>prevState-1)
        }
        
    }
    useEffect(()=>{
        getDetailedProduct()
    },[])

    const renderProductDetails=()=>(
        <CartContext.Consumer>
         {value=>{
            const {addProductCartItem} = value  

            const onClickToAddCart=()=>{
                addProductCartItem({...detailedProductItem,quantity})
            }

           return ( 
           <>
            <Header/>
            <div>
               <div className="detailed-product">
                  <div className="product-detailed">
                       <img className="detailed-image" src={detailedProductItem.imageUrl} />
                       <div className="product-details-container">
                           <h1>{detailedProductItem.title}</h1>
                           <p className="product-price">{`Rs  ${detailedProductItem.price }/-`}</p>
                           <div className="reviewAndRating">
                               <div className="rating-container">
                                   <p>{detailedProductItem.rating}</p>
                                   <img className="star" src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
                               </div>
                               <p>{`${detailedProductItem.totalReviews} Reviews`}</p>
                           </div>
                           <p>{detailedProductItem.description}</p>
                          <div className="availability">
                               <p className="avail">Availability:</p>
                               <p>{detailedProductItem.availability}</p>
                          </div>
                          <div className="brand-detls">
                             <p className="brand">Brand:</p>
                             <p>{detailedProductItem.brand}</p>
                          </div>
                          <hr className="line"/>
                          <div className="custom-quantity">
                           <button onClick={decreaseQuantity} className="minus-btn" type="button">-</button>
                            <p>{quantity}</p>
                           <button onClick={increaseQuantity} className="plus-btn">+</button>
                       </div>
                       <button onClick={onClickToAddCart} type="button" className="add-cart-btn">ADD TO CART</button>
                       </div>
                  </div>
                 
               </div>
               <div className="similar-products-list">
                   <h1 className="similar-heading">Similar Products</h1>
                   <ul className="similar-list">{similarProducts.map((eachSimilarProduct)=>(
                       <SimilarProducts similarProduct={eachSimilarProduct} key={eachSimilarProduct.id} />
                   ))}</ul>
               </div>
               </div>
           </>)
         }}
        
      </CartContext.Consumer>
    )

    
    return (
       renderProductDetails()
    )
}

export default ProductItemDetails