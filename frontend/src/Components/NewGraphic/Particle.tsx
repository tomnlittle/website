const MIN_SIZE = 0.3;
const MAX_SIZE = 2;
const MAX_VELOCITY = 3;

export class Particle {
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    rgba: string;
    size: number;

    canvasWidth: number;
    canvasHeight: number;

    constructor(width: number, height: number, initX?: number, initY?: number) {
        this.rgba = randomColour();
        this.size = randomNumber(MIN_SIZE, MAX_SIZE);
        this.velocityX = randomNumber(-MAX_VELOCITY, MAX_VELOCITY);
        this.velocityY = randomNumber(-MAX_VELOCITY, MAX_VELOCITY);
        this.x = initX || width / 2;
        this.y = initY || height / 2;

        this.canvasWidth = width;
        this.canvasHeight = height;
    }

    updateCanvasSize(newWidth: number, newHeight: number) {
        this.canvasWidth = newWidth;
        this.canvasHeight = newHeight;
    }

    updatePosition() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > this.canvasWidth) {
            this.velocityX = -this.velocityX;
            this.x = this.x < 0 ? 1 : this.canvasWidth;
        }

        if (this.y < 0 || this.y > this.canvasHeight) {
            this.velocityY = -this.velocityY;
            this.y = this.y < 0 ? 1 : this.canvasHeight;
        }
    }

    render(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        context.strokeStyle = this.rgba;
        context.stroke();

        context.fillStyle = this.rgba;
        context.fill();
        context.closePath();
    }
}

function randomNumber(min: number, max: number): number {
    return (Math.random() * (max - min)) + min;
}

function randomColour(): string {
    const rand = randomNumber(0, 10);
    return rand < 5 ? "#282c34" : "#B9009A";
}
