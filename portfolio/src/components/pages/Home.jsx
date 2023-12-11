import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import Island from "../../models/Island";
import { Sky } from "../../models/Sky";
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [6, -6.5, -43];
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
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <ambientLight intensity={1} />
          <hemisphereLight skyColor="#b1e1ff " groundColor="#90ee90" />
          <Sky />
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
