import "./App.css";
import { ParallaxTimeline } from "./components/ParallaxTimeLine/ParallaxTimeLine";
import { BackgroundParticles } from "./components/BackgroundParticles/BackgroundParticles";
import { ParallaxBackground } from "./components/ParallaxBackground/ParallaxBackground";
import { IntroArrival } from "./components/IntroArrival/IntroArrival";

function App() {
  return (
    <>
      <ParallaxBackground />
      <BackgroundParticles />
      <IntroArrival />
      <ParallaxTimeline />
    </>
  );
}

export default App;
