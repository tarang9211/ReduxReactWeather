import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <form className='input-group'>
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
}
