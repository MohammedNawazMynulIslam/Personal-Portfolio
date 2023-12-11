import { useGLTF } from "@react-three/drei";
import React from "react";
import skyScence from "../assets/3d/sky.glb";
export const Sky = () => {
  const sky = useGLTF(skyScence);
  return (
    <mesh>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};
