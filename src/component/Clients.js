import { autocompleteClasses, Card, Grid } from '@mui/material';
import React from 'react'
import Sidenav from './Sidenav';
import Ncards from './Ncards';
import { margin } from '@mui/system';
function Clients() {

const clientapi=[
{
    "id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"
}
]
  return (
    <>
      <Sidenav/>
      <header>
        <h1>Clients API</h1>
        <Grid>
          {clientapi.map((item) => {
            const {first_name, last_name, avatar, email} = item

            return(
              <>
              <Ncards
                  title={first_name + ' ' + last_name}
                  image ={avatar}
                  subTitle={email}
                  btn = 'Know More'
                  fillBtn='Contact'
                  />
              </>
            )
          })}
        </Grid>
      </header>

    </>
  )
}

export default Clients;