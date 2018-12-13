import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAddress, addAddress } from './CheckinActions.js';

import './Checkout.scss';

const Checkout = (props) => {
  console.log(props)
  return (
    <div className="checkout">
      <div className="col-md-12 checkout-title">Confirmação de compra</div>
      <div className="form-group">
        <label for="exampleInputPassword1">Nome</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nome"></input>
      </div>
      <div className="form-group">
      <legend>Endereço</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
            Rua dos tres irmaos
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
            Rua vereador jair salvarani
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked />
            <input type="text" onChange={props.changeAddress} class="form-control" placeholder="cadastrar novo endereço" />
            <button type="button" onClick={props.addAddress}> cadastrar </button>
          </label>
        </div>
      </div>
      <div>
        {props.pedido.map((res)=> {
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
              </div>
            </div>
          )
        })} 
      </div>
      <button type="submit" class="btn btn-primary">Confirmar</button>
    </div>
    
  );
};

const mapStateToProps = (state) => ({address: state});
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeAddress, addAddress }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)