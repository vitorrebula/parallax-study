import { Parallax } from "react-scroll-parallax";

export function ParallaxBackground() {
  return (
    <Parallax speed={-5}>
      <div className="parallax-background" />
    </Parallax>
  );
}
