import { useState,useEffect } from "react"
import{ThreeDots}from 'react-loader-spinner'
import ProductCard from "../ProductCard"
import ProductsHeader from "../ProductsHeader"
import Cookies from 'js-cookie'
import "./index.css" 
const apiStatusConstants={
  initial:'INITIAL',
  successful:'SUCCESSFULL',
  failure:'FAILURE',
  progress:'PROGRESS'
}


const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price(Low-High)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price(High-Low)',
    },
  ]
  
const AllProductsItems=()=>{
  const [productsList,setProductsList] = useState([])
  const [isLoading,setLoading] = useState(false)
  const [activeOptionId,setOptionId] = useState(sortbyOptions[0].optionId)
  
  
 
  
  
  const getProductsItems=async()=>{
    setLoading(true)
    const jwtToken = Cookies.get("jwt_token")
    const url=`https://apis.ccbp.in/products?sort_by=${activeOptionId}`
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
       setLoading(false)
    }
  }  

  useEffect(()=>{
        getProductsItems()
    },[activeOptionId])


    const updateActiveOptionId=(activeId)=>{
        setOptionId(activeId)
        getProductsItems()
  }

 const renderLoader=()=>(
    <div className="products-loader-container">
       <ThreeDots color="#0b69ff" height={50} width={50} />
    </div>
 )
const renderProducts=()=>( 
    <>
        <ProductsHeader sortbyOptions={sortbyOptions} activeOptionId={activeOptionId} updateActiveOptionId={updateActiveOptionId} />
    <ul className="item-list">{productsList.map((eachProduct)=>(
    <ProductCard product={eachProduct} key={eachProduct.id} />
        ))}
    </ul>
    </>
    )
    return (
        <div className="products-container">
           {isLoading ? renderLoader() : renderProducts()}
        </div>
    )
}
export default AllProductsItems