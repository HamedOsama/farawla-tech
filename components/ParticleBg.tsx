"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "@/config/particles-config";

const ParticleBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => { }, []);
  return (
    <div className="absolute inset-0 bg-black -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig as any}
      />
    </div>
  );
};
export default ParticleBg;