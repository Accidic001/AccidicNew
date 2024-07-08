import React from 'react'

function NewsData(val, key) {
  return (
      <div className='News container'>
            <h3 className=' text-center title pt-4'>{val.title}</h3>
            <img src={val.urlToImage} alt="url"  />
            <a href={val.url} className='btn btn-primary'>read more...</a>
            <div className="data mt-3">
             <p>Author : {val.author}</p>
            <p className='text-danger'>source : {val.source}</p>
            <p>{val.publishedAt}</p>
            </div>
            </div>
  )
}

export default NewsData
