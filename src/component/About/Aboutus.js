import React from 'react'
import "./aboutee.css";
import Sidenav from '../Sidenav';

function Aboutus() {
  return (
    <div>
      <Sidenav />
      <div align="center" className="container_nav">
      <div className="homeHead">
        <h1>WHAT WE DO?</h1>
      </div>
      <div className="whyus">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto,
        earum quos, sequi voluptatem tempora, aut voluptates beatae rem nisi
        atque eius facilis?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatibus mollitia ut rem, corporis nostrum quod adipisci
        quaerat, aliquam sunt dolore veritatis repellat? Hic.ldskjfldk sjflk
        sdjflk sdjflskd jflkds fdjljdsl lkdsfjldjfsf.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptas iusto, earum quos, sequi
        voluptatem tempora, aut voluptates beatae rem nisi atque eius
        facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus mollitia ut rem, corporis nostrum quod adipisci quaerat,
        aliquam sunt dolore veritatis repellat? Hic.ldskjfldk sjflk sdjflk
        sdjflskd jflkds.
      </div>
      <div className="founders">
        <h1>Our Founders</h1>
      </div>
      <div className="founder" align="center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=82 "
            width={200}
            alt=""
          />
          <p>Grary Roy</p>
          <p>Co-Founder Shopify.io</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=84"
            width={200}
            alt=""
          />
          <p>Macky Harry</p>
          <p>Co-Founder & CEO Shopify.io</p>
        </div>
      </div>
      <p id="end">We started with 2, now we are a Team of over 300</p>
      <p>****************</p>
    </div>
  );
      
    </div>
  )
}

export default Aboutus;