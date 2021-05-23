import React, { useState, useEffect } from 'react';
import '../stylesheets/shop.css'
import Card from '../components/Card'
import {Link} from "react-router-dom";

const Shop = (props) => {
  const [indexArray, setIndexArray] = useState(new Array(40));

  useEffect(()=>{
    console.log('making array')
    let arrayCopy = [ ...indexArray];
    for (let i=0;i<indexArray.length; i++) {
      arrayCopy[i] = i+1;
    }
    setIndexArray(arrayCopy);
    console.log(indexArray);
  },[])

  return (
    <div className="shop-div">
      <h1 className='shop-title title-color'>Shop KeyChains</h1>
      <div className='shop-cards-div'>
      {indexArray.map((index) => {
        return <Link to={`shop/${index}`} key={index}><Card pokeIndex={index}  /></Link>
      })}
      </div>
      
    </div>
  );
}

export default Shop;