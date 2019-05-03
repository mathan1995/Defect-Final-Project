import React from "react";
// import TextFields from "./components/Test/TextFields-Material";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import BottomNav from "./components/Test/BottomNav";
import ProjectIndex from "./components/Project/projectIndex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TextFields /> */}
      <BottomNav />
      <ProjectIndex />
    </div>
  );
}

export default App;
