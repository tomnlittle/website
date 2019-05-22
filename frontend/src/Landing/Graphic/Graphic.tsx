import { create } from "domain";
import React, { Component } from "react";

const NUM_PARTICLES = 100;

const WIDTH = 640;
const HEIGHT = 425;

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
      maxSize: 2,
      maxVelocity: 3,
      numParticles: 30,
      particles: [],
    };

    this.loop = this.loop.bind(this);

  }

  public componentDidMount() {

    console.log("mounting");

    const particles: IParticle[] = [];

    // generate all the random particles initial states

    for (let i = 1; i < this.state.numParticles; i++) {

      const pt: IParticle = {
        rgba: "black",
        size: randomNumber(0.1, this.state.maxSize),
        velocityX: randomNumber(-this.state.maxVelocity, this.state.maxVelocity),
        velocityY: randomNumber(-this.state.maxVelocity, this.state.maxVelocity),
        x: randomNumber(0, WIDTH),
        y: randomNumber(0, HEIGHT),
      };

      particles.push(pt);
    }

    this.setState({
      particles,
    });

    requestAnimationFrame(this.loop);
  }

  public loop() {

    // break case ?

    requestAnimationFrame(this.loop);

    const canvas = this.refs.canvas;

    // @ts-ignore
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, WIDTH, HEIGHT);
    context.save();

    this.state.particles.forEach((particle) => {

      drawParticle(particle, context);

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > WIDTH) {
        particle.velocityX = 1 - particle.velocityX;
        particle.x = 0;
      }

      if (particle.y < 0 || particle.y > HEIGHT) {
        particle.velocityY = 1 - particle.velocityY;
        particle.y = 0;
      }

      return particle;
    });
  }

  public render() {
    return (
      <canvas ref="canvas" width={WIDTH} height={HEIGHT} />
    );
  }
}
