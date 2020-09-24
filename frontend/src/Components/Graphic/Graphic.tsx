import React, { useRef, useEffect } from "react";
import { Particle } from './Particle';
import "./Graphic.css";

const NUM_PARTICLES = 50;

export const Graphic: React.FC<{}> = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const container = containerRef.current!;
		const canvas = canvasRef.current!;
		const context = canvas.getContext('2d')!;

		const particles = new Array(NUM_PARTICLES)
			.fill(null)
			.map(() => new Particle(canvas.width, canvas.height))

		let requestID: number;
		const render = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p) => {
				p.updatePosition()
				p.render(context);
			})

			requestID = requestAnimationFrame(render);
		};

		const resize = () => {
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

			particles.forEach((p) => {
				p.updateCanvasSize(canvas.width, canvas.height);
			})
		};
		window.addEventListener("resize", resize);

		resize();
		render();

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(requestID);
		}
	});

	return (
		<div className='graphic-container' ref={containerRef}>
			<canvas className='graphic' ref={canvasRef} />
		</div>
	);
}
