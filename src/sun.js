const renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
renderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, myCanvas.clientWidth / myCanvas.clientHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();