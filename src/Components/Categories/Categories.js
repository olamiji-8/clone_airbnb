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
      <img src='./assest/images/1.jpg' alt='' className=''/>island
      </button>

      <button onClick={() => filterResult("parks_section")}>
      <img src='./assest/images/2.jpg' alt='' className=''/>parks
      </button>

      <button onClick={() => filterResult("pools_section")}>
      <img src='./assest/images/3.jpg' alt='' className=''/>pools
      </button>

      <button onClick={() => filterResult("omg_section")}>
      <img src='./assest/images/4.jpg' alt='' className=''/>omg
      </button>

      <button onClick={() => filterResult("beach_section")}>
      <img src='./assest/images/5.jpg' alt='' className=''/>beach
      </button>

      <button onClick={() => filterResult("home_section")}>
      <img src='./assest/images/6.jpg' alt='' className=''/>home
      </button>

      <button onClick={() => filterResult("design_section")}>
      <img src='./assest/images/7.jpg' alt='' className=''/>design
      </button>

      <button onClick={() => filterResult("artic_section")}>
      <img src='./assest/images/8.jpg' alt='' className=''/> artic
      </button>

      <button onClick={() => filterResult("caves_section")}>
      <img src='./assest/images/9.jpg' alt='' className=''/>caves
      </button>

      <button onClick={() => filterResult("brekfast_section")}>
      <img src='./assest/images/10.jpg' alt='' className=''/>breakfast
      </button>

      <button onClick={() => filterResult("surfing_section")}>
      <img src='./assest/images/11.jpg' alt='' className=''/>surfing
      </button>
    </div>
  )
}

export default Categories