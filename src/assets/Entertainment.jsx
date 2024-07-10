import React from 'react'
import { useState,useEffect } from 'react'
import './News.css'
import NewsData from './NewsData'

function Entertainment() {
    const [newsList, setNewsList]= useState([]);


useEffect(()=>{
  async function fetchData(){
    try{
      const response= await fetch("https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=694f717d201f4055af499662b4a459f0");
      console.log("Response status:", response.status); // Log response status
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }
      const data = await response.json();
      console.log("Data:", data); // Log data returned
      setNewsList(data.articles);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error.message
      );
    }
  }
  fetchData();
},[]);  
// Ensure dependency is properly closed


    // useEffect(() => {
    //   fetch("https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=694f717d201f4055af499662b4a459f0")
    //   .then((response)=> response.json())
    //   .then((data)=>{
    //     setnewsList(data.articles);
    //   });
    // },[]);

  return (
    <div className='container-News container-fluid '>
        <h2 className='intro' style={{color:"#283618"}}>Top 20 hottest News</h2>
      {newsList.map((val, key) => {
         return(
          <NewsData 
          title={val.title}
        publishedAt={val.publishedAt}
        src={val.urlToImage}
        author={val.author}
        source ={val.source.id}  
        href={val.url}
        key={key}
          /> )
      })}
    </div>
  );
}

export default Entertainment
