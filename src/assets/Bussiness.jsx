import React from 'react'
import { useState,useEffect } from 'react';
import './News.css'
import NewsData from './NewsData';

function Business() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=694f717d201f4055af499662b4a459f0"
        );
        console.log("Response status:", response.status); // Log response status
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        const data = await response.json();
        console.log("Data:", data); // Log data returned
              // Restructure the data if necessary
              const transformedData = data.articles.map(article => ({
                title: article.title,
                publishedAt: article.publishedAt,
                src: article.urlToImage,
                author: article.author,
                source: article.source.id
            }));
            // console.log("Transformed data:", transformedData); // Log the transformed data

            setNewsList(transformedData);
        setNewsList(data.articles);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error.message
        );
      }
    }
    fetchData();
  }, []); // Ensure the dependency array is properly closed

  return (
    <div className="container-News container-fluid">
      <h2 className="intro" style={{ color: "#283618" }}>
        Top 20 hottest News
      </h2>
      {Array.isArray(newsList) &&
        newsList?.map((val, key) => {
          return (
            <NewsData
              title={val.title}
              publishedAt={val.publishedAt}
              src={val.urlToImage}
              author={val.author}
              source={val.source.id}
              key={key}
            />
          );
        })}
    </div>
  );
}

export default Business;