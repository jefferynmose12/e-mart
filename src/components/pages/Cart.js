import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { addItem, delItem } from '../../redux/actions/index';
import '../stylecomponents/Cart.css'

const Cart = () => {

    const state = useSelector((state)=> state.addItem);
    const dispatch = useDispatch();

    const DelCart = (product) => {
        dispatch(delItem(product));
    };

    const emptyCart = () => {
        return (
            <div className='cart'>
                Your Cart is Empty
            </div>
        )
    }
    
    const products = (product) => {
        return(
            <div key={product.id} className='cart'>
                <div className='cancelbtn'>
                    <HighlightOffIcon onClick={()=>DelCart(product)} style={{fontSize: '30px', color: 'gray', cursor: 'pointer'}} />
                </div>
                <div className='cartitem'>
                    <img src={product.image} alt={product.title} />
                    <div className='item'>
                        <h2>{product.title}</h2>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <Link to='/checkout' style={{ textDecoration: 'none'}} className='checkoutbtn'>
                <Button size='large' variant="contained">
                    Proceed to Checkout
                </Button>
            </Link>
        )
    }

  return (
    <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(products)}
        {state.length !== 0 && button()}
    </>
  )
}

export default Cart;