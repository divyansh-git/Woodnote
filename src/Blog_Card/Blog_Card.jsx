import React from "react";
import {useHistory} from "react-router-dom";
import "./Blog_Card.css";

let Blog_Card=(props)=>{ 
    
    return (
    <div className="Blog_Card">
         <div className="card_image">
            <img src={props.image}></img>
         </div>
        <div className="card_title"><b style={{color:"green"}}>Title: </b>{props.title}</div>   
        <div className="card_description"><b style={{color:"green"}}>Description: </b>{props.description}</div>   
    </div>
    )
}
export default Blog_Card;