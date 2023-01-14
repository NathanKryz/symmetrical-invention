// Links to six projects, bootstrap cards might be nice
import React from 'react';
import Project from '../Project';
import '../styles/main.css';

export default function Portfolio() {
  return (
    <div className='pageRender'>
      <h1 className='text-center'>Portfolio Page</h1>
      <div className="pageText text-center">
      <p>
        Below you can find the links to six of my deployed applications, ranging from simple Javascript
        applications, to PWA's, to API-fetching, and database integrated projects. Click the image to be taken
        to the Repository, and the button below each to the live deployment URLs. This portfolio itself was built using
        React.js
      </p>
      </div>
      <section className="container projContainer d-flex flex-wrap">
        <Project 
        link={'https://github.com/NathanKryz/psychic-journey'} 
        deployed={'https://psychic-journey.herokuapp.com/'}
        image={'./PJLoginscreen.png'} 
        alt={'Physic Journey Screenhot'} 
        title={'PsychicJourney'} 
        desc={`A Hangman RPG for those that wish to test their mind.
         Built using Javascript, CSS, Handlebars, Anime.js and Handlebars.
        Collaborated with ConstantMotion1 and ShayneKaruna.
        Role: Script and Handlebars integrator and chief bugfixer.`}
        />
        
        <Project 
        link={'https://github.com/NathanKryz/laughing-robot'} 
        deployed={'https://laughing-robot.herokuapp.com/'}
        image={'./jate-screenshot.png'} 
        alt={'Text Editor Screenshot'} 
        title={'JATE'} 
        desc={`A simple text saver and editor PWA for those with dynamic text saving needs.
        Built using HTML, CSS, Javascript, IndexedDB, Babel, Webpack Manifests.
        Solo developed project.`}
        />
        
        <Project 
        link={'https://github.com/NathanKryz/sturdy-bassoon'} 
        deployed={'https://fathomless-citadel-37887.herokuapp.com/'}
        image={'./note-taken-landing-screenshot.png'} 
        alt={'Note taker screenshot'} 
        title={'Note Taker'} 
        desc={`Digital note taking application to help users organize themselves.
        Built using HTML, CSS, Javascript, Express.js, and UUID for unique note IDs.
        Solo developed project.`}
        />
        
        <Project 
        link={'https://github.com/NathanKryz/Weather-Dashboard'} 
        deployed={'https://nathankryz.github.io/Weather-Dashboard/'}
        image={'./weather-dashboard-screenshot.png'} 
        alt={'A Weather Dashboard'} 
        title={'Weather Dashboard'} 
        desc={`Digital weather forecasting application using API calls to a weather database.
        Built using HTML, CSS, Javascript, Moment.js, Bootstrap, Jquery and the Openweathermap API.
        Solo developed project.`}
        />
        
        <Project 
        link={'https://github.com/NathanKryz/Password-Generator'} 
        deployed={'https://nathankryz.github.io/Password-Generator/'}
        image={'./password-generator-screenshot.png'} 
        alt={'A password generator'} 
        title={'Password Generator'} 
        desc={`A simple password generator to allow users to create a randomized secure password based on criteria requested.
        Built using Javascript, HTML, CSS.
        Solo developed project.`}
        />

        <Project 
        link={'https://github.com/EsraWameed/Motivation-Locale'} 
        deployed={'https://esrawameed.github.io/Motivation-Locale/'}
        image={'./motivation-screenshot.png'} 
        alt={'Screenshot of motivation locale'} 
        title={'Motivation Locale'} 
        desc={`A application for those that wish for a bit more motivation in their day.
        Built using HTML, CSS, Materialize, Javascript, JQuery with API calls from Flickr and Type.fit API.
        Collaborated with EsraWameed and 456salman.
        Role: Creating API calls and the associated scripts.`}
        />

        <Project 
        link={'https://github.com/hmhtom/NAS-Centre'} 
        deployed={'https://nas-center.herokuapp.com/'} 
        image={'./nas-center-screenshot.png'} 
        alt={'Screenshot of the NAS Center'} 
        title={'NAS-Centre'} 
        desc={`A digital venue for purchasing various tickets to events (As a test).
        Built using HTML, Javascript, MongoDB, ApollographQL, Express.js, MUI, JWT, React, and Redux.
        Collaborated with hmhtom and safazgolli.
        Role: Database queries and mutations, back to front end integration.`}
        />
      </section>
    </div>
  ); 
}