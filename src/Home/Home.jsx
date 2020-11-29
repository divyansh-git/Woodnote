import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import Blog_Card from "../Blog_Card/Blog_Card";
import Categories_Data from "./Categories_Data";
function Bcard(val)
{
    return(
       <Link style={{textDecoration:"none"}} to={`${val.redirect}`}> <Blog_Card description={val.blog_description} image={val.blog_image}  title={val.blog_name}/></Link>
    )
}
const Home=()=>{
    return(
        <>
        <div className="Home">
        <h1>Let's Explore !!</h1>
        <p>Read the wonderful content and share your thoughts.<br/> Read blogs from life style things to latest technology trends<br/> and much more!!  </p>
        <button type="button" class="btn btn-outline-secondary"><a href="#featured">Get Started</a></button>
        </div>
        <div className="features">
        <h1 id="category">Categories</h1>
        <div id="featured" className="container">
        {Categories_Data.map(Bcard)} 
        </div>
        </div>
        </>
    )
}
export default Home;