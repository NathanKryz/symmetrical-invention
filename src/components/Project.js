import React from 'react';
import './styles/main.css';

export default function Project(props){

    return (
        <div>
         <div className="projdiv">
           <a href={`${props.link}`}>
            <img className="projimg" src={`${props.image}`} alt={`${props.alt}`}></img>
           </a>
         <span className="projlab"><p>{`${props.title}`}</p></span>
         </div>
          <div className="text-align-center">
           <a href={`${props.deployed}`} className="btn btn-light">Deployment</a>
           <a href={`${props.link}`} className="btn btn-info">Github</a>
          </div>
        </div>
     
    );


};