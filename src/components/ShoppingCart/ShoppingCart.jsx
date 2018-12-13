import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-responsive-modal';

import { search_clicked } from '../SearchBar/SearchActions.js';
import Checkin from '../../containers/Checkin/Checkin.jsx';
import './ShoppingCart.scss';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  
  onOpenModal() {
    this.setState({ open: true });
  };
 
  onCloseModal(){
    this.setState({ open: false });
  };

  render() {
    const emptyCart = <p>carrinho vazio!</p>
    const fullCart = <Checkin />
    return (
      <div>
          <div className="shopping-cart" onClick={this.onOpenModal}>
            <button className="btn btn-default input-lg">
              <span className="qnt">{this.props.value.length} </span>
              <span className="glyphicon glyphicon-shopping-cart"></span>
            </button>
            {this.state.open === true ? 
              <div className="arrow_box">
              { this.props.value.length > 0 ? fullCart : emptyCart }
            </div>  
            : null}
            
        </div>  
        {this.state.open === true ? 
          <div>
            <div className="overlay" onClick={this.onCloseModal}></div>
          </div> : null}
      </div>
      
    )
  }
};

const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_clicked }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)