import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar as ReactstrapNavbar, // Reactstrap Navbar bileşenini "ReactstrapNavbar" olarak alın
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import '../root/App.css'; 

function Navi({ collapseOnSelect, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ReactstrapNavbar expand="lg" {...restProps}>
      <NavbarBrand>
  <Link to="/" style={{ textDecoration: 'none'}} className='text-black underl'>
    Northwind-redux Store
  </Link>
</NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">Add Product</Link>
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
}

export default Navi;
