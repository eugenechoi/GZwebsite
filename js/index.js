'use strict';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var cubes = [];
var numberOfCubes = 20;

for (var i = 0; i < numberOfCubes; i++) {
  var geometry = new THREE.BoxGeometry(20, 20, 20);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff7c, wireframe: true, wireframeLinewidth: 1 });
  var cube = new THREE.Mesh(geometry, material);
  cubes.push(cube);
  scene.add(cube);
  var x = Math.floor(Math.random() * 100 - 50);
  var y = Math.floor(Math.random() * 100 - 50);
  var z = 0;
  cube.rotation.x = Math.floor(Math.random() * 360);
  cube.rotation.y = Math.floor(Math.random() * 360);
  cube.position.set(x, y, z);
  // cube.material.color.setHex(0xff0000);
}

camera.position.z = 100;

function render() {
  requestAnimationFrame(render);
  for (var i = 0; i < numberOfCubes; i++) {
    cubes[i].rotation.x += 0.01;
    cubes[i].rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}
render();

// function onMouseMove(event) {
//   let rand = Math.floor(Math.random() * numberOfCubes);
//   let rgb = Math.random();
//   cubes[rand].material.color = {r: rgb, g: rgb, b: rgb};
// }

function onClick(event) {
  for (var i = 0; i < numberOfCubes; i++) {
    // cubes[i].material.color = {r: 0, g: 1, b: .486};
    var x = Math.floor(Math.random() * 100 - 50);
    var y = Math.floor(Math.random() * 100 - 50);
    var z = 0;
    cubes[i].position.set(x, y, z);
  }
}

// window.addEventListener('mousemove', onMouseMove, false)
window.addEventListener('click', onClick, false);