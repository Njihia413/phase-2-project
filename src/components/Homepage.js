import React from "react";
import Headlines from "./Headlines/Headlines";
import Articles from "./Articles/Articles";
import Navbar from "./Navbar";

function Homepage () {
    return (
        <>
        <Navbar/>
        <Headlines/>
        <Articles/>
        </>
    )
}

export default Homepage;