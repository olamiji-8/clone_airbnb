import React from 'react'
import './Cards.css'

 function Cards   ({src,title,description,price})
 {

  return (
    <div className='Cards'>
        <img src={src} alt=''/>
        <div>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
        </div>

      

    </div>
  )
}

export default Cards