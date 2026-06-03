import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';

/**
 * A procedural target (bullseye) built from Three.js rings + a pole.
 * No external network requests — works fully offline.
 */
const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  // Shared material colours
  const red = new THREE.MeshStandardMaterial({ color: '#cc2200', roughness: 0.4 });
  const white = new THREE.MeshStandardMaterial({ color: '#f0ece8', roughness: 0.4 });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Lift the whole model up so the stand is fully visible */}
      <group position={[0, 1.5, 0]}>
        {/* Ring 4 – outermost white */}
        <mesh>
          <torusGeometry args={[0.9, 0.12, 16, 64]} />
          <primitive object={white} />
        </mesh>

        {/* Ring 3 – red */}
        <mesh>
          <torusGeometry args={[0.65, 0.12, 16, 64]} />
          <primitive object={red} />
        </mesh>

        {/* Ring 2 – white */}
        <mesh>
          <torusGeometry args={[0.4, 0.12, 16, 64]} />
          <primitive object={white} />
        </mesh>

        {/* Centre disc – red */}
        <mesh>
          <circleGeometry args={[0.25, 64]} />
          <primitive object={red} />
        </mesh>

        {/* Back face of target board */}
        <mesh rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[1.05, 64]} />
          <meshStandardMaterial color="#8b4513" roughness={0.8} />
        </mesh>

        {/* Stand pole */}
        <mesh position={[0, -1.4, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.8, 12]} />
          <meshStandardMaterial color="#5a3e2b" roughness={0.7} />
        </mesh>

        {/* Base */}
        <mesh position={[0, -2.3, 0]}>
          <cylinderGeometry args={[0.35, 0.45, 0.15, 32]} />
          <meshStandardMaterial color="#5a3e2b" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
};

export default Target;
