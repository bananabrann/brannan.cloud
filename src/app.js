// Configuration and variable initialization.
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const animationSteps = 600;
const animationDuration = 6000;
const animationInterval = animationDuration / animationSteps;

// Store the positional data of the clouds.
let positions = {
  clouds1: 0,
  clouds2: windowWidth - windowWidth / 2,
  clouds3: 0,
};

// Get the HTML elements of the clouds.
const clouds1 = document.getElementsByClassName("clouds1")[0];
const clouds2 = document.getElementById("clouds2");
const clouds3 = document.getElementById("clouds3");

// Do the work.
// TODO - Instead of animating every x miliseconds, move every one or 
// two seconds and add a CSS transition. I actually got this to work,
// but when the element resets to the right, you see the transition of
// the cloud rush across the screen to the right after moving slowly to
// the left. So code needs to be added that removes the element and re-
// adds it instead.
setInterval(animate, animationInterval);

// Moves a given cloud based on the configurations, multiplied by a given
// coefficient.
function moveCloud(cloudName, cloudElement, coeffecient) {
  // Calculate the new position.
  positions[cloudName] -=
    ((windowWidth + cloudElement.offsetWidth) / animationSteps) * coeffecient;
  // Update the element with the new position.
  cloudElement.style.left = positions[cloudName] + "px";

  // If the given element has left the view of the window, set it to the right.
  if (positions[cloudName] < -cloudElement.offsetWidth) {
    positions[cloudName] = windowWidth;
  }
}

// High-level logic for the main animation frames.
function animate() {
  moveCloud("clouds1", clouds1, 0.05);
  moveCloud("clouds2", clouds2, 0.015);
  moveCloud("clouds3", clouds3, 0.002);
}

// Readjust window variables if window is resized.
addEventListener("resize", (event) => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
});
