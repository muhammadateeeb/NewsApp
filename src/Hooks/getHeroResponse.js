import { useState } from 'react'
import { API_KEY as key } from '../api/API.JS'
import mock from './mock.json'

export function useNews({ topic, country }) {
  const [responseNews, setResponseNews] = useState([])

  const news = mock.articles

  const newsMapped = news?.map((news, index) => ({
    ID: index,
    title: news.title,
    image: news.urlToImage,
    description: news.description,
    url: news.url,
    date: news.publishedAt.slice(0, -10)
  }))

  const topics = ['apple', 'microsoft', 'Elon Musk', 'meta', 'samsung', 'toyota', 'honda', 'jeep', 'ford']

  const getRandomTopic = () => {
    return (
      Math.floor(Math.random() * topics.length)
    )
  }

  const getNews = () => {
    if (topic || country) {
      fetch(`https://newsapi.org/v2/everything?q=${topics[getRandomTopic]}&from=2024-02-28&to=2024-02-28&sortBy=popularity&apiKey=${key}`)
        .then(res => res.json())
        .then(json => {
          setResponseNews(json)
        })
      console.log(`C FF is: ${country}`) // C FF = From Fetch Country
      console.log(`T FF is: ${topic}`) // T FF = From Fetch Topic
    } else {
      setResponseNews(['Error Occured'])
    }
  }

  return { newsMapped, getNews }
}
