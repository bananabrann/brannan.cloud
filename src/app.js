let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

// const animationDistance = windowWidth + cloud11.offsetWidth
const animationSteps = 600;
const animationDuration = 6000;
const animationInterval = animationDuration / animationSteps;

let positions = {
  clouds1: 0,
  clouds2: windowWidth - windowWidth / 2,
  clouds3: 0,
};

const clouds1 = document.getElementsByClassName("clouds1")[0];
const clouds2 = document.getElementById("clouds2");
const clouds3 = document.getElementById("clouds3");

setInterval(animate, animationInterval);

function isOutOfBounds(element) {
  const rect = element.getBoundingClientRect();
  return rect.left < -windowWidth;
}

function moveCloud(cloudName, cloudElement, coeffecient) {
  positions[cloudName] -=
    ((windowWidth + cloudElement.offsetWidth) / animationSteps) * coeffecient;
  cloudElement.style.left = positions[cloudName] + "px";

  if (positions[cloudName] < -cloudElement.offsetWidth) {
    positions[cloudName] = windowWidth;
  }
}

function animate() {
  moveCloud("clouds1", clouds1, 0.125);
  moveCloud("clouds2", clouds2, 0.028);
  moveCloud("clouds3", clouds3, 0.01);
}

addEventListener("resize", (event) => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
});
