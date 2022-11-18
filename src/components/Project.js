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
        <a href={`${props.deployed}`} className="btn btn-primary">Deployment</a>
        </div>
     
    );


};