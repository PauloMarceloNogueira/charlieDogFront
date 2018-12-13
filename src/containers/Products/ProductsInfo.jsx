import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add_to_cart } from './ProductsActions.js';
import Loading from '../../components/Loading/Loading.jsx';

class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      response: '',
      loading: true,
    }
  }
  componentDidMount() {
    this.callApi(this.props.dogId)
      .then(res => this.setState({response: res[0]}))
      .then(res => this.setState({loading: false}))
      .catch(err => console.log(err));
    
  }
  
  async callApi (id) {
    const response = await fetch(`http://localhost:3003/dogs/${id}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const {picture, name, value, age} = this.state.response;
    return (
      <div>
        {this.state.loading ? <Loading /> : 
          <div className="box-cachorro">
            <img src={picture ? `src/public/img/${picture}` : 'src/public/img/pug.jpg'} alt="Pug Branco" />
            <div className="btn-foto" data-dogid={this.props.dogId} onClick={this.props.add_to_cart}>Adicionar ao carrinho!</div>
            <div>
              <span className="titulo-cachorro">{name}</span>
              <span className="detalhes-cachorro"><strong>R$ {value}</strong><br/>{age}</span>
            </div>
          </div>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.input.data
});
// const mapStateToProps = (state) => {console.log(state);}
const mapDispatchToProps = (dispatch) => bindActionCreators({ add_to_cart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);