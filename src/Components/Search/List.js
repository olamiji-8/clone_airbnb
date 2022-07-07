import React from 'react'
import Cards from '../Cards/Cards'
import './List.css'


function List () {
  return (
    <div>
        <div className='beach_section'>
          <Cards
                src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/1_beach.webp?alt=media&token=ca228de2-7f22-4b88-81a7-bb08e9314230"
                title="Badachro, UK"
                description="5,754 kilometers away Nov 12 – 17"
                price="199 CHF"
                />

            <Cards
                src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/2_beach.webp?alt=media&token=28a74814-7a97-4e12-bba5-d98476093bb9"
                title="Sali, Croatia, Croatia"
                description="4,316 kilometers away Sep 19 – 24"
                price="147 CHF"
            />

            <Cards
                  src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/3_beach.webp?alt=media&token=1eda4a5f-56de-45c5-8928-4d3a010147d3"
                  title= "Murter, Croatia"
                  description="4,323 kilometers away Oct 16 – 23"
                  price="159 CHF"
             />
        </div>

        <div className='beach_section'>
            <Cards
                  src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/4_beach.webp?alt=media&token=3c5c31a6-aa40-45b7-ac10-1048ec064c1e"
                  title="Vis, Croatia"
                  description="4,262 kilometers away Jul 13 – 19"
                  price="1,520 CHF"
             />

        <Cards
                src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/5_beach.webp?alt=media&token=32fbd2e2-e375-4ce7-a5be-e687db570e84"
                title="Angra dos Reis, Brazil"
                description="6,135 kilometers away Jul 22 – 27"
                price="681 CHF" 
         />

        <Cards
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/6_beach.webp?alt=media&token=010776d2-2839-4132-84e9-8c2f90d15bc3"
              title="Općina Lastovo, Croatia"
              description="4,236 kilometers away Sep 1 – 7"
              price="124 CHF"
          />
 </div>
      
<div className='beach_section'>
        <Cards
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/7_beach.webp?alt=media&token=2dd0e382-868f-4fa3-ba51-0cbbbe185c11"
              title="Uusikaupunki, Finland"
              description="6,227 kilometers away Aug 24 – 29"
              price="226 CHF"  
        />

        <Cards 
              src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/8_beach.webp?alt=media&token=cc4e3e59-2dfb-4817-8547-8b7be1d34d58"
              title="Gildeskål, Norway"
              description="6,797 kilometers away Jul 24 – 29"
              price="215 CHF" 
         />

        <Cards
                  src="https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d83ba.appspot.com/o/9_beach.webp?alt=media&token=0da247f7-f24e-4477-b39a-f2be31806db3"
                  title="Skålen, Sweden"
                  description="6,014 kilometers away Oct 1 – 8"
                  price="211 CHF"
         />
</div>


    </div>
  )
}

export default List


















 











 




 











