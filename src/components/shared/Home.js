import React from 'react';

const Home = () => {
  return (
    <>
      <div className='home'>
       <div className='holder'>
        <img className='brax' src='/images/Brax1.jpg' alt="Braxton" />
       </div>
       <div className='pages'>
        <h1 className='page'>Full-Stack Web Developer based in Bluffdale, UT.</h1>
        <br/>
        <h1 className='page'>Experieneced in Ruby and React.</h1>
       </div>
       <div className='icons'>
        <img className='icon' src='/images/ruby.svg' alt="rails icon" />
        <img className='icon' src='/images/react-icon1.jpg' alt="react icon" />
        <img className='icon' src='/images/post.svg' alt="postgresql icon" />
       </div>
      </div>
    </>
  )
}

export default Home;