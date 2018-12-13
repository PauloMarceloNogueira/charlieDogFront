import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-responsive-modal';
import { search_clicked } from '../../components/SearchBar/SearchActions.js';
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import Logo from '../../components/Logo/Logo.jsx';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import Checkin from '../Checkin/Checkin.jsx';

import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props, 'HEADR');
    return (
      <div>
        {this.props.value.length > 0 ? 
          <div className="alert alert-success text-center" role="alert">
            Você tem cachorros no carrinho! Finalize sua compra!
          </div>
        :
        null}
        {this.props.value.data && this.props.value.data.length < 1 ? 
          <div className="alert alert-danger text-center" role="alert">
          Nenhum cachorro com essas características!
          </div>
        : <div></div>}
        
        
        <div className="header">
          <div className="container">
            <div className="row">
              <Logo />
              <div className="col-lg-8 col-md-8 col-sm-8">
                <SearchBar />
                
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_clicked }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header)