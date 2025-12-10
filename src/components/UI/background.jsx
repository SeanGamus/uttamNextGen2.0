import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      {/* Make the box larger, e.g. 10x10x10 */}
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="#28df84" wireframe />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // pushes it to the background
      }}
      camera={{ position: [0, 0, 20] }} // move camera back so big box is visible
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}
