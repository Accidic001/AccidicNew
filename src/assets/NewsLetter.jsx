import React from 'react'
import './newsLetter.css';

function NewsLetter() {
  return (
    <div className=' letter'>
        <h1 className=''>NEWS LETTER</h1>
        <h2>Always in touch with Accidic news for your daily news</h2>
      <div className="form d-flex" id=''>
        <input type="email"  placeholder='enter your email here....'/>
      <a href="Entertainment" rel='noopener noreferrer' target='_blank' className='btn button'>
      send
      </a>
      {/* <button>send</button> */}
      </div>
    </div>
  )
}
// adding comment

export default NewsLetter
