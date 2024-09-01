import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import Header from "../Header"
import "./index.css"
const ProductItemDetails=(props)=>{
     const [detailedProductItem,setDetailedProduct] = useState({})
     const [similarProducts,setSimilarProducts] = useState([])
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


    useEffect(()=>{
        getDetailedProduct()
    })


    return (
        <>
         <Header />
            <div className="detailed-product">
               <div className="product-detailed">
                    <img className="detailed-image" src={detailedProductItem.imageUrl} />
                    <div>
                        <h1>{detailedProductItem.title}</h1>
                        <p>{detailedProductItem.price}</p>
                    </div>
               </div>
            </div>
        </>
    )
}

export default ProductItemDetails