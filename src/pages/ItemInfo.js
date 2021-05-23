import React, { useState, useEffect } from 'react';
import '../stylesheets/itemInfo.css'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { useRouteMatch } from "react-router-dom";

const ItemInfo = (props) => {
  
  let [imgSrc, setImgSrc] = useState('');
  let [name, setName] = useState('');
  let [cost, setCost] = useState('');
  let [totalCost, setTotalCost] = useState('');
  let [quantity, setQuantity] = useState('1');
  let match =useRouteMatch('/shop/:id').url.split('/');
  match=match[match.length-1];

  useEffect(() => {
    let isCancelled = false;
    async function fetchImage() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match}`);
      let data = await response.json();
      if (isCancelled === false) {
        setImgSrc(data.sprites.front_default);
        setCost(((data.stats[0].base_stat/20)+1).toFixed(2));
        setTotalCost(((data.stats[0].base_stat/20)+1).toFixed(2));
        let name = data.name;
        let first = name[0].toUpperCase();
        name = first + name.slice(1);
        setName(name);
      }
    }
    fetchImage();
    return () => {
      isCancelled = true;
    };
  }, []);

  const quantityChange = (event)=> {
    setQuantity(event.currentTarget.value);
  }
  useEffect(()=> {
    setTotalCost((Number(cost)*Number(quantity)).toFixed(2));
  },[quantity, cost]);

  const toCart = () => {
    const itemObj = {
      id: match,
      cost: cost,
      totalCost: totalCost,
      quantity: quantity,
      img: imgSrc,
      name: name,
    }
    console.log('updating:',itemObj);
    props.update(itemObj);
  }

  return (
    <div className="item-info-div">
      <div className="item-img-div">
        <img src={imgSrc} alt={name}/>
      </div>
      <div className="item-text-div">
        <h3 className="item-text-name">{name}</h3>
        <h4 className="item-text-price">${totalCost}</h4>
        <div className="item-cart-div">
          <input type="number" value={quantity} onChange={quantityChange} min='1'/>
          <AddShoppingCartOutlinedIcon onClick={toCart}/>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;