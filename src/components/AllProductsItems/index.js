import { useState,useEffect } from "react"
import{ThreeDots}from 'react-loader-spinner'
import ProductCard from "../ProductCard"
import ProductsHeader from "../ProductsHeader"
import FiltersGroup from "../FiltersGroup"
import Cookies from 'js-cookie'
import "./index.css" 
const apiStatusConstants={
  initial:'INITIAL',
  successful:'SUCCESSFULL',
  failure:'FAILURE',
  progress:'PROGRESS'
}

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]



const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price(High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price(Low-High)',
    },
  ]
  
const AllProductsItems=()=>{
  const [productsList,setProductsList] = useState([])
  const [isLoading,setLoading] = useState(false)
  const [activeOptionId,setOptionId] = useState(sortbyOptions[0].optionId)
  const [activeCategoryId,setCategory] = useState('')
  const [activeRatingId,setRating] = useState('') 
  const [searchTitle,setSearchInput] = useState('')
  
 
  const changeActiveCategory=(category)=>{
      setCategory(category)
     
  }

  const changeActiveRating=(rating)=>{
    setRating(rating)
    console.log(rating)
   
  }

  const clearFilters=()=>{
    setCategory('')
    setOptionId('')
    setRating('')
    setSearchInput('')
    getProductsItems()
  }

  const changeSearchInput=(searchInput)=>{
    setSearchInput(searchInput)
    
  }

  
  const getProductsItems=async()=>{
    setLoading(true)
    const jwtToken = Cookies.get("jwt_token")
    const url=`https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&rating=${activeRatingId}&title_search=${searchTitle}`
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
    },[activeOptionId,activeCategoryId,activeRatingId])


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
    <div className="products-sections-view">
        <ProductsHeader sortbyOptions={sortbyOptions} activeOptionId={activeOptionId} updateActiveOptionId={updateActiveOptionId} />
    <ul className="item-list">{productsList.map((eachProduct)=>(
    <ProductCard product={eachProduct} key={eachProduct.id} />
        ))}
    </ul>
    </div>
    )
    return (
        <div className="products-container">
          <FiltersGroup categoryOptions={categoryOptions} 
          ratingsList={ratingsList} 
           searchTitle={searchTitle}
           clearFilters={clearFilters}
           getProductsItems={getProductsItems}
          changeActiveCategory={changeActiveCategory}
          changeActiveRating={changeActiveRating}
          changeSearchInput={changeSearchInput}/>
           {isLoading ? renderLoader() : renderProducts()}
        </div>
    )
}
export default AllProductsItems