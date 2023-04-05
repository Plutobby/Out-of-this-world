// Get the canvas element from the HTML
const canvas = document.getElementById("myCanvas");

// Create the Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

// Create a cube geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Create a mesh from the geometry and material, and add it to the scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera and cube
camera.position.z = 5;
cube.position.x = 1;

// Render the scene
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();
