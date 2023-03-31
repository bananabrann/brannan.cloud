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
setInterval(animate, animationInterval);

// Moves a given cloud based on the configurations, multiplied by a given
// coeffecient.
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
  moveCloud("clouds1", clouds1, 0.125);
  moveCloud("clouds2", clouds2, 0.028);
  moveCloud("clouds3", clouds3, 0.01);
}

// Readjust window variables if window is resized.
addEventListener("resize", (event) => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
});
