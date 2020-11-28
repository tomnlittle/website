import React from 'react';
import { Card } from "../../Components";
import ProfilePic from "./profile.jpg";
import './profile.css'

export const Profile: React.FC<{}> = () => {
	return (
		<Card className='profile'>
			<div className='profile-container'>
				<div className='bio'>
					<img src={ProfilePic} className="Profile-Pic" alt='Profile' />

					<h1>Thomas Northall-Little</h1>
					<p className="byline"> <a href="https://www.canva.com" target='_blank' rel="noopener noreferrer"> Software Engineer at Canva </a></p>

					<p> <a href="mailto:contact@tomnlittle.com">contact@tomnlittle.com</a></p>
					<p className="Links">
						<a href="https://www.linkedin.com/in/thomas-northall-little-073604111" target='_blank' rel="noopener noreferrer">LinkedIn</a>
						<a href="https://github.com/tomnlittle" target='_blank' rel="noopener noreferrer">GitHub</a>
					</p>
				</div>

				<div className='about'>
					<p>
						Around the age of 10 I had started writing shell scripts for my computer; learning the absolute
						fundamentals to programming. It wasn't until my teacher introduced me to Ruby that
						I truly started to understand the freedom that programming could offer.
						As a teenager I was experimenting with Java in Minecraft, making small addons for the game gave me my
						first foray into graphical design and object oriented programming.
					</p>

					<p>
						Now, having completed my Computer Science degree from UNSW. I have work experience in two startups,
						working with technologies such as Kubernetes and Terraform in Devops roles, to working with Typescript,
						Java and Python in developer roles.
					</p>
				</div>
			</div>
		</Card>
	)
}