
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/components/navigation/pages/Homepage/Homepage';
//import Footer from './customer/components/footer/Footer';
import Ending from './customer/components/footer/Ending';
import Products from './customer/components/Product/Products';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import DeliveryAddress from './customer/components/Checkout/DeliveryAddress';
import OrderSummery from './customer/components/Checkout/OrderSummery';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CostomerRouter from './Routers/CostomerRouter';
function App() {
  return (
    
    <div className=''>
      
      <Routes>
        <Route path='/*' element={<CostomerRouter />}></Route>
      </Routes>  
   </div>
    
  );
}

export default App;
