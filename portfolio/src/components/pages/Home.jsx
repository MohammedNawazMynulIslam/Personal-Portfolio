import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import Island from "../../models/Island";
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader></Loader>}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
