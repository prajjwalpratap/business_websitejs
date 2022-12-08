import React from 'react'

function cards(props) {
  return (
    <>
    <div className='cards'>
         {props.id}
        <div className='card'>
        {props.avatar}
            <div className='Card_info'>
                <span className='card_category'>{props.first_name}</span>
                <h3 className='card_title'>{props.last_name}</h3>
                <a href=''target='_blank'>
                    <button>{props.email}</button>
                    <button>Order</button>
                </a>
            </div>
        </div>
    </div>

    </>
  )
}

export default cards