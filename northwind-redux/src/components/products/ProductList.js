import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { Badge, Button } from 'reactstrap';
import * as productsActions from "../../redux/actions/productsActions"
import * as cartActions from "../../redux/actions/cartActions"
import { Table } from "reactstrap";
import alertify from 'alertifyjs/build/alertify';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " added to your cart!");
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color='warning'>Products</Badge>
          <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Product Name
              </th>
              <th>
                Unit Price
              </th>
              <th>
                Quantity Per Unit
              </th>
              <th>
                Units In Stock
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row"> {product.id} </th>
                <td> <Link to={"/saveProduct/"+product.id}>{product.productName}</Link>  </td>
                <td> {product.UnitPrice}  </td>
                <td> {product.quantityPerUnit} </td>
                <td> {product.unitsInStock}  </td>
                <td> <Button color='success' onClick={() => this.addToCart(product)} >Add to cart</Button> </td>
              </tr>
            ))}


          </tbody>
        </Table>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)