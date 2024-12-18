// import './home.css'
import React from 'react';
import Header from '../../Components/Header/header';
import ExploreMenu from '../../Components/ExploreMenu/exploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/foodDisplay';
import { useFood } from '../../Context/FoodContext';
import AppDownload from '../../Components/AppDownload/appDownload';

const Home = () => {
  const {items, data, category} = useFood();
  console.log(items.cartItems);
  console.log("Data : ", data);
  console.log("Category : ", category);

  return (
    <div className='home layout' id='home'>
      <Header />
      <ExploreMenu />
      <FoodDisplay />
      <AppDownload />
    </div>
  );
}

export default Home;
