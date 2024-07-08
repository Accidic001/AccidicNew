import React from 'react'
import { useEffect, useState } from 'react'
import './News.css'
import NewsLetter from './NewsLetter'
import NavBar from './Navbar'
import NewsData from './NewsData'





function News() {
 
    const [newsList, setnewsList]= useState([]);

 useEffect(()=>{
  async function fetchData(){
    try{
      const response= await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=694f717d201f4055af499662b4a459f0");
      if (!response.ok){
        throw new Error("network response is not ok");
      }
      const data = await response.json();
      setnewsList(data.articles);
      console.log(setnewsList);
    }
    catch (error){
      ('there has been a problem with your fetch operation:',error.message);
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
        src={val.urlToImage}
        author={val.author}
        source ={val.source.id}  
        key={key}
        /> )
      })};
       
    </div>;
    <div>
    <NewsLetter />
    </div>

    </>
  );
}

export default News
