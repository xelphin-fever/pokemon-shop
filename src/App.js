import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Shop from './pages/Shop'
import Nav from './components/Nav'
import ItemInfo from './pages/ItemInfo'
import Payment from './pages/Payment'

const App = () => {
  const [cartCost,setCartCost] =useState(0);
  const [cart, setCart] = useState([]);
  const cartRef = useRef([])

  const addCart = (obj) => {
    let cartCopy = [...cart];
    let existing = cart.filter((check) => check.id === obj.id);
    if (existing.length===0){
      cartCopy.push(obj);
    } else {
      cartCopy.map((item) => {
        if (item.id===obj.id){
          item.totalCost=obj.totalCost;
          item.quantity=obj.quantity;
        }
        return item;
      })
    }
    setCart(cartCopy);
  }

  const updateQuantity = (id, quantity) => {
    let cartCopy = [...cart];
    cartCopy.map((item) => {
      if (item.id===id){
        item.quantity=quantity;
        item.totalCost= String((Number(item.cost)* Number(quantity)).toFixed(2));
      }
      return item;
    })
    setCart(cartCopy);
  }

  const removeItem = (id) => {
    let cartCopy = [...cart];
    let cartNew = cartCopy.filter((item) => item.id!==id)
    setCart(cartNew);
  }


  useEffect(() => {
    cartRef.current = cart;
    console.log('cartRef current is now',cartRef.current);
  }, [cart])

  useEffect(()=> {
    // Thanks to this useEffect() the delete happens instanlty, because another prop actually changes
    // Can't listen to cartRef change, doesn't happen
    let sum=0;
    for (let i=0; i<cartRef.current.length;i++){
      sum=sum+Number(cartRef.current[i].totalCost);
    }
    setCartCost(String(sum));
  }, [cart])

  
  return (
    <Router>
      <div>
        <Nav/>
        <Switch> 
          <Route exact path='/' component={Home}/>
          <Route path='/checkout' component={() => <Checkout cartCost={cartCost} cart={cartRef.current} changeQuantity={updateQuantity} delete={removeItem} />}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/shop/:id' component={() => <ItemInfo update={addCart}/>}/>
          <Route exact path='/payment' component={Payment}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
