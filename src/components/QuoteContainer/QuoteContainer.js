import React from 'react';
import './QuoteContainer.scss';
import {getTranslatedText} from "../../services/appService";

function QuoteContainer() {
  return (
    <div className="QuoteContainer">
      <div className="Quote">
        <span>"</span>
        {getTranslatedText("slogan")}
        <span>"</span>
      </div>
    </div>
  );
}

export default QuoteContainer;
