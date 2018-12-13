import React from 'react';
import 'babel-polyfill';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-responsive-modal';
import { search_clicked } from '../../components/SearchBar/SearchActions.js';
import './Checkin.scss';

class Checkin extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  
  onOpenModal() {
    // console.log('abriu opoen', this);
    this.setState({ open: true });
  };
 
  onCloseModal(){
    this.setState({ open: false });
  };
  render() {
    let cart_value = 0.0
    return (
      <div key={this.props.id}>
        <div className="container cart">
          <div className="row">
            <div className="cart-title col-md-12"> meu carrinho </div>
            <div className="col-md-12 cart">
              {this.props.value.map((res)=> {
                cart_value = Number(res.data.value) + cart_value
                return (
                  <div className="row" key={res.data.id}>
                    <div className="cart-product col-md-12">
                      <div className="cart-product-pic col-md-2">
                        <img className="checkin_dog_picture" src={`src/public/img/${res.data.picture}`} />
                      </div>
                      <div className="cart-product-info col-md-8">
                        <div className="cart-product-info--name col-md-12"> {res.data.name}</div>
                        <div className="cart-product-info--value col-md-12"> R$ {res.data.value} </div>
                      </div>
                      <div className="cart-product-remove col-md-2"> x </div>
                    </div>
                  </div>
                )
              })}  
            </div>
            <div className="col-md-6">
              
            </div>
          </div>
                
          </div>
          <div className="cart-footer">
              <div className="row">
                <div className="col-md-6">
                  <div className="cart-footer-total">
                    total: <span className="cart-footer-total--currency">R$ {cart_value}</span>
                  </div>  
                </div>
                <div className="col-md-6 cart-footer-checkout-button" onClick={this.onOpenModal}>
                  Finalizar
                </div>
              </div>
              <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <p>teste</p>
              </Modal>
              
          </div>
        </div>      
    )   
  }  
};

const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_clicked }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Checkin)