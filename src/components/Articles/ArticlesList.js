import React from "react";
import MainArticlesCard from "./MainArticlesCard";

function ArticlesList ({ cnnArticles }) {
    return (
        <div>
            <MainArticlesCard cnnArticles={cnnArticles}/>
        </div>
    )
}

export default ArticlesList;