import * as THREE from 'three';
import { useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("white");
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const geometry = new THREE.SphereGeometry(1, 10, 10, 0, Math.PI *2, 0, Math.PI*2);
    const material = new THREE.MeshBasicMaterial({ color: "#bdbdbd", wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize',()=>{
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    })

    const controls = new OrbitControls( camera, renderer.domElement );

    let clock = new THREE.Clock();
    function animate() {
      renderer.render(scene, camera);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // cube.rotation.z = clock.getElapsedTime();
      controls.update();
      controls.enableDamping = true;
      controls.enableRotate = true;
      controls.dampingFactor = 1.5;
      cube.scale.z = 2;
      cube.scale.y = 2;
    }
    
    renderer.setAnimationLoop(animate);

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}

export default App; 
