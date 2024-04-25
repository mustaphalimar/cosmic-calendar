"use client";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const SpaceBackground = ({ props }: any) => {
  const pointsRef: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    pointsRef.current.rotation.x -= delta / 40;
    pointsRef.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[1, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const SpaceCanvas = () => (
  <div className="w-full h-auto fixed inset-0 opacity-40 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <SpaceBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default SpaceCanvas;
