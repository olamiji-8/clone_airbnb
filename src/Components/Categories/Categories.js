import React from 'react'
import Cards from '../Cards/Cards';
import './Categories.css'

  const Categories =({categories,filterItem})=>{
    return( categories.map((category,index))=>{
      
    }
  return (
    <div className='Categories'>
      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/1.jpg' alt='' className=''/>
      <p>island</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/2.jpg' alt='' className=''/>
      <p>parks</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/3.jpg' alt='' className=''/>
      <p>pools</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/4.jpg' alt='' className=''/>
      <p>omg</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/5.jpg' alt='' className=''/>
      <p>beach</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/6.jpg' alt='' className=''/>
      <p>home</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/7.jpg' alt='' className=''/>
      <p>design</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/8.jpg' alt='' className=''/> 
      <p>artic</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/9.jpg' alt='' className=''/>
      <p>caves</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/10.jpg' alt='' className=''/>
      <p>breakfast</p>
      </button>

      <button key={index} onClick={() => filterItem("category")}>
      <img src='./assest/images/11.jpg' alt='' className=''/>
      <p>surfing</p>
      </button>
    </div>
  )
}

export default Categories