import React from 'react'
import { Link } from 'react-router-dom'

function NewsData(val, key) {
 
  return (
      <div className='News container-fluid'>
            <h3 className=' text-center title pt-4'>{val.title}</h3>
            <div className="img-container">
            <img src={val.image} alt="url"  />
            </div>
            
            <button className='btn btn-primary' href= {val.url} rel='noopener' target='_blank'  > read more...</button>
            <div className="data mt-3">
             <p>Author : {val.source.name}</p>
            <p className='text-danger'>source : {val.source.url}</p>
            <p>{val.publishedAt}</p>
            </div>
            </div>
  )
}

export default NewsData
