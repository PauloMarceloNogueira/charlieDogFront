import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filteredByValue } from '../SearchBar/SearchActions.js';
import './List.scss';

const Filters = (props) => (
  <div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <ul className="list-group lista-links">
        {props.data.map((result, key) => <li key={key} className="list-group-item"><a href={result.href} title={result.title} data-valueMin={result.min} data-valueMax={result.max} onClick={props.filteredByValue}>{result.title}</a></li>)}
      </ul>   
    </div>
  </div>
  
);


const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ filteredByValue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filters)