import React from "react";

import Button from "./Button/Button";
import "./Landing.css";
import ProfilePic from "./Profile.jpg";
import SideImage from "./SideImage.jpg";

export default class Landing extends React.Component {

  public render(): JSX.Element {
    return (
      <div className={"Landing"}>

        {/* Left side */}

        <div className={"Left"}>
          <img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"}/>
          <h1>Thomas Northall-Little</h1>

          <p> <a href="mailto:contact@tomnlittle.com"> contact@tomnlittle.com </a> </p>
          <p className="Links">
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
            <a href="https://github.com/tomnlittle">GitHub</a>
          </p>

          <Button> Project Timeline </Button>
          <Button> Experience </Button>
        </div>

        {/* Right Side */}

        <div className={"Right"}>
          <img src={SideImage} className="Side-Image" alt={""}/>
        </div>

      </div >
    );
  }
}
