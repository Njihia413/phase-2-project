import React, { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";

function Articles () {
    const cnnArticlesUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=9";
    const [cnnArticles, setcnnArticles] = useState([]);

    //Fetch CNN Articles
    useEffect(() => {
        fetch(`${cnnArticlesUrl}`)
        .then(response => response.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <ArticlesList cnnArticles={cnnArticles} setcnnArticles={setcnnArticles}/>
        </div>
    )
}

export default Articles;