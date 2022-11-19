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
        <Project link={'https://github.com/NathanKryz/psychic-journey'} deployed={'https://psychic-journey.herokuapp.com/'}image={'./PJLoginscreen.png'} alt={'Physic Journey Screenhot'} title={'PsychicJourney'} />
        <Project link={'https://github.com/NathanKryz/laughing-robot'} deployed={'https://laughing-robot.herokuapp.com/'}image={'./jate-screenshot.png'} alt={'Text Editor Screenshot'} title={'JATE'} />
        <Project link={'https://github.com/NathanKryz/sturdy-bassoon'} deployed={'https://fathomless-citadel-37887.herokuapp.com/'}image={'./note-taken-landing-screenshot.png'} alt={'Note taker screenshot'} title={'Note Taker'} />
        <Project link={'https://github.com/NathanKryz/Weather-Dashboard'} deployed={'https://nathankryz.github.io/Weather-Dashboard/'}image={'./weather-dashboard-screenshot.png'} alt={'A Weather Dashboard'} title={'Weather Dashboard'} />
        <Project link={'https://github.com/NathanKryz/Password-Generator'} deployed={'https://nathankryz.github.io/Password-Generator/'}image={'./password-generator-screenshot.png'} alt={'A password generator'} title={'Password Generator'} />
        <Project link={'https://github.com/EsraWameed/Motivation-Locale'} deployed={'https://esrawameed.github.io/Motivation-Locale/'}image={'./motivation-screenshot.png'} alt={'Screenshot of motivation locale'} title={'Motivation Locale'} />
      </section>
    </div>
  );
}