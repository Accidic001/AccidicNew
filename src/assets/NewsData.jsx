import React from 'react'
import { Link } from 'react-router-dom'

function NewsData(val, key) {
 
  return (
      <div className='News container-fluid'>
            <h3 className=' text-center title pt-4'>{val.title}</h3>
            <div className="img-container">
            <img src={val.image} alt="image not available"  />
            </div>
            <p className="content">{val.content}</p>
            <Link to= {val.source} rel='noopener' target='_blank'  >
            <button className='btn p-2 btn-secondary'  >read more</button>
            </Link>
            <div className="data mt-3">
             <p>Author : {val.source.name}</p>
            <p>source : {val.image}</p>
            <p>{val.publishedAt}</p>
            </div>
            </div>
  )
}

export default NewsData
