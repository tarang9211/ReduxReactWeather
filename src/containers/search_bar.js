import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.handleFormSubmit}>
        <input
          placeholder='Search for your city!'
          className='form-control'
          value={this.state.term}
          onChange={this.handleInputChange}
        />

        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    //call fetch weather to get data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
