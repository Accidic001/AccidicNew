import React from 'react'
import './newsLetter.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    // Store or process the email value here
    console.log('Email submitted:', email);
      // Store the email value in local storage
  localStorage.setItem('newsletterEmail', email);
  
  // Optionally, you can log it to the console for verification
  console.log('Email submitted:', email);
    
    // Navigate to the entertainment page
    navigate('/');
  };
  return (
    <div className=' letter'>
        <h1 className=''>NEWS LETTER</h1>
        <h2>Always in touch with Accidic news for your daily news</h2>
      <div className="form d-flex" id=''>
        <input type="email" id='button' value={email} onChange={handleInputChange} placeholder='enter your email here....'/>
      <button onClick={handleButtonClick}>send</button>
      </div>
    </div>
  )
}
// adding comment

export default NewsLetter
