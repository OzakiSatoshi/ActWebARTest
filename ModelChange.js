"use strict";

let model = document.getElementById('model');
let donuts = '<a-entity id="donutsmodel" gltf-model="#donuts" scale="10 10 10" animation-mixer></a-entity>';

// console.log(donuts);

function change(){
  return model = donuts;
}
console.log(model);

window.addEventListener('click',()=>{
  model = donuts;
  console.log(model);
}
)
