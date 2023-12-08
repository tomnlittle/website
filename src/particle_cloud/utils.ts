export type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  rgba: string;
  size: number;
};

const MIN_PARTICLE_SIZE = 0.3;
const MAX_PARTICLE_SIZE = 2.0;
const MAX_VELOCITY = 3;

export function createParticle({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return {
    rgba: randomColour(),
    size: randomNumber(MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE),
    velocityX: randomNumber(-MAX_VELOCITY, MAX_VELOCITY),
    velocityY: randomNumber(-MAX_VELOCITY, MAX_VELOCITY),
    x: width / 2,
    y: height / 2,
  };
}

export function animate(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  particles: Particle[],
) {
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

  particles.forEach((particle) => {
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
  });
}

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomColour(): string {
  const rand = randomNumber(0, 10);

  return rand < 5 ? "#282c34" : "#B9009A";
}

function drawParticle(pt: Particle, context: any) {
  const size = pt.size;

  context.beginPath();
  context.arc(pt.x, pt.y, size, 0, 2 * Math.PI);
  context.strokeStyle = pt.rgba;
  context.stroke();

  context.fillStyle = pt.rgba;
  context.fill();
}
