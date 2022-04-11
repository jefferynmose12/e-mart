import React, {useState} from 'react'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../stylecomponents/Navbar.css';
import Login from '../Login'
import Register from '../Register'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {

    const [modalL, setModalL] = useState(false);
    const [modalR, setModalR] = useState(false);

    const toggleL = () => {
        setModalL(!modalL)
    }

    const toggleR = () => {
        setModalR(!modalR)
    }
    
    const state = useSelector((state)=> state.addItem);

  return (
    <div className='nav'>
        <Link style={{ textDecoration: 'none', color: 'black'}} to='/'><h2>JN COLLECTION</h2></Link>
        <div className='list'>
            <Link style={{ textDecoration: 'none', color: 'gray'}} to='/'><p>Home</p></Link>
            <Link style={{ textDecoration: 'none', color: 'gray'}} to='/products'><p>Products</p></Link>
            <Link style={{ textDecoration: 'none', color: 'gray'}} to='/about'><p>About</p></Link>
            <Link style={{ textDecoration: 'none', color: 'gray'}} to='/contact'><p>Contact</p></Link>
        </div>
        <div className='button'>
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
        {
            modalL ? <Login toggleL ={toggleL} /> : null
        }
        {
            modalR ? <Register toggleR ={toggleR} /> : null
        }
    </div>
  )
};

export default NavBar;