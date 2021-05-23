import React, { useState, useEffect } from 'react';
import '../stylesheets/card.css'


const Card = (props) => {
  let [imgSrc, setImgSrc] = useState('');
  let [name, setName] = useState('');
  let [cost, setCost] = useState('');

  useEffect(() => {
    let isCancelled = false;
    async function fetchImage() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeIndex}/`);
      let data = await response.json();
      if (isCancelled === false) {
        setImgSrc(data.sprites.front_default);
        setCost(((data.stats[0].base_stat/20)+1).toFixed(2));
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
  }, [props]);


  return (
    <div className="card-div">
      <div className="card-img-div">
        <img src={imgSrc} alt={name}/>
      </div>
      <div className="card-text-div">
        <h3>{name}</h3>
        <h4 className="card-text-price">${cost}</h4>
      </div>

    </div>
  );
}

export default Card;