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
      <img src="assets/clouds1a.jpg"
           className="crop-display"
           alt="Clouds Image 1 Crop 1"
           width={100}
        />
      <img src="assets/clouds1b.jpg"
           className="crop-display"
           alt="Clouds Image 1 Crop 2"
           width={100}
        />
      <img src="assets/clouds1c.jpg"
           className="crop-display"
           alt="Clouds Image 1 Crop 3"
           width={100}
        />
      <img src="assets/clouds1d.jpg"
           className="crop-display"
           alt="Clouds Image 1 Crop 4"
           width={100}
        />
      <h2>
        Find these four places in the sky. You may have to scroll to see the whole sky. The images above are enlarged.
      </h2>
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

const toggleCropView = (cropNumber) => {
  const div = document.getElementById("crop-" + cropNumber.toString());
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
  placeCrop(e, 1, 33);
  placeCrop(e, 2, 83);
  placeCrop(e, 3, 133);
  placeCrop(e, 4, 183);
}

const placeCrop = (e, cropNumber, shiftValue) => {
  const div = document.getElementById("crop-" + cropNumber.toString());
  div.style.position = "absolute";
  div.style.left = (e.pageX - 23).toString() + "px";
  div.style.top = (e.pageY + shiftValue).toString() + "px";
  toggleCropView(cropNumber);
}

const MainImage = () => {
  return (
    <div>
      <div id="target-box" style={{display: "none"}}></div>
      <div className="crop-box" id="crop-1" style={{display: "none"}}>
        <img src="assets/clouds1a.jpg"
             alt="Clouds Image 1 Crop 1"
             width={42}
        />
      </div>
      <div className="crop-box" id="crop-2" style={{display: "none"}}>
        <img src="assets/clouds1b.jpg"
             alt="Clouds Image 1 Crop 2"
             width={42}
        />
      </div>
      <div className="crop-box" id="crop-3" style={{display: "none"}}>
        <img src="assets/clouds1c.jpg"
             alt="Clouds Image 1 Crop 3"
             width={42}
        />
      </div>
      <div className="crop-box" id="crop-4" style={{display: "none"}}>
        <img src="assets/clouds1d.jpg"
             alt="Clouds Image 1 Crop 4"
             width={42}
        />
      </div>
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
