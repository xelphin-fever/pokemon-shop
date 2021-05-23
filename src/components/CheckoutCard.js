import React, { useState, useEffect } from 'react';
import '../stylesheets/checkoutCard.css'


const CheckoutCard = (props) => {
  
  const [totalCost,setTotalCost] = useState(props.totalCost)

  const quantityChange=(event)=> {
    console.log('quantity changed to', event.currentTarget.value);
    props.changeQuantity(props.id, event.currentTarget.value);
  }
  const deleteItem=()=> {
    props.delete(props.id)
  }

  return (
    <div className="checkout-card-div">
      <div>
        <img src={props.img} alt="pokemon keychain"/>
      </div>
      <div >
        <h2>{props.name}</h2>
        <div className="checkout-card-cost-div">
          <h3>${totalCost}</h3>
          <input type="number" min="1" value={props.quantity} onChange={quantityChange} />
        </div>
      </div>
      <button onClick={deleteItem} >X</button>
    </div>
  );
}

export default CheckoutCard;