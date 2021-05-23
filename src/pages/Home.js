import React from 'react'
import '../stylesheets/home.css'
import pikachu from '../images/pikachu.png'

const Home = () => {
  return (
    <div className="home-div">
      <div className="title-div">
        <h1 className="title-color">Pokemon Shop!</h1>
        <h2>Buy a Keychain of Your Favourite Pokemon In Our Store</h2>
        <h4>40% discout on first purchase!</h4>
      </div>
      <img className="pokemon-img" src={pikachu} alt="pikachu"/>
    </div>
  );
}

export default Home;