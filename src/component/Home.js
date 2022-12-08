
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Sidenav from './Sidenav';
import './items.css';

//products
function Home(){

    const [loading,setloading]=useState(false);
    const [data,setdata]=useState([]);

const Productss = () => {

    useEffect(()=>{
      setloading(true);

      axios({
        method:"GET",
        url:"https://fakestoreapi.com/products/1"
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((e) =>console.log(e))
      .finally(()=>setloading(false));
    },[]);
  }


  return (
  <>
    <Sidenav />
    <div className='product'>
        <h1>Welcome! to Shopping Website</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, reprehenderit.
    </div>
    <div className='product_container'>
      {loading && (
          <div>
          {" "}
          <h1>loading.....</h1>
          </div>
      )}

      {data.map((Productss) => (
        <div key={Productss.id} className="card">
        <div><img src={Productss.image} alt="#"/></div>
        <div className='card-description'>
              <h6> {Productss.title}</h6>
              <h6>{ `Price:${Productss.title}`}</h6>
              <h6>{ `Decription:${Productss.Decription}`}</h6>
              <h6> {Productss.title}</h6>
              </div>
              </div>
      ))}
    </div>
    </>
  )
      }

export default Home