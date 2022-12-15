import { Button, CardActions } from '@mui/material';
import React from 'react'
import Sidenav from './Sidenav';
import "./items.css";
function Clients() {

const clientapi=[
  {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
  {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
  {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
  {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
  {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
  {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
]
  return (
    <>
      <Sidenav/>
      <div className="client_nav">
        <h1>Clients API</h1>
      <div className='clientss'>
          {clientapi.map((props) => {
            return(
              <div >
              <img src={props.avatar} alt="#"/>
              <div className='card-description'>
              <h3> {props.first_name}{props.last_name}</h3>
              <h6> {props.email}</h6>
              {/* <CardActions>
              <Button size="small" variant='outlined'  value={props.id}>KNOW MORE</Button>
              <Button size="small" variant='contained'>Contact US</Button>
              </CardActions> */}
              </div>
            </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Clients;