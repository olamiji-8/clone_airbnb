import React, { useState } from 'react'
import item from '../data/data';
import './Categories.css'


function Categories() {
 const[data,setData]=useState(item)

 const filterResult =(catItem)=>{
  const result = data.filter((curDate) =>{
    return curDate.data === catItem
  }
  )
  setData(result);
 }
  return (
    <div className='Categories'>
      <button onClick={() => filterResult("island")}>
      <img src='./assest/images/1.jpg' alt='' className=''/>
      <p>island</p>
      </button>

      <button onClick={() => filterResult("parks")}>
      <img src='./assest/images/2.jpg' alt='' className=''/>
      <p>parks</p>
      </button>

      <button onClick={() => filterResult("pools")}>
      <img src='./assest/images/3.jpg' alt='' className=''/>
      <p>pools</p>
      </button>

      <button onClick={() => filterResult("omg")}>
      <img src='./assest/images/4.jpg' alt='' className=''/>
      <p>omg</p>
      </button>

      <button onClick={() => filterResult("beach")}>
      <img src='./assest/images/5.jpg' alt='' className=''/>
      <p>beach</p>
      </button>

      <button onClick={() => filterResult("home")}>
      <img src='./assest/images/6.jpg' alt='' className=''/>
      <p>home</p>
      </button>

      <button onClick={() => filterResult("design")}>
      <img src='./assest/images/7.jpg' alt='' className=''/>
      <p>design</p>
      </button>

      <button onClick={() => filterResult("artic")}>
      <img src='./assest/images/8.jpg' alt='' className=''/> 
      <p>artic</p>
      </button>

      <button onClick={() => filterResult("caves")}>
      <img src='./assest/images/9.jpg' alt='' className=''/>
      <p>caves</p>
      </button>

      <button onClick={() => filterResult("breakfast")}>
      <img src='./assest/images/10.jpg' alt='' className=''/>
      <p>breakfast</p>
      </button>

      <button onClick={() => filterResult("surfing")}>
      <img src='./assest/images/11.jpg' alt='' className=''/>
      <p>surfing</p>
      </button>

      <div >
        {data.map((Val)=>{
          const{id,title,price,img,description}=Val;
          return(
            <div className='Cards' key={id}>
              <img src={img} alt='' />
                <div>
                  <h2>{title}</h2>
                  <h4>{description}</h4>
                  <h3>{price}</h3>
                </div>
            </div>        
          )
        }
        )}
                       
      </div>
    </div>
  )
      }
    
    


export default Categories