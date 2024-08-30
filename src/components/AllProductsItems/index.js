import { useState,useEffect } from "react"
import ProductCard from "../ProductCard"
import Cookies from 'js-cookie'
import "./index.css"
const AllProductsItems=()=>{
  const [productsList,setProductsList] = useState([])
  const getProductsItems=async()=>{
    const jwtToken = Cookies.get("jwt_token")
    const url="https://apis.ccbp.in/products" 
    const options = {
        method:'GET',
        headers:{
            Authorization:`Bearer ${jwtToken}`
        },
    }
    const response = await fetch(url,options)
    const data  = await response.json()
    if (response.ok===true){
       const {products} = data 
       const newProducts = products.map((eachProduct)=>({
            id:eachProduct.id,
            brand:eachProduct.brand,
            imageUrl:eachProduct.image_url,
            price:eachProduct.price,
            rating:eachProduct.rating,
            title:eachProduct.title
       }))
       console.log(newProducts)
       setProductsList(newProducts)
    }
  }  

  useEffect(()=>{
        getProductsItems()
    },[])

    return (
        <div className="products-container">
            <ul className="item-list">{productsList.map((eachProduct)=>(
                <ProductCard product={eachProduct} key={eachProduct.id} />
            ))}</ul>
        </div>
    )
}
export default AllProductsItems