import React, { useEffect, useState } from "react";
import SourcesCard from "./SourcesCard";

function Sources () {
    const sourcesUrl = "https://newsapi.org/v2/top-headlines/sources?apiKey=1e0619eab0ac48a8b63e0e1820c18d7a";
    const [sources, setSources] = useState([]);

    //Fetch News Sources
    useEffect(() => {
        fetch(`${sourcesUrl}`)
        .then(response => response.json())
        .then(data => setSources(data.sources))
    },[])

    //Map the sources
    const sourcesList = sources.map((source) => {
        return <SourcesCard key={source.id} source={source}/>
    })

    return (
        <div className="sources m-2">
            <h3 className="text-uppercase headings text-center">news sources</h3>
            <div className="row">
                {sourcesList}
            </div>
        </div>
    )
}

export default Sources;