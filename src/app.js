let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

// const animationDistance = windowWidth + cloud11.offsetWidth
const animationSteps = 600;
const animationDuration = 6000;
const animationInterval = animationDuration / animationSteps;

let positions = {
  cloud11: 0,
  cloud12: window.innerWidth,
};

// Clone the clouds and copy their properties. I do this here because
// Parcel changes the href when it bundles so I don't really know
// what the name is going to be until runtime.
const cloud11 = document.getElementsByClassName("clouds1")[0];
const cloud12 = document.getElementsByClassName("clouds1")[1];
// clouds.cloud1.push({
//   element: cloud1,
//   leftPosition: 0
// });

// clouds.cloud1.push({
//   element: cloud1,
//   leftPosition: 0
// });

const moveClouds = setInterval(() => {
  clouds.clouds1.map((c) => {});
}, 1000);

function respawnCloud(element, elementToAppendTo) {
  console.log("respawning...");

  const cloud = document.createElement("img");
  cloud.src = element.src;
  cloud.classList = "clouds2";
  cloud.left = 0;
  // element.parentNode.appendChild(cloud)
}

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
  moveCloud("cloud11", cloud11, 0.125);
}

setInterval(animate, animationInterval);
