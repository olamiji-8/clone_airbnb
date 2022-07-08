import React from 'react'
import Cards from '../Cards/Cards';
import './Categories.css'

function Categories() {
  const filterResult =(catItem) =>{
    const result = Cards.fillter((curDate) =>{
      return curDate.Cards === catItem;
    });
       filterResult(result)
  }
  return (
    <div className='Categories'>
      <button onClick={() => filterResult("island_section")}>
      <img src='./assest/images/1.jpg' alt='' className=''/>
      <p>island</p>
      </button>

      <button onClick={() => filterResult("parks_section")}>
      <img src='./assest/images/2.jpg' alt='' className=''/>
      <p>parks</p>
      </button>

      <button onClick={() => filterResult("pools_section")}>
      <img src='./assest/images/3.jpg' alt='' className=''/>
      <p>pools</p>
      </button>

      <button onClick={() => filterResult("omg_section")}>
      <img src='./assest/images/4.jpg' alt='' className=''/>
      <p>omg</p>
      </button>

      <button onClick={() => filterResult("beach_section")}>
      <img src='./assest/images/5.jpg' alt='' className=''/>
      <p>beach</p>
      </button>

      <button onClick={() => filterResult("home_section")}>
      <img src='./assest/images/6.jpg' alt='' className=''/>
      <p>home</p>
      </button>

      <button onClick={() => filterResult("design_section")}>
      <img src='./assest/images/7.jpg' alt='' className=''/>
      <p>design</p>
      </button>

      <button onClick={() => filterResult("artic_section")}>
      <img src='./assest/images/8.jpg' alt='' className=''/> 
      <p>artic</p>
      </button>

      <button onClick={() => filterResult("caves_section")}>
      <img src='./assest/images/9.jpg' alt='' className=''/>
      <p>caves</p>
      </button>

      <button onClick={() => filterResult("brekfast_section")}>
      <img src='./assest/images/10.jpg' alt='' className=''/>
      <p>breakfast</p>
      </button>

      <button onClick={() => filterResult("surfing_section")}>
      <img src='./assest/images/11.jpg' alt='' className=''/>
      <p>surfing</p>
      </button>
    </div>
  )
}

export default Categories