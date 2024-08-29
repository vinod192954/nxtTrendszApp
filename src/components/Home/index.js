import Header from "../Header"
import "./index.css"
const Home = ()=>{
    return (
        <>
            <Header/>
        <div className="Home-container">
            <div className="content-cotainer">
                <h1>Clothes That Get YOU Noticed</h1>
                <p>Fashion is part of the daily like and it does not quite help that it changes
                    all the time.Clothes have always been a marker of the era and we are in a revolution.
                    Your fashion makes you been seen and heard that way you own are.So,celebrate the seasons new and 
                    exciting fashion in your own way.
                </p>
                <div>
                    <button className="shop-button" type="button">Shop Now</button>
                </div>
            </div>
            <div className="home-img-container">
                <img 
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" 
                alt="nxt Trendz" className="nxt-trends-home"/>
            </div>
        </div>
        </>
    )
}

export default Home