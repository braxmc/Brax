import React from 'react';

const About = () => (
  <>
    <div className='about'>
      <div className='about-info'>
        <h1>Braxton D. McClellan</h1>
        <p>
          I’ve always loved tech, I just never thought I was capable. After realizing my sales days were numbered I decided it was time for a change. I had a friend who had just graduated, got a job, and loved it. After watching him and and talking to countless other graduates I used him as a referral to get into DevPoint Labs who is partnered with the University of Utah in Salt Lake City, UT. I'm keen and very passionate so I'm excited to see where this takes me.
        </p>
        <br />
        <p>
          Outside of coding I'm an avid gamer, currently im playing fortnite and runescape, but I play most major titles and lots of old games. I love motorsports such as dirtbiking and Harley's, and also enjoy traditional sports like lacrosse and pickleball. I'm also very passionate about traveling.
        </p>
        <br />
        <p>
        I will be receiving my Full-Stack Web Development certificate from DevPoint Labs on 10/31/2020.
        </p>
        <div className='list'>
          <h4>Skills</h4>
          <ul>
            <li>Rails</li>
            <li>Javascript</li>
            <li>ES6</li>
            <li>React</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Axios</li>
            <li>RESTful API</li>
            <li>Semantic-UI</li>
            <li>Postgresql</li>
            <li>Github</li>
            <li>Virtual Studios</li>
          </ul>
        </div>
      </div>
      <div className='about-pic'>
        <img className='pic' src='/images/about.png' alt='brax sitting on rock' />
      </div>
    </div>
  </>
)

export default About;