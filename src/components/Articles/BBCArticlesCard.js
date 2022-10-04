import React from "react";
import dateFormat from 'dateformat';

function BBCArticlesCard ({ bbcArticle }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={bbcArticle.urlToImage} className="card-img-top" alt="CNN Article"/>
                <div className="card-body">
                    <h6>{bbcArticle.title}</h6>
                    <p className="card-text"><small>{bbcArticle.description.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(bbcArticle.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={bbcArticle.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BBCArticlesCard;