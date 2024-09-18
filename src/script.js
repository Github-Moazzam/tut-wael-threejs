import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//scene 
const scene = new THREE.Scene()

//geometry
const sphereGeo = new THREE.SphereGeometry(1,32,32)
//material
const sphereMaterial = new THREE.MeshBasicMaterial()

//mesh
const sphere = new THREE.Mesh(sphereGeo,sphereMaterial)
scene.add(sphere);

//camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
camera.position.z = 5;
scene.add(camera)



//renderer
const renderer = new THREE.WebGLRenderer()

document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene,camera)

const controls = 
new OrbitControls(camera, renderer.domElement);


function animate() {

    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);