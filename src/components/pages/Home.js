// Main splash, lorem ipsum it up
import React from 'react';
import '../styles/main.css';


export default function Home() {
  return (
    <div className="bg-light">
      <h1 className="text-info bg-dark text-center">About Me</h1>
      <div id="profimgcontainer">
        <img src="./Imageofme.png" alt="Picture of Nathan" id="profimg"></img>
      </div>
      <div className="pageText text-center">
      <p>
        Hailing from a sub-urban area in Ontario, I am a UofT SCS student studying in the practise of fullstack coding. Learning how to not only create structured webpages, but various applications to use in them as well.
        It has always been a dream of mine to get into the programming field proper, so that I can do what I love while making a difference in the future of technology.
        Over this three month journey, it is my goal to be able to develop a wide range of applications that will have a lasting positive effect on all those who use them.
        Check back later as I continue along this journey of mine as I improve my skills, and will update this page to further showcase newer and greater projects as time goes on.
      </p>
      </div>
    </div>
  );
}