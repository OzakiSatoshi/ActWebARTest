"use strict";

let model = "";
let donuts = '<a-entity id="donutsmodel" gltf-model="#donuts" scale="10 10 10" animation-mixer></a-entity>';

console.log(donuts);

function change(){
  return model = donuts
};

window.addEventListener('click',change());

console.log(model);
