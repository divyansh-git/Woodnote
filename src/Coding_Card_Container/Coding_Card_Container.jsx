import React from "react";
import Blog_Card from "../Blog_Card/Blog_Card";
import Coding_Data from "./Coding_Data";
import "./Coding_Card_Container.css";
import {BrowserRouter,Link,Switch,Route,useParams, useRouteMatch} from "react-router-dom";
import Home from "../Home/Home";

function Bcard(val)
{
    let {path,url} =useRouteMatch();
    return(
        <>
        <Link to={`${url}/${val.blog_name}`}><Blog_Card image={val.blog_image} title={val.blog_name} description={val.blog_description} /></Link>
       </>
    )
}
const Blog_Card_Container=()=>{
    
    return(
        <>
        <div className="Coding_Container">
            {Coding_Data.map(Bcard)} 
        </div>
        </>
    )
}
export default Blog_Card_Container;