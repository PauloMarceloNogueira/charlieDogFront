
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search_clicked } from './SearchActions.js';

import './SearchBar.scss';
const Button = (props) => {
  return (
    <button className="btn btn-default input-lg" type="button" onClick={props.search_clicked}><span className="glyphicon glyphicon-search"></span></button>
  )
}

const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_clicked }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Button)