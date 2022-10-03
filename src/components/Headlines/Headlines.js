import React, { useEffect, useState } from "react";
import HeadlinesList from "../Headlines/HeadlinesList";

function Headlines () {
    const bbcHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=1"
    const cnnHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=2"
    const googleHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e05ca232a09f4c6394d6716dbcde7fef&pageSize=2"
    const [bbcHeadlines, setbbcHeadlines] = useState([]);
    const [cnnHeadlines, setcnnHeadlines] = useState([]);
    const [googleHeadlines, setgoogleHeadlines] = useState([]);


    //Fetch BBC Headlines
    useEffect(() => {
        fetch(`${bbcHeadlinesUrl}`)
        .then(response => response.json())
        .then(data =>setbbcHeadlines(data.articles))
    }, [])

    //Fetch CNN Headlines
    useEffect(() => {
        fetch(`${cnnHeadlinesUrl}`)
        .then(response => response.json())
        .then(data =>setcnnHeadlines(data.articles))
    }, [])

    //Fetch Google Headlines
    useEffect(() => {
        fetch(`${googleHeadlinesUrl}`)
        .then(response => response.json())
        .then(data =>setgoogleHeadlines(data.articles))
    }, [])

    return (
        <div>
            <HeadlinesList bbcHeadlines={bbcHeadlines} cnnHeadlines={cnnHeadlines} googleHeadlines={googleHeadlines} setbbcHeadlines={setbbcHeadlines} setcnnHeadlines={setcnnHeadlines} setgoogleHeadlines={setgoogleHeadlines}/>
        </div>
    )
}

export default Headlines;