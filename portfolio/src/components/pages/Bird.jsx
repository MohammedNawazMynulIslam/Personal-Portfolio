import { useGLTF } from "@react-three/drei";
import React from "react";
import bird from "../../assets/3d/bird.glb";
export const Bird = () => {
  const { scene, animations } = useGLTF(bird);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};
