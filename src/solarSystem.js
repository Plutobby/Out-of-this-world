
      // Create a scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(10,10,50);
      
// Load the texture image
      var loader = new THREE.TextureLoader();
      var texture = loader.load('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg', function() {
    // Create a mesh with the loaded texture and add it to the scene
      var geometry = new THREE.PlaneGeometry(2, 2, 0);
      var material = new THREE.MeshBasicMaterial({ map: texture });
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  });

      // Create a renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load('earth.png');
  
      // Create a sun
      const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);
  
      // Create planets
      const mercuryGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
      const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
      scene.add(mercury);
  
      const venusGeometry = new THREE.SphereGeometry(0.7, 32, 32);
      const venusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
      const venus = new THREE.Mesh(venusGeometry, venusMaterial);
      scene.add(venus);
  
      const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
      const earthMaterial = new THREE.MeshBasicMaterial({color:0x0000ff})
    
  
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);
  
      const marsGeometry = new THREE.SphereGeometry(1, 32, 32);
      const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xcc9966 });
      const mars = new THREE.Mesh(marsGeometry, marsMaterial);
      scene.add(mars);
  
      const jupiterGeometry = new THREE.SphereGeometry(1.7, 32, 32);
      const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xbcafb2 });
      const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
      scene.add(jupiter);
  
      const saturnGeometry = new THREE.SphereGeometry(1.5, 32, 32);
      const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xffdab9 });
      const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
      scene.add(saturn);
  
      const uranusGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x99ccff });
      const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
      scene.add(uranus);
  
      const neptuneGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
      scene.add(neptune);
  
      const plutoGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const plutoMaterial = new THREE.MeshBasicMaterial({ color: 0x996666 });
      const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
      scene.add(pluto);
  // Define the radius of each planet's orbit
  const orbits = [
    { name: 'Mercury', radius: 10 },
    { name: 'Venus', radius: 15 },
    { name: 'Earth', radius: 20 },
    { name: 'Mars', radius: 25 },
    { name: 'Jupiter', radius: 35 },
    { name: 'Saturn', radius: 45 },
    { name: 'Uranus', radius: 55 },
    { name: 'Neptune', radius: 65 },
    { name: 'Pluto', radius: 75 },
  ];
  
  // Loop through the orbits array and create a ring for each planet
  orbits.forEach((orbit) => {
    const planetOrbit = new THREE.Mesh(
      new THREE.RingGeometry(orbit.radius - 0.5, orbit.radius + 0.5, 64),
      new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
    );
    planetOrbit.rotation.x = -Math.PI / 2;
    scene.add(planetOrbit);
  });
  
  
  
     const controls = new THREE.OrbitControls(camera, renderer.domElement);
  
      
  
     function animate() {
    requestAnimationFrame(animate);
  
    // Rotate the sun
    sun.rotation.y += 0.01;
  
    // Orbit the planets
    mercury.position.x = 10 * Math.cos(Date.now() * 0.0001);
    mercury.position.z = 10 * Math.sin(Date.now() * 0.0001);
  
    venus.position.x = 15 * Math.cos(Date.now() * 0.00009);
    venus.position.z = 15 * Math.sin(Date.now() * 0.00009);
  
    earth.position.x = 20 * Math.cos(Date.now() * 0.00008);
    earth.position.z = 20 * Math.sin(Date.now() * 0.00008);
  
    mars.position.x = 25 * Math.cos(Date.now() * 0.00007);
    mars.position.z = 25 * Math.sin(Date.now() * 0.00007);
  
    jupiter.position.x = 30 * Math.cos(Date.now() * 0.00006);
    jupiter.position.z = 30 * Math.sin(Date.now() * 0.00006);
  
    saturn.position.x = 35 * Math.cos(Date.now() * 0.00005);
    saturn.position.z = 35 * Math.sin(Date.now() * 0.00005);
  
    uranus.position.x = 40 * Math.cos(Date.now() * 0.00004);
    uranus.position.z = 40 * Math.sin(Date.now() * 0.00004);
  
    neptune.position.x = 45 * Math.cos(Date.now() * 0.00003);
    neptune.position.z = 45 * Math.sin(Date.now() * 0.00003);
  
    pluto.position.x = 50 * Math.cos(Date.now() * 0.00002);
    pluto.position.z = 50 * Math.sin(Date.now() * 0.00002);
  
    renderer.render(scene, camera);
  }
  
      animate();
      // Helper function to convert degrees to radians
      function toRadians(degrees) {
        return degrees * Math.PI / 180;
      }