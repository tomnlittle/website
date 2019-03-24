import React from "react";

import Button from "./Button/Button";
import "./Landing.css";
import ProfilePic from "./profile.jpg";
import SideImage from "./SideImage.jpg";

export default class Landing extends React.Component {

  public render(): JSX.Element {
    return (
      <div className={"Landing"}>

        {/* Left side */}

        <div className={"Left"}>
          <img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"}/>
          <h1>Thomas Northall-Little</h1>

          <Button> Project Timeline </Button>
        </div>

        {/* Right Side */}

        <div className={"Right"}>
          <img src={SideImage} className="Side-Image" alt={""}/>
        </div>

      </div >
    );
  }
}
