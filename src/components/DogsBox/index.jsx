import React from 'react';
import Modal from 'react-responsive-modal';

import ProductsInfo from '../../containers/Products/ProductsInfo.jsx';
import './DogsBox.scss';

class DogsBox extends React.Component {
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
    return (
      <div key={this.props.id}>
          <a className="" onClick={this.onOpenModal} href="#">
            <div className="col-md-3" >
              <div className="box-cachorro">
                  <img src={this.props.picture ? `https://s3.amazonaws.com/charliedog/Dogs/${this.props.picture}` : 'https://s3.amazonaws.com/charliedog/Dogs/pug.jpg'} alt="Pug Branco" />
                  <div className="btn-foto">Leva eu!</div>
                  <div>
                    <span className="titulo-cachorro">{this.props.name}</span>
                    <span className="detalhes-cachorro"><strong>R$ {this.props.value}</strong><br/>{this.props.age}</span>
                  </div>
              </div>
            </div>
          </a>
          <Modal open={this.state.open} onClose={this.onCloseModal} center>
            <ProductsInfo dogId={this.props.id} />
          </Modal>
        </div>
    )
  }
};

export default DogsBox;