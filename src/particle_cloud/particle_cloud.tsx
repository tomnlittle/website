import { Component } from "react";
import "./particle_cloud.css";
import type { Particle } from "./utils";
import { animate, createParticle } from "./utils";

type GraphicState = {
  particles: Particle[];
  numParticles: number;
  width: number;
  height: number;
};

export class ParticleCloud extends Component<{}, GraphicState> {
  constructor(props: any) {
    super(props);

    this.state = {
      height: 1080,
      numParticles: 20,
      particles: [],
      width: 1920,
    };

    this.loop = this.loop.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  public componentWillMount() {
    this.updateDimensions();
  }

  public componentDidMount() {
    const particles: Particle[] = [];

    const { height, numParticles, width } = this.state;

    for (let i = 1; i <= numParticles; i++) {
      const pt = createParticle({ width, height });
      particles.push(pt);
    }

    this.setState({
      particles,
    });

    requestAnimationFrame(this.loop);

    // resize listener
    window.addEventListener("resize", this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  public updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  public loop() {
    // break case ?

    requestAnimationFrame(this.loop);

    const canvas = this.refs.canvas;

    // @ts-ignore
    const context = canvas.getContext("2d");

    const { width, height } = this.state;

    animate(context, width, height, this.state.particles);
  }

  public render() {
    return <canvas className="particleCloud" ref="canvas" />;
  }
}
