import React from 'react';

const Portfolio = () => (
  <>
  <div className='portfolio'>
    <h1 className='ptitle'>Portfolio</h1>
    <div className='pcontainer'>
      <div className='pp'>
      <div className='projects'>
        <div className='pinfo'>
          <h1>trvlr</h1>
          <p>https://trvlr.netlify.app</p>
          <br />
          <p>React hooks, styled components, React router, smooth scroll, responsive</p>
        </div>
      <a 
      href='https://trvlr.netlify.app' 
      target='_blank' 
      rel="noopener noreferrer"
      className='project' 
      >
            <img src='/images/trvlr.png' alt="github icon" />
      </a>
      </div>
      <div className='projects'>
        <div className='pinfo'>
          <h1>Brax</h1>
          <p>https://braxmcclellan.netlify.app</p>
          <br />
          <p>React hooks, CSS styling, React router</p>
        </div>
      <a 
      href='/' 
      target='_blank' 
      rel="noopener noreferrer"
      className='project'
      >
            <img src='/images/mc1.png' alt="github icon" />
      </a>
      </div>
      </div>
    </div>
  </div>
  </>
)

export default Portfolio;