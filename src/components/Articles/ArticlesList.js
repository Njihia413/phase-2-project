import React from "react";
import MainArticlesCard from "./MainArticlesCard";

function ArticlesList ({ cnnArticles, bbcArticles }) {
    return (
        <div>
            <MainArticlesCard cnnArticles={cnnArticles} bbcArticles={bbcArticles}/>
        </div>
    )
}

export default ArticlesList;