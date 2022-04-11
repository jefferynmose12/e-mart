import React, {useState, useEffect} from 'react'
import '../stylecomponents/Products.css'
import Button from '@mui/material/Button';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts= async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            // console.log(filter);
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <div className='card-grid'>
                <Skeleton width='200px' height='200px' />
                <Skeleton width='200px' height='200px' />
                <Skeleton width='200px' height='200px' />
                <Skeleton width='200px' height='200px' />
            </div>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=> x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='showproduct'>
                    <Button size="small" variant="outlined" onClick={()=> setFilter(data)}>
                        ALL
                    </Button>
                    <Button size="small" variant="outlined" onClick={()=> filterProduct("men's clothing")}>
                        Men's Clothing
                    </Button>
                    <Button size="small" variant="outlined" onClick={()=> filterProduct("women's clothing")}>
                        Women's Clothing
                    </Button>
                    <Button size="small" variant="outlined" onClick={()=> filterProduct("jewelery")}>
                        Jewelery
                    </Button>
                    <Button size="small" variant="outlined" onClick={()=> filterProduct("electronics")}>
                        Electronic
                    </Button>
                </div>
                <div className='card-grid'>
                    {filter.map((product) => {
                        return (
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black'}} className='card'>
                                <img src={product.image} alt={product.title} height='200px' width='200px' />
                                <div className='card-body'>
                                    <h4>{product.title.substring(0, 12)}...</h4>
                                    <p>${product.price}</p>
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none'}}>
                                        <Button size="small" variant="outlined" >
                                            Buy
                                        </Button>
                                    </Link>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )
    }
    
  return (
    <div className='products' >
        <div className='products-head'>
            <h1>Latest Products</h1>
            <hr />
        </div>
        <div className='c-products'>
            {loading ? <Loading /> : <ShowProducts />}
        </div>
    </div>
  )
}

export default Products