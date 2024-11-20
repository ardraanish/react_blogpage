import React from 'react';
import Header from './components/header/header'
import Images from './components/header_image/images'
import FoodList from './components/foodList/foodlist'
import Card from './components/cards/cards'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
     { Header()}
      <Images/>
      <FoodList/>
      <Card/>
      <FoodList/>
      <Footer/>
      </div>
  )
}

export default App