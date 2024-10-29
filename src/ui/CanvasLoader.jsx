import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {progress !== 0 ? `${progress.toFixed(2)}` : " LOADING..."}
    </Html>
  );
}

export default CanvasLoader;
