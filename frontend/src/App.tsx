import React from "react";

import { About, Landing, Footer } from "./Sections";
import "./App.css";

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Landing />
      <About />
      <Footer />
    </div>
  );

}
