import React from 'react'
import '../stylecomponents/About.css'
import emart from '../../images/emart.jpg'

const About = () => {
  return (
    <div className='aboutus'>
        <div className='about'>
            <h1>ABOUT US</h1>
            <p className='main'>
                JN COLLECTION is an E-commerce web-app use for displaying items for sale, items which are men and women clothing, devices, jeweleries and other technologies.
                The web app helps in categorizing items for sale, and also shows price and rating of the particular product. It also involves alot of routes for pages which are: home, products for all items been sold, product for a single item and it information about it, about page, cart page for the showing of selected items and lastly checkout pages for viewing all products been selected and also there prices for each which you can also increase or decrease quantity you want to purchase which will then been sum up to a total amount shown in the same page.
                This web app was made up using React framework, css, material ui, react loading skeleton, react-router-dom and lastly react-redux for the management of states.
            </p>
            <p>
                This web app was designed and devloped by NMOSE JEFFERY JOHN.
            </p>
        </div>
        <div className='image'>
            <img src={emart} alt='emartimage' className='img0' />
        </div>
    </div>
  )
}

export default About;