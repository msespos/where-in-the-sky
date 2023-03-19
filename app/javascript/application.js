// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

import Clouds1 from "assets/clouds1.jpg";

const App = () => {
  return (
    <div>
      <h1>Where In The Sky?</h1>
      <img src={Clouds1} alt="Clouds Image 1" height={1000} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
