'use strict';

import React, { Component } from 'react';
import * as util from '../../lib/util';

export default class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.list ? props.list : { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list) this.setState(nextProps.list);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let result = this.props.onComplete(this.state);

    if (result instanceof Promise) {
      result
        .then(() => this.setState({ 
          error: null, 
          name: '',
        }))
        .catch(error => {
          util.logError('LIST FORM ERROR:', error);
          this.setState({ error });
        });
    }
  }

  render() {
    return (
      <form className='list-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder={this.props.placeholderText}
          value={this.state.name}
          onChange={this.handleChange}
        />
        
        <button className='submit' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}