import { Routes, Route } from "react-router-dom";
import Users from '../Pages/Users/User';
import Products from '../Pages/Product/Products';
import Sales from '../Pages/Sale/Sales';
import Apointments from '../Pages/Apointment/Apointments';
import ProductStockMovements from '../Pages/ProductStockMovement/ProductStockMovements';
import Home from '../Pages/Home';
import Customers from '../Pages/Customer/Customers';

const PrivateRoutes = ({children}) => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/atendimentos" element={<Apointments />} />
          <Route path="/estoque" element={<ProductStockMovements />} />
      </Routes>
  );
}

export default PrivateRoutes