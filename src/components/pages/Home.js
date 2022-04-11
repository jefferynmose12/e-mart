import React from 'react'
import '../stylecomponents/Home.css'
import Products from './Products'

const Home = () => {
  return (
    <>
      <div className='home'>
          <h1>NEW SEASON ARRIVALS</h1>
          <p>
              CHECK OUT ALL THE TRENDS
          </p>
      </div>
      <Products />
    </>
  )
};

export default Home;