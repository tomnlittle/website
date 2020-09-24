import React from "react";
import {Card } from '../Components/Card';
import "./index.css";

export default function About() {
  return (
    <div className='about-container'>
      <div className="about" id="about">

        <h1>About</h1>
        <p> Around the age of 10 I had started writing shell scripts for my computer; learning the absolute
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

      <Card>
        <img src='https://via.placeholder.com/400x300'/>
      </Card>

    </div>
  );
}
