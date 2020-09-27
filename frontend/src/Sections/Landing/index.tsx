import React from "react";
import { ParticlesAnimation, NavBar } from "../../Components";
import "./index.css";
import ProfilePic from "./profile.jpg";


export const Landing: React.FC<{}> = () => {
	return (
		<div>
			<ParticlesAnimation className='landing-background' />

			<div className="landing-content">

				<NavBar 
					Elements={[
						{ href: '#about', name: 'About' }
					]}
				/>

				<div className="info">
					<img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"} />
					<h1>Thomas Northall-Little</h1>
					<p className="byline">Software Engineer at Canva</p>

					<p> <a href="mailto:contact@tomnlittle.com">contact@tomnlittle.com</a></p>
					<p className="Links">
						<a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
						<a href="https://github.com/tomnlittle">GitHub</a>
					</p>
				</div>
			</div>
		</div>
	);
}
