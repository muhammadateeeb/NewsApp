import { useState } from 'react'

const key = '4f72dda9efea4adebcf0683495738422'

export function useNews({ topic, country }) {
  const [responseNews, setResponseNews] = useState([])

  const news = responseNews.articles

  const newsMapped = news?.map((news, index) => ({
    ID: index,
    autor: news.author,
    title: news.title,
    url: news.url,
    date: news.publishedAt.slice(0, -10)
  }))

  const getNews = () => {
    // setResponseNews(response)

    if (topic || country) {
      fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${topic}&apiKey=${key}`)
        .then(res => res.json())
        .then(json => {
          setResponseNews(json)
        })
      console.log(`C FF is: ${country}`) // C FF = From Fetch Country
      console.log(`T FF T is: ${topic}`) // T FF = From Fetch Topic
    } else {
      setResponseNews(['Error Occured'])
    }
  }

  return { newsMapped, getNews }
}
