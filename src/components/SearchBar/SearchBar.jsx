import React from 'react';
import { connect } from 'react-redux';
import { search_changed } from './SearchActions.js';
import { bindActionCreators } from 'redux';

import Button from './Button.jsx';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="input-group buscar">
        <input type="text" className="form-control input-lg" placeholder="Buscar por..." onChange={this.props.search_changed} />
        <span className="input-group-btn">
          <Button />
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({value: state.result});
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_changed }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);