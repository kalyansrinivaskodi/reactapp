import { useState } from "react";
import React from 'react';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export function CartItems() {
  const [cartitems, setCartitems] = useState(0);
  return (
    <div className="CartItems">
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <div className="dropdown">
          <button className="dropbtn">Shop<ArrowDropDownIcon />
          </button>
          <div className="dropdown-content">
            <a href="#">All Products</a>
            <Divider />
            <a href="#">Popular Items</a>
            <a href="#">New Arrivals</a>
          </div>
        </div>
        <button className="cartitems"> <ShoppingCartIcon /> Cart Items <span className="cartno"> {cartitems}  </span></button>
      </div>
      <header><h1>Shop in style</h1><h4>With this shop hompeage template</h4></header>
      <div className="items">
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Fancy Product</h3>
          <price>$120.00 - $280.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">

          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Special Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">

          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>

          <h3>Sale Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Popular Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Sale Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Fancy Product</h3>
          <price>$120.00 - $280.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Popular Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>
        <div className="item">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h3>Special Item</h3>
          <price>$40.00</price>
          <button onClick={() => { setCartitems(cartitems + 1); }} className="addtocart">Add To Cart</button>

        </div>

      </div>
      <footer><p>Copyright © Your Website 2021</p></footer>




    </div>
  );

}
