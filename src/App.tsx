import './App.css'
import profilePicture from "./assets/profile.jpg";
import { Graphic } from "./Graphic/Graphic";

function App() {
  return (
    <>
      <div className="landing">
        <Graphic />
        <div className="info">
          <img src={profilePicture} className="Profile-Pic" alt={"Profile Picture"} />
          <h1>Thomas Northall-Little</h1>
          <p className="byline">Senior Software Engineer at Canva</p>

          <p> <a href="mailto:contact@tomnlittle.com">contact@tomnlittle.com</a></p>
          <p className="Links">
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
            <a href="https://github.com/tomnlittle">GitHub</a>
          </p>
        </div>
      </div>
      <div className="Footer">
        <p> Copyright 2023 - Thomas Northall-Little </p>
      </div>
    </>
  )
}

export default App
