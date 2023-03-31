// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <Header />
      <MainImage />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Where In The Sky?</h1>
    </div>
  )
}

const toggleTargetBoxView = () => {
  const div = document.getElementById("target-box");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

const placeTargetBox = (e) => {
  const div = document.getElementById("target-box");
  div.style.position = "absolute";
  div.style.left = (e.pageX - 25).toString() + "px";
  div.style.top = (e.pageY - 25).toString() + "px";
  toggleTargetBoxView();
}

const MainImage = () => {
  return (
    <div>
      <div id="target-box" style={{display: "none"}}></div>
      <img src="assets/clouds1.jpg"
           alt="Clouds Image 1"
           width={1200}
           onClick={(e) => placeTargetBox(e)}
      />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
