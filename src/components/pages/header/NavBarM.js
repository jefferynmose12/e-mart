import React, {useState} from 'react';
import '../../stylecomponents/NavbarM.css';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import Login from '../Login'
import Register from '../Register'

const NavBarM = () => {
  const [modalL, setModalL] = useState(false);
  const [modalR, setModalR] = useState(false);

  const toggleL = () => {
    setModalL(!modalL)
  }

  const toggleR = () => {
    setModalR(!modalR)
  }

  const state = useSelector((state)=> state.addItem);

  const [ open, setOpen ] = useState(false);

  return (
    <div className='navm'>
      <Link style={{ textDecoration: 'none', color: 'black'}} to='/'><h3>JN COLLECTION</h3></Link>
      <MenuIcon onClick={()=> setOpen(!open)} />
      {
        modalL ? <Login toggleL ={toggleL} /> : null
      }
      {
        modalR ? <Register toggleR ={toggleR} /> : null
      }
      <div className={`listNav ${open ? "active" : ""}`}>
        <div className='linkNav'>
          <Link style={{ textDecoration: 'none', color: 'gray'}} to='/'><p onClick={()=> setOpen(false)}>Home</p></Link>
          <Link style={{ textDecoration: 'none', color: 'gray'}} to='/products'><p onClick={()=> setOpen(false)}>Products</p></Link>
          <Link style={{ textDecoration: 'none', color: 'gray'}} to='/about'><p onClick={()=> setOpen(false)}>About</p></Link>
          <Link style={{ textDecoration: 'none', color: 'gray'}} to='/contact'><p onClick={()=> setOpen(false)}>Contact</p></Link>
          <div className='buttonNav' onClick={()=> setOpen(false)}>
            <Button size="small" height={10} variant="outlined" startIcon={<LoginIcon />} onClick={toggleL}>
              Login
            </Button>
            
            <Button size="small" variant="outlined" startIcon={<HowToRegIcon />} onClick={toggleR}>
              Register
            </Button>
            
            <Link to='/cart' style={{ textDecoration: 'none'}}>
              <Button size="small" variant="outlined" startIcon={<ShoppingCartIcon />}>
                Cart ({state.length})
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarM;