import React, { useEffect, useState } from "react";
import SportsCard from "./SportsCard";

function Sports () {
    const sportsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3607dcbbaf634000be15a4400888e985&pageSize=12";
    const [sports, setSports] = useState([]);

    //Fetch Sports Data
    useEffect(() => {
        fetch(`${sportsUrl}`)
        .then(response => response.json())
        .then(data => setSports(data.articles))
    },[])

    const sportsList = sports.map((sport => {
        return <SportsCard
        key={sport.title}
        sport={sport}
        />
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Sports News</small></h3>
            <div className="row">
                {sportsList}
            </div>
        </div>
        </>
    )
}

export default Sports;