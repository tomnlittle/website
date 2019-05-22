import { create } from "domain";
import React, { Component } from "react";

const NUM_PARTICLES = 100;

const WIDTH = 640;
const HEIGHT = 425;

interface IGraphicState {
  particles: any[];
}

function randomNumber(min: number, max: number) {
  return (Math.random() * (max - min)) + min;
}

export default class Graphic extends Component <{}, IGraphicState> {

  constructor(props: any) {
    super(props);

    this.state = {
      particles: [],
    };

    create();
  }

  public componentDidMount() {
    const canvas = this.refs.canvas;
    // @ts-ignore
    const context = canvas.getContext("2d");

    const draw = () => {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      context.save();

      context.translate((WIDTH / 2), HEIGHT / 2);

      context.restore();
    };
  }

  public create() {
    const particles = [];
    const FIELDOFVISION = 250;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const particle = {
        x: randomNumber(-(WIDTH / 2), (WIDTH / 2)),
        y: randomNumber(-(HEIGHT / 2), HEIGHT / 2),
        z: randomNumber(-FIELDOFVISION, FIELDOFVISION),
      };
      particles.push(particle);
    }
    this.setState({
      particles,
    });
  }

  public render() {
    return (
      <div>
        <canvas ref="canvas" width={WIDTH} height={HEIGHT} />
      </div>
    );
  }
}
