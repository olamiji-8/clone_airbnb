import React from 'react'
import './Cards.css'


//  function Cards   ({src,title,description,price})
//  {

//   return (
//     <div className='Cards'>
//         <img src={img} alt=''/>
//         <div>
//             <h2>{title}</h2>
//             <h4>{description}</h4>
//             <h3>{price}</h3>
//         </div>
   

//     </div>
//   )
// }

// export default Cards

const Cards =({item}) =>{
    return(
        <div>
            {
            item.map((cardItem) =>{
                const{ id,title,img,description,price} =cardItem;
                return(
                    <div>
                       <img src={img} alt=''/>
                            <div>
                                <h2>{title}</h2>
                                <h4>{description}</h4>
                                <h3>{price}</h3>
                            </div>
                                
                    </div>
                    
                )
            })
        }
        
            </div>
    )
 }
export default Cards;