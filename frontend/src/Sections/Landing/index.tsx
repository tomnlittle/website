import React from "react";
import { ParticlesAnimation } from "../../Components";
import { Profile } from './profile';
import "./index.css";


export const Landing: React.FC<{}> = () => {
	return (
		<div>
			<ParticlesAnimation className='landing-background' />

			<div className="landing-content">

				{/* <NavBar 
					className='navbar'
					Elements={[
						{ href: '#about', name: 'About' }
					]}
				/> */}

				<Profile/>

				
				
			</div>
		</div>
	);
}
