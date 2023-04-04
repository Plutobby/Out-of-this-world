
// Define the cup geometry and material
const cupGeometry = new THREE.CylinderGeometry( 5, 5, 10, 32 );
const cupMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

// Create the cup mesh and add it to the scene
const cupMesh = new THREE.Mesh( cupGeometry, cupMaterial );
scene.add( cupMesh );
