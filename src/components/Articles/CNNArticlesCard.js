import React from "react";
import dateFormat from 'dateformat';


function CNNArticlesCard ({ cnnArticle }) {
    const { 
        urlToImage = "https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg", 
        title, 
        description, 
        publishedAt, 
        url
    } = cnnArticle
    
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={urlToImage ? urlToImage : "https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"} className="card-img-top" alt="CNN Article"/>
                <div className="card-body">
                    <h6>{title}</h6>
                    <p className="card-text"><small>{description.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CNNArticlesCard;