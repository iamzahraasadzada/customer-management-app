import { Canvas } from "@react-three/fiber";
import styles from "./styles/Login.module.css";
import { Suspense } from "react";
import CanvasLoader from "../ui/CanvasLoader";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HackerRoom from "../components/HackerRoom";
import HRCamera from "../components/HRCamera";
import { calculateSizes } from "../constants";

function Login() {
  const navigate = useNavigate();
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <img src="/login.png" alt="login_logo" />
          <h1>ClearCRM</h1>
          <p>Customer Overview</p>
          <button onClick={() => handleClick()}>Explore</button>
        </div>
        <div className={styles.right_side}>
          <Canvas className={styles.canvas}>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HRCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HRCamera>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Login;
