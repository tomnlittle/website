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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Nunc sed id semper risus in hendrerit gravida rutrum. Sollicitudin tempor id eu nisl nunc. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Vitae elementum curabitur vitae nunc sed velit. Amet massa vitae tortor condimentum lacinia quis vel eros. In fermentum et sollicitudin ac orci phasellus. Commodo elit at imperdiet dui accumsan. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Nunc faucibus a pellentesque sit amet porttitor. Sapien eget mi proin sed. At in tellus integer feugiat scelerisque varius morbi enim. Enim facilisis gravida neque convallis a cras semper. Tortor id aliquet lectus proin nibh nisl condimentum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Velit ut tortor pretium viverra suspendisse potenti nullam. Purus faucibus ornare suspendisse sed nisi lacus sed. Proin libero nunc consequat interdum varius sit amet mattis vulputate.</p>
        </div>
    );
  }

}
