import React from "react";

import "./App.css";
import ResponsiveAppBar from "./components/AppBar";
import Caroussel from "./components/caroussel/Caroussel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <ResponsiveAppBar />
        {/* <div className="caroussel">
          <Caroussel />
        </div> */}

        <div className="chart-container"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
