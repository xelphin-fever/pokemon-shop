import '../stylesheets/checkout.css'
import React, { useState, useEffect} from 'react';
import CheckoutCard from '../components/CheckoutCard'
import {Link} from "react-router-dom";

const Checkout = (props) => {

  const [list, setList] = useState(props.cart);
  const [toPay, setToPay] =useState(false);
  const [costHover, setCostHover] =useState(false);

  useEffect(()=> {
    console.log('changed cart');
    setList(props.cart);
  },[props.cart])


  const turnToPay =()=>{
    if (costHover===false){
      console.log('placed on')
      setCostHover(true);
      setToPay(true);
    }
  }

  const turnToCost =()=>{
    if (costHover===true){
      console.log('placed off')
      setCostHover(false);
      setToPay(false);
    }
  }


  return (
    <div className="checkout-div">
      <h1 className="checkout-title title-color">Check Out</h1>
      {list.map((item) => {
        return <CheckoutCard
         key={item.id}
         id={item.id}
         name={item.name} 
         img={item.img}  
         totalCost={item.totalCost} 
         quantity={item.quantity} 
         delete={props.delete} 
         changeQuantity={props.changeQuantity} />
      })}
      <div className="checkout-div-total" onMouseOver={turnToPay} onMouseOut={turnToCost}>
        {toPay===false 
          ? <h2 className="checkout-total" > Total: ${props.cartCost} </h2>
          : <Link to='/payment'><h2 className="checkout-total" > Pay </h2></Link>
        }
      </div>
      
    </div>
  );
}

export default Checkout;