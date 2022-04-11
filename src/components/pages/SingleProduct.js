import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Skeleton from 'react-loading-skeleton'
import '../stylecomponents/SingleProduct.css';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../../redux/actions/index'

const SingleProduct = () => {
    const [ toggleText, setToogleText ] = useState('Add to Cart')
    const {proid} = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts= async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${proid}`);
            setProduct(await response.json());
            setLoading(false);
            // console.log(product);
        }
        getProducts();
    }, [])

    const handleCart = (product) => {
        if(toggleText === 'Add to Cart') {
            dispatch(addItem(product));
            setToogleText('Remove from Cart');
            
        } else {
            dispatch(delItem(product));
            setToogleText('Add to Cart');
        }
    };

    const Loading = () => {
        return (
            <div className='product-flex'>
                    <Skeleton width='250px' height='300px' />
                <div className='second'>
                    <Skeleton width='50px' height='30px' />
                    <Skeleton width='300px' height='60px' />
                    <Skeleton width='30px' height='10px' />
                    <Skeleton width='100px' height='40px' />
                    <Skeleton width='350px' height='80px' />
                    <div className='button'>
                        <Skeleton width='20px' height='20px' />
                        <Skeleton width='20px' height='20px' />
                    </div>
                </div>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='product-flex'>
                <div className='first'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='second'>
                    <h3>{product.category}</h3>
                    <h1>{product.title}</h1>
                    <div className='rating'>
                        <p>Rating {product.rating && product.rating.rate}</p>
                        <StarIcon />
                    </div>
                    <h4>$ {product.price}</h4>
                    <p className='description'>{product.description}</p>
                    <div className='button'>
                        <Button size='small' variant="outlined" onClick={()=>handleCart(product)}>
                            {toggleText}
                        </Button>
                        <Link to='/cart' style={{ textDecoration: 'none'}}>
                            <Button variant="contained" >
                                Go to Cart
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    
  return (
    <>
        {loading ? <Loading /> : <ShowProduct />}
    </>
  )
}

export default SingleProduct;