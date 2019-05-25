import React from "react";

import "./About.css";

export default class About extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
        <div className="About" id="about">
          <h1>About</h1>
          <p> Around the age of 10 I had started writing shell scripts for my computer; learning the absolute
              fundamentals to programming. It wasn't until my teacher introduced me to Ruby that
              I truly started to understand the freedom that programming could offer.
              As a teenager I was experimenting with Java in Minecraft, making small addons for the game gave me my
              first foray into graphical design and object oriented programming.
          </p>

          <br/>

          <p>
            Now, having completed my Computer Science degree from UNSW. I have work experience in two startups,
            working with technologies such as Kubernetes and Terraform in Devops roles, to working with Typescript,
            Java and Python in developer roles.
          </p>

        </div>
    );
  }

}
