import React from 'react';
import 'babel-polyfill';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search_success } from '../../components/SearchBar/SearchActions.js';
import DogsBox from '../../components/DogsBox/index.jsx';

import './Products.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      response: '',
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res}))
      .catch(err => console.log(err));
    
  }

  async callApi () {
    const response = await fetch('http://localhost:3003/dogs');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let data = null;  
    if (this.props.data && this.props.data.length > 0) {
      data = this.props.data.map(result => {
        return <DogsBox 
          name={result.name}
          value={result.value}
          id={result.id}
          picture={result.picture}
        />
      })
    } else {
      data = this.state.response ? this.state.response.map(result => {
        return (
        <div key={result.id}>
          <DogsBox 
            name={result.name}
            value={result.value}
            id={result.id}
            picture={result.picture}
          />
        </div>
        )
      }) 
      : null;
    }

    return (
      <div className="content">
        <div className="container">
          <div className="row">
            {data}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.input.data
});
// const mapStateToProps = (state) => {console.log(state);}
const mapDispatchToProps = (dispatch) => bindActionCreators({ search_success }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Products);