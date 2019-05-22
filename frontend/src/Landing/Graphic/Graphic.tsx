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
  width: number;
  height: number;
}

function randomNumber(min: number, max: number) {
  return (Math.random() * (max - min)) + min;
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

export default class Graphic extends Component <{}, IGraphicState> {

  constructor(props: any) {
    super(props);

    this.state = {
      height: 1080,
      maxSize: 2,
      maxVelocity: 3,
      numParticles: 30,
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

    // generate all the random particles initial states

    for (let i = 1; i <= this.state.numParticles; i++) {

      const pt: IParticle = {
        rgba: "black",
        size: randomNumber(0.1, this.state.maxSize),
        velocityX: randomNumber(-this.state.maxVelocity, this.state.maxVelocity),
        velocityY: randomNumber(-this.state.maxVelocity, this.state.maxVelocity),
        x: randomNumber(0, this.state.width),
        y: randomNumber(0, this.state.height),
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

    context.clearRect(0, 0, this.state.width, this.state.height);
    context.save();

    // update the canvas size
    context.canvas.width = this.state.width;
    context.canvas.height = this.state.height;

    this.state.particles.forEach((particle) => {

      drawParticle(particle, context);

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > this.state.width) {
        particle.velocityX = 1 - particle.velocityX;
        particle.x = 0;
      }

      if (particle.y < 0 || particle.y > this.state.height) {
        particle.velocityY = 1 - particle.velocityY;
        particle.y = 0;
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
