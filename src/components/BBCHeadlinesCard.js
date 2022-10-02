import React from "react";

function BBCHeadlinesCard ({ bbcHeadline }) {
    return (
        <div className="card-image p-4 mb-3" style={{backgroundImage: `url(${bbcHeadline.urlToImage})`}}>
            <div className="headline-text">
                <h4 className="news-headings mt-2">{bbcHeadline.title}</h4>
                <button className="btn btn-primary btn-sm mt-3">{bbcHeadline.author}</button>
            </div>
        </div>
    )
}

export default BBCHeadlinesCard;