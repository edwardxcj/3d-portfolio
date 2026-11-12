/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useState } from "react";

import Bird from "../models/Bird";
import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import Loader from "./Loader";

export default function HomeScene({ setCurrentStage }) {
  const keyboardTarget = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const smallScreen = window.innerWidth < 768;

  const handleReady = useCallback(() => {
    setIsReady(true);
    setCurrentStage(1);
  }, [setCurrentStage]);

  return (
    <div
      ref={keyboardTarget}
      role="group"
      aria-label="3D island. Use the left and right arrow keys to rotate."
      tabIndex={isReady ? 0 : undefined}
      className="absolute inset-0 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-blue-800"
    >
      <Canvas
        className={isRotating ? "cursor-grabbing" : "cursor-grab"}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={[0, -6.5, -43]}
            scale={smallScreen ? 0.9 : 1}
            rotation={[0.1, 4.7, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            keyboardTarget={keyboardTarget}
            onReady={handleReady}
          />
          <Plane
            isRotating={isRotating}
            scale={smallScreen ? 1.5 : 3}
            position={smallScreen ? [0, -1.5, 0] : [0, -4, -4]}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
