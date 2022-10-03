import React, { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";

function Articles () {
    const cnnArticlesUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=8";
    const bbcArticlesUrl  = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=8"
    const [cnnArticles, setcnnArticles] = useState([]);
    const [bbcArticles, setbbcArticles] = useState([]);

    //Fetch CNN Articles
    useEffect(() => {
        fetch(`${cnnArticlesUrl}`)
        .then(response => response.json())
        .then(data => setcnnArticles(data.articles))
    },[])
    

    //Fetch BBC Articles
     useEffect(() => {
        fetch(`${bbcArticlesUrl}`)
        .then(response => response.json())
        .then(data => setbbcArticles(data.articles))
    },[])

    return (
        <div>
            <ArticlesList cnnArticles={cnnArticles} bbcArticles={bbcArticles} setcnnArticles={setcnnArticles} setbbcArticles={setbbcArticles}/>
        </div>
    )
}

export default Articles;