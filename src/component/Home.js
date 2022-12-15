
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { CardActions,Button } from '@mui/material';
import Sidenav from './Sidenav';
import './items.css';
import Products from './Products';

//products
function Home(){
    const [data,setData]=useState([]);  

    const product = async () => {
      const products = await axios.get('https://fakestoreapi.com/products')
      setData(products.data)
    }

    useEffect(() => {
      product()
    },[])
  return (
  <>
    <Sidenav/>
    <div className='client_nav'>
        <h1>Welcome! To Shopping Website</h1>  
    </div>
    <div className='cards'>
      {data.map((Products) => (
         <div className='card-description'>
           <img src={Products.image} alt="#"/>
              <h3> {Products.title}</h3>
              <h4>Price:${Products.price}</h4>  
              <CardActions>
                        <Button size="small" variant='outlined'  value={Products.id}>Add To Whislist</Button>
                        <Button size="small" variant='contained'>Buy Now</Button>
              </CardActions>
          </div>
          ))}
      </div>
  </>
  )
}

export default Home