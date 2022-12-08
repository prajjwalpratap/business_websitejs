import React from 'react'

function Ncards (props){
    console.log(props)
  return(
    <>

    <cards
      id={props.id}
      email={props.email}
      first_name={props.first_name}
      last_name={props.last_name}
      avatar={props.avatar}
    />
    </>
  )
  }
export default Ncards;