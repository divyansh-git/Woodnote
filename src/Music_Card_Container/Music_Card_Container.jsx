import React from "react";
import Blog_Card from "../Blog_Card/Blog_Card";
import Blog_Data from "./Music_Data";
import "./Music_Card_Container.css";
import {Link,Switch,Route, useRouteMatch, useParams} from "react-router-dom";
import Home from "../Home/Home";

const Bcard=(val)=>
{
   let {path,url} =useRouteMatch();
    return(
        <>
       <Link to={`${url}/${val.blog_name}`}><Blog_Card image={val.blog_image} title={val.blog_name} description={val.blog_description} /></Link>
        </>
    )
}
const Music_Card_Container=()=>{
   
    let path=useParams();
    return(
        <>
        <div className="Music_Container">
           {Blog_Data.map(Bcard)}
        </div>
        </>
    )
}
export default Music_Card_Container;