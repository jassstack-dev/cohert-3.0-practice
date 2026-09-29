import React from 'react'
import Welcome from '../components/Welcome'
import StateCard from '../components/stateCard'
import ShopByCategory from '../components/ShopByCategory'
import TopRated from '../components/TopRated'
import NewArrivals from '../components/NewArrival'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Welcome/>
      <StateCard/>
      <ShopByCategory/>
    
        <TopRated/>
        <NewArrivals/>
      
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default Home