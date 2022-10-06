import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const component = () =>{

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );


  new GLTFLoader().load('models/Present.glb', function ( gltf ) {
    scene.add( gltf.scene );
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clips = gltf.animations;
    const basicAction = mixer.clipAction(clips[0]);
    console.log(basicAction);
    basicAction.play();
    animate(gltf, mixer)
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
  function animate(object, mixer) {
    requestAnimationFrame( animate.bind(null,object, mixer) );
    mixer.update(1/60);
    renderer.render( scene, camera );
  };

}

component();