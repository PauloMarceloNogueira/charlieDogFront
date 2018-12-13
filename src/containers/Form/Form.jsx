import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form_name, Form_address } from './FormActions.js';
class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handlerSubmit}>
        <input type="text" placeholder="Nome" onChange={this.props.Form_name}></input>
        <input type="text" placeholder="Endereço" onChange={this.props.Form_address}></input>
        <button type="button" onClick={this.props.save_form}>Comprar</button>
      </form>
    )
  }
} 
const mapStateToProps = (state) => ({value: state.result});
const mapDispatchToProps = (dispatch) => bindActionCreators({ Form_name, Form_address }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);