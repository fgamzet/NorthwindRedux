import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
import alertify from 'alertifyjs/build/alertify';
import '../root/App.css'; 
class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!")
      }
    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Cart is empty</NavLink>
            </NavItem>
        );
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav >
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu end style={{ width: 'max-content' }} >
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id} >
                                <Badge className='me-2' color='danger' onClick={()=>this.removeFromCart(cartItem.product)} >x</Badge>
                                {cartItem.product.productName}
                            <Badge className='float-end ms-2' color='success'>{cartItem.quantity}</Badge></DropdownItem>
                        ))
                    }


                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Go to Cart</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }

            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);