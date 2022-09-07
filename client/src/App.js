import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <div className="App">
      <Header setHamMenu={setHamMenu} />
      <Navbar hamMenu={hamMenu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
