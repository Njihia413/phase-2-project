import React from "react";
import BBCArticlesCard from "./BBCArticlesCard";
import CNNArticlesCard from "./CNNArticlesCard";

function MainArticlesCard ({ cnnArticles, bbcArticles }) {
    //console.log(cnnArticles)
    //console.log(bbcArticles)
    const cnnArticlesList = cnnArticles.map((cnnArticle => {
        return (
            <CNNArticlesCard
            key={cnnArticle.title}
            cnnArticle={cnnArticle}
            />
        )
    }))

    const bbcArticlesList = bbcArticles.map((bbcArticle => {
        return (
            <BBCArticlesCard
            key={bbcArticle.source.id}
            bbcArticle={bbcArticle}
            />
        )
    }))

    return (
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top CNN News</h3>
            <div className="row">
                {cnnArticlesList}
            </div>
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top BBC News</h3>
            <div className="row">
                {bbcArticlesList}
            </div>
        </div>
    )
}

export default MainArticlesCard;