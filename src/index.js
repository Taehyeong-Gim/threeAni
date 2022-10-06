import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const component = () =>{

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  new GLTFLoader().load('models/Present.glb', function ( gltf ) {
    scene.add( gltf.scene );
    animate(gltf)
  }, undefined, function ( error ) {
    console.error( error );
  } );

  camera.position.z = 10;
  const lighta = new THREE.PointLight( 0xFFFFFF, 1, 100 );
  lighta.position.set( 10, 3, 10 );
  scene.add( lighta ); 
  const lighta2 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
  lighta2.position.set( -10, 3, -10 );
  scene.add( lighta2 ); 
  function animate(object) {
    requestAnimationFrame( animate.bind(null,object) );
    
    object.scene.rotation.x += 0.01;
    object.scene.rotation.y += 0.01;
    renderer.render( scene, camera );
  };

}

component();