import React from 'react';
import './Content.scss';

function Content() {
  return (
    <div>
      <div className="Video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KRiSMXFpWIg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Content;
