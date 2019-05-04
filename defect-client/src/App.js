import React from "react";
// import TextFields from "./components/Test/TextFields-Material";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
// import BottomNav from "./components/Test/BottomNav";
import ProjectIndex from "./components/Project/projectIndex";
import "./App.css";
import TestIndex from "./components/Test";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TextFields /> */}
      <TestIndex />
      <ProjectIndex />
    </div>
  );
}

export default App;
