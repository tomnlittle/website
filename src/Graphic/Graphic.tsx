import React, { Component } from "react";
import "./Graphic.css";

interface IParticle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rgba: string;
  size: number;
}

interface IGraphicState {
  particles: IParticle[];
  numParticles: number;
  maxVelocity: number;
  maxSize: number;
  minSize: number;
  width: number;
  height: number;
}

export class Graphic extends Component <{}, IGraphicState> {

  constructor(props: any) {
    super(props);

    this.state = {
      height: 1080,
      maxSize: 2,
      maxVelocity: 3,
      minSize: 0.3,
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

    const particles: IParticle[] = [];

    const {
      height,
      maxSize,
      minSize,
      maxVelocity,
      numParticles,
      width,
    } = this.state;

    for (let i = 1; i <= numParticles; i++) {

      const pt: IParticle = {
        rgba: randomColour(),
        size: randomNumber(minSize, maxSize),
        velocityX: randomNumber(-maxVelocity, maxVelocity),
        velocityY: randomNumber(-maxVelocity, maxVelocity),
        x: width / 2,
        y: height / 2,
      };

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

    const {
      width,
      height,
    } = this.state;

    context.clearRect(0, 0, width, height);
    context.save();

    // update the canvas size
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
    context.canvas.style.width = width + "px";
    context.canvas.style.height = height + "px";

    const scale = window.devicePixelRatio;
    context.canvas.width = width * scale;
    context.canvas.height = height * scale;

    context.scale(scale, scale);

    this.state.particles.forEach((particle) => {

      drawParticle(particle, context);

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > width) {
        particle.velocityX = -particle.velocityX;
        particle.x = particle.x < 0 ? 1 : width;
      }

      if (particle.y < 0 || particle.y > height) {
        particle.velocityY = -particle.velocityY;
        particle.y = particle.y < 0 ? 1 : height;
      }

      return particle;
    });
  }

  public render() {
    return (
      <canvas className="particle" ref="canvas"/>
    );
  }
}

function randomNumber(min: number, max: number): number {
  return (Math.random() * (max - min)) + min;
}

function randomColour(): string {
  const rand = randomNumber(0, 10);

  return rand < 5 ? "#282c34" : "#B9009A";
}

function drawParticle(pt: IParticle, context: any) {
  const size = pt.size;

  context.beginPath();
  context.arc(pt.x, pt.y, size, 0, 2 * Math.PI);
  context.strokeStyle = pt.rgba;
  context.stroke();

  context.fillStyle = pt.rgba;
  context.fill();
}
