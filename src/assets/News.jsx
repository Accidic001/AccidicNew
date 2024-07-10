import React from 'react'
import { useEffect, useState } from 'react'
import './News.css'
import NewsLetter from './NewsLetter'
import NavBar from './Navbar'
import NewsData from './NewsData'





function News() {
 
    const [newsList, setNewsList]= useState([]);

 useEffect(()=>{
  async function fetchData(){
    try{
      const response= await fetch("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=ng&apikey=96fc3794223853b16bbdea657c3d1929");
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
    


    // useEffect(() => {
    //   fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=694f717d201f4055af499662b4a459f0")
    //   .then((response)=> response.json())
    //   .then((data)=>{
    //     setnewsList(data.articles);
    //   });
    // },[]);

  return (
    <>

    <div className='container-News container-fluid  m-2'>
        <h2 className=' intro ' style={{color:"#283618"}}>Top 20 hottest News</h2>
      {newsList.map((val, key) => {
        return(
        <NewsData 
        title={val.title}
        publishedAt={val.publishedAt}
        src={val.image}
        author={val.source.name}
        source ={val.source.url}  
        href={val.url}
        key={key}
        /> )
      })};
       
    </div>;
   

    </>
  );
}

export default News
