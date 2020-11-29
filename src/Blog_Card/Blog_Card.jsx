import React from "react";
import "./Blog_Card.css";
import {useRouteMatch} from "react-router-dom"
let Blog_Card=(props)=>{ 
    
    const {path,url}=useRouteMatch();
    console.log(path)
    return (
        <>
            <div className="card">
                <img src={props.image}></img>
                <h3> {props.title}</h3>
                {(path==="/")?
                <p>{props.description}</p>
                : 
                <>
                <p>{props.description}....</p>
                <p id="click">read more</p>
                </>
                }
            </div>

        </>
        
    )
}
export default Blog_Card;