// A tl;dr and a link to the google drive?
import React from 'react';

export default function Resume() {
  return (
    <div className="pageRender">
      <h1 className="text-center">Resume Page</h1>
      <div className="pageText text-center">
      <ul>
        <p>A Summary</p>
        <li>•A results orientated individual with a high attention to quality</li>
        <li>•Able to bug fix and troubleshoot problems and find their cause</li>
        <li>•Interested in the digital world, be it front-end, back-end, full-stack, APIs, or games</li>
        <li>•Always interested in learning new things when it comes to coding and efficency</li>
        <li>•Passionate about delivering 110% in all that I do</li>
      </ul>
      </div>
      <div className="text-center">
      <a href="NKryzresume.pdf" download="NKryzresume.pdf">
        <button >Download full PDF</button>
      </a>
      </div>
    </div>
  );
}