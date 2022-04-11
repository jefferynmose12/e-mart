import React from 'react'
import '../stylecomponents/Contact.css'
import customer from '../../images/customer.jpeg'
import { IoMdCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';


const Contact = () => {

  return (
    <div className='contacthead'>
        <div className='question'>
            <h1>Have Some Question?</h1>
        </div>
        <div className='main'>
          <div className='contact'>
            <div className='idea'>
              <h1>Got an idea?</h1>
              <h4>Reach out to me.</h4>
            </div>
            <div className='get'>
              <div className='num'>
                <IoMdCall />
                <p>+234 8172 604 667</p>
              </div>
              <div className='num'>
                <SiGmail />
                <p>jefferyjohnnmose@gmail.com</p>
              </div>
              <div className='num'>
                <ImLocation />
                <p>ibeju-lekki Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className='contactimg'>
            <img src={customer} alt='contact' />
          </div>
        </div>
    </div>
  )
}

export default Contact;