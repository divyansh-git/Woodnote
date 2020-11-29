import React from "react";
import Blog_Card from "../Blog_Card/Blog_Card";
import DailyLife_Data from "./DailyLife_Data";
import {Link,useRouteMatch} from "react-router-dom";
import "./DailyLife_Card_Container.css";
function Bcard(val)
{
    let {path,url} =useRouteMatch();
    return(
       <Link style={{textDecoration:"none"}} to={`${url}/${val.blog_name}`}> <Blog_Card image={val.blog_image} description={val.blog_description}  title={val.blog_name}/></Link>
    )
}
const Blog_Card_Container=()=>{
    return(
        <>
        <div className=" DailyLife_Container">
            {DailyLife_Data.map(Bcard)} 
        </div>
        </>
    )
}
export default Blog_Card_Container;