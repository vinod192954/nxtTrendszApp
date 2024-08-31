import { useState,useEffect } from "react"
import {ThreeDots} from 'react-loader-spinner'
import Cookies from "js-cookie"
import ProductCard from "../ProductCard"
import "./index.css"
const apiUrlStatusConstants = {
    success:'SUCCESS',
    progress:'PROGRESS',
    failure:'FAILURE',
}
const PrimeDeals=()=>{ 
    const [primeDeals,setPrimeDeals] = useState([])
    const [status,setStatus] = useState(false) 

    const getPrimeDeals=async()=>{
        setStatus(apiUrlStatusConstants.progress)
        const jwtToken = Cookies.get("jwt_token")
        const url = 'https://apis.ccbp.in/prime-deals'
        const options = {
            method:'GET',
            headers:{
                Authorization:`Bearer ${jwtToken}`
            },
        }
        const response = await fetch(url,options)
        const data  = await response.json()
        if (response.ok===true){
            const {prime_deals} = data 
            const primeDeals = prime_deals 
            const newPrimeDeals = primeDeals.map((eachPrimeDeal)=>({
                id:eachPrimeDeal.id,
                brand:eachPrimeDeal.brand,
                imageUrl:eachPrimeDeal.image_url,
                price:eachPrimeDeal.price,
                rating:eachPrimeDeal.rating,
                title:eachPrimeDeal.title,
            }))
            console.log(newPrimeDeals)
            setPrimeDeals(newPrimeDeals)
            setStatus(apiUrlStatusConstants.success)
        }
        else{
            setStatus(apiUrlStatusConstants.failure)
        }
    }

    useEffect(()=>{
        getPrimeDeals()
    },[])

    const renderLoader=()=>(
        <div className="products-loader-container">
           <ThreeDots color="#0b69ff" height={50} width={50} />
        </div>
     )


     const renderFalilureView=()=>(
        <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
        className="register-prime-image"
      />
     )


     const renderPrimeDeals=()=>(
     <div>
        <h1 className="prime-heading">Prime Deals</h1>
        <ul className="prime-deals-section">{primeDeals.map((eachPrimeDeal)=>(
            <ProductCard product={eachPrimeDeal} key={eachPrimeDeal.id} />
        ))}</ul>
    </div>)

   
   const renderPrimeDealsResultView=()=>{
    switch(status){
        case apiUrlStatusConstants.success:
           return renderPrimeDeals() 
        case apiUrlStatusConstants.progress:
           return renderLoader()
        case apiUrlStatusConstants.failure:
           return renderFalilureView()
        default :
         return null
      }
   }

   return (
      <div>
        {renderPrimeDealsResultView()}
      </div>
   )
}
export default PrimeDeals