import ParticlesConfig from "./particles-config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import React, { useEffect, useState } from "react";


const Background = (props) => {

  const theme = "light";
  // const [theme, setTheme] = useState("light");
  const particlesInit = useCallback(async (engine) => {
  
    await loadFull(engine);
  }, []);
  const [particlesContainer, setParticlesContainer] = useState();

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  return (
    <div id="particle-background">
      <div className="background">
        {/* <button onClick={() => setTheme("light")}>Light</button>

        <button onClick={() => setTheme("dark")}>Dark</button> */}
        <Particles
          theme={theme}
          id="tsparticles"
          particlesLoaded="particlesLoaded"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesConfig}
        />
      </div>
    </div>
  );
};

export default Background;
