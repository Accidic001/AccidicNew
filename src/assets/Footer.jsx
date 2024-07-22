import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="bg-body-tertiary text-center text-lg-start mb-2 shadow">
  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{backgroundColor:"#222" ,color:"#fff"}}>
    © 2020 Copyright:
    <Link className="text-white" to="https://accidic-news.netlify.app//">Accidic-News.com</Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}

export default Footer
