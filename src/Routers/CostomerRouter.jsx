import React from "react";
import {Routes, Route  } from "react-router-dom";
import Homepage from "../customer/components/navigation/pages/Homepage/Homepage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Ending from "../customer/components/footer/Ending";
import Product from "../customer/components/Product/Products";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetail from "../customer/components/Order/OrderDetail";

const CostomerRouter = () => {
  return (
    <div>
      <div>
        {" "}
        <Navigation />
      </div>
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
      
        
       
         
       {/*<Order />
         <OrderDetail />*/}
      </Routes>
        
      
      <div>
        <Ending />
        
      </div>
    </div>
  );
};

export default CostomerRouter;
