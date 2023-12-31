import React from "react";
import { Container } from "reactstrap";
import Navi from '../navi/Navi';
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container className="mx-0 mx-auto">
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />

        <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </Container>
  );
}

export default App;
