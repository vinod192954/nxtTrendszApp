import "./index.css"
const FiltersGroup=(props)=>{

    const renderSearchSection=()=>{
        const {changeSearchInput,searchTitle,getProductsItems} = props
        const searchProduct=(event)=>{
            changeSearchInput(event.target.value)
        }
        const onChangeEvent=(event)=>{
            if (event.key==="Enter"){
                getProductsItems()
            }
        }

        return (
            <div className="input-container">
            <input className="search-input" value={searchTitle}
             onKeyDown={onChangeEvent} onChange={searchProduct} type="search" placeholder="Search" />
        </div>)
    }

    const renderCategoryOptions=()=>{
        const {categoryOptions,changeActiveCategory} = props

        const onClickChangeCategory=(category)=>()=>{
            changeActiveCategory(category)
        }

        return (
            <div className="category-section">
                <h1>Cateogry</h1>
                <ul className="category-list">
                    {categoryOptions.map((eachCategory)=>(
                        <li  onClick={onClickChangeCategory(eachCategory.categoryId)} 
                        key={eachCategory.id}>{eachCategory.name}</li>
                    ))}
                </ul>
            </div>
        )
    }

    const renderRatings=()=>{
        const {ratingsList,changeActiveRating} = props

        const onClickToChangeRating=(rating)=>()=>{
            changeActiveRating(rating)
        }

        return(
            <div>
                <h1>Rating</h1>
                <ul>{ratingsList.map((eachRating)=>(
                    <li onClick={onClickToChangeRating(eachRating.ratingId)} className="rating-item" key={eachRating.ratingId}>
                        <img  className="star-rating" src={eachRating.imageUrl} />
                        <p>&up</p>
                    </li>
                ))}</ul>
            </div>
        )
    }

    const onClickClearFilters=()=>{
        const {clearFilters} = props 
        clearFilters()
    }

    return (
        <div className="filters-container">
            {renderSearchSection()}
            {renderCategoryOptions()}
            {renderRatings()}
            <div>
                <button className="click-button" onClick={onClickClearFilters} type="button"> Clear Filters</button>
            </div>
        </div>
    )
}

export default FiltersGroup