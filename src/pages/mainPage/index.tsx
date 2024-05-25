import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default  () => {
  return (
    <div>
      <NavBar/>
      <div className='mainBody'>
        <h1 className='text-center'>This is a sample text</h1>
      </div>
      <Footer/>
    </div>
  )
}
