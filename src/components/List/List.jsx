import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filtered } from '../SearchBar/SearchActions.js';
import './List.scss';

const Filters = (props) => (
  <div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <ul className="list-group lista-links">
        {props.data.map((result, key) => <li key={key} className="list-group-item"><a href={result.href} title={result.title} data-size={result.size} onClick={props.filtered}>{result.title}</a></li>)}
      </ul>   
    </div>
  </div>
  
);

const mapStateToProps = (state) => ({value: state.input});
const mapDispatchToProps = (dispatch) => bindActionCreators({ filtered }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filters)