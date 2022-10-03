import React from "react";
import CNNArticlesCard from "./CNNArticlesCard";

function MainArticlesCard ({ cnnArticles }) {
    //console.log(cnnArticles)
    const cnnArticlesList = cnnArticles.map((cnnArticle => {
        return (
            <CNNArticlesCard
            key={cnnArticle.title}
            cnnArticle={cnnArticle}
            />
        )
    }))

    return (
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top CNN News</h3>
            <div className="row">
                {cnnArticlesList}
            </div>
        </div>
    )
}

export default MainArticlesCard;