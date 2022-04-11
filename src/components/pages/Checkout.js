import React from 'react'
import '../stylecomponents/Checkout.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from '../../redux/actions/index';

const Checkout = () => {
    const state = useSelector((state)=> state.addItem);
    const dispatch = useDispatch();

    var total = 0;

    const increaseClick = (product) => {
        dispatch(addItem(product));
    }

    const decreaseClick = (product) => {
        dispatch(delItem(product));
    }

    const products = (product) => {
        total = total + (Math.floor(product.qty * product.price))
        return (
            <>
                <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 'none' } }} className='table'>
                    <TableCell>
                        <div className='tablep'>
                            <img src={product.image} alt={product.title} />
                            <div>
                                <h3>{product.title.substring(0, 10)}...</h3>
                                <p className='rate'>Rating {product.rating && product.rating.rate}</p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className='qty'>
                            <button onClick={()=> decreaseClick(product)}>-</button>
                            <div className='num'>{product.qty}</div>
                            <button onClick={()=>increaseClick(product)}>+</button>
                        </div>
                    </TableCell>
                    <TableCell>
                        <p className='price'>${product.price}</p>
                    </TableCell>
                    <TableCell>
                        <p className='price'>${Math.floor(product.qty * product.price)}</p>
                    </TableCell>
                </TableRow>
            </>
        )
    }

  return (
        <div className='checkout'>
            <div className='shop'>
                <div className='shophead'>
                    <h2>Shopping Cart</h2>
                    <h3>{state.length} items</h3>
                </div>
                <hr />
                <TableContainer>
                    <Table sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 'none' } }} aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>PRODUCT</TableCell>
                                <TableCell>QUANTITY</TableCell>
                                <TableCell>PRICE</TableCell>
                                <TableCell>TOTAL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {state.map(products)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='cshop'>
                    <Link to='/products' style={{ textDecoration: 'none'}}>
                        <Button size='large' variant="outlined">
                            <KeyboardBackspaceIcon />
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='summary'>
                <div className='summaryhead'>
                    <h2>Order Summary</h2>  
                </div>
                <hr />
                <div>
                    <div className='order'>
                        <h4>ITEMS {state.length}</h4>
                        <h4>${total}</h4>
                    </div>
                    <div className='promo'>
                        <label>PROMO CODE</label>
                        <input placeholder='Enter your code' className='' />
                        <Button color="error" variant="contained">
                            APPLY
                        </Button>
                    </div>
                    <hr />
                    <div className='order'>
                        <h3>TOTAL COST(USD)</h3>
                        <h3>${total}</h3>
                    </div>
                    <div className='btn'>
                        <Button size='large' color='success' variant="contained">
                            CHECKOUT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;