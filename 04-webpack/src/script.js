import './style.css';
import * as THREE from 'three';
console.log(THREE);

const canvas = document.querySelector('.webgl');

const scene = new THREE.Scene();

//Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sizes
const sizes = {
	width: 800,
	height: 400
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 0;
camera.position.x = 1;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
	canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
