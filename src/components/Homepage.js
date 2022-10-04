import React from "react";
import Headlines from "./Headlines/Headlines";
import Articles from "./Articles/Articles";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homepage () {
    return (
        <>
        <Navbar/>
        <Headlines/>
        <Articles/>
        <Footer/>
        </>
    )
}

export default Homepage;