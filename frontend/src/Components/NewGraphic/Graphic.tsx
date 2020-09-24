import React, { useRef, useEffect } from "react";
import { Particle } from './Particle';
import "./Graphic.css";

const NUM_PARTICLES = 100;

export const Graphic: React.FC<{}> = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const container = containerRef.current!;
		const context = canvas.getContext('2d')!;

		const rs = resize(container, canvas);
		window.addEventListener("resize", rs);
		rs();

		const particles = new Array(NUM_PARTICLES)
			.fill(null)
			.map(() => new Particle(canvas.width, canvas.height))

		let requestID: number;
		const render = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p) => {
				p.updateCanvasSize(canvas.width, canvas.height);
				p.updatePosition()
				p.render(context);
			})

			requestID = requestAnimationFrame(render);
		};
		render();

		return () => {
			window.removeEventListener("resize", rs);
			cancelAnimationFrame(requestID);
		}
	});

	return (
		<div className='graphic-container' ref={containerRef}>
			<canvas
				ref={canvasRef}
				className='graphic'
			/>
		</div>
	);
}

function resize(container: HTMLDivElement, canvas: HTMLCanvasElement): () => void {
	return () => {
		const width = parseInt(getComputedStyle(container)
			.getPropertyValue('width')
			.slice(0, -2));

		const height = parseInt(getComputedStyle(container)
			.getPropertyValue('height')
			.slice(0, -2));

		const ratio = window.devicePixelRatio || 1;
		canvas.width = width * ratio;
		canvas.height = height * ratio;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
	}
}
