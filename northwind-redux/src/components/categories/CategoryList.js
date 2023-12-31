import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productsActions from "../../redux/actions/productsActions"
import { ListGroup, ListGroupItem } from 'reactstrap'
import {Badge} from "reactstrap"
import '../root/App.css'; 
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  }

  render() {
    return (
      <div>
        <h3>  <Badge color='warning'>Categoies</Badge></h3>
        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem key={category.id} active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }

        </ListGroup>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
