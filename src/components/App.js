import React from "react";
import Navbar from "./Navbar";
import Headlines from "./Headlines/Headlines";
import Articles from "./Articles/Articles";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
     <>
        <Navbar/>
        <Headlines/>
        <Articles/>
        <Footer/>
        </>
    </div>
  );
}

export default App;
