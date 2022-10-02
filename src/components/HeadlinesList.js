import React from "react";
import MainHeadlinesCard from "./MainHeadlinesCard";

function HeadlinesList ({ bbcHeadlines, cnnHeadlines, googleHeadlines }) {

    return (
        <div>
            <MainHeadlinesCard bbcHeadlines={bbcHeadlines} cnnHeadlines={cnnHeadlines} googleHeadlines={googleHeadlines}/>
        </div> 
    )
}

export default HeadlinesList;