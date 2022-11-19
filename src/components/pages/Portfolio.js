// Links to six projects, bootstrap cards might be nice
import React from 'react';
import Project from '../Project';
import '../styles/main.css';

export default function Portfolio() {
  return (
    <div className='pageRender'>
      <h1 className='text-center'>Portfolio Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
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