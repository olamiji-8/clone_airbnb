import React from 'react'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        {/* <hr/> */}
        <Categories/>
        <Footer/>
    </div>
  )
}

export default Home