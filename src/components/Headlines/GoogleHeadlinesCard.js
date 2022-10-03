import React from "react";

function GoogleHeadlinesCard ({ googleHeadline }) {
   return (
    <div className="card-image p-4 mb-3" style={{backgroundImage: `url(${googleHeadline.urlToImage})`}}>
        <div className="headline">
            <h5 className="news-headings mt-2">{googleHeadline.title}</h5>
            <button className="btn btn-primary btn-sm mt-3">{googleHeadline.source.name}</button>
        </div>
    </div>
    ) 
}

export default GoogleHeadlinesCard;