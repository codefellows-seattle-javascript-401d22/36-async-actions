'use strict';

import React from 'react';
import * as util from '../../lib/util';

export default class InsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.insured ? props.insured : {first_name: '', last_name: '', dateofbirth: '', gender: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.insured){
      this.setState(props.insured);
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});  
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    let result = onComplete(this.state);
    if (result instanceof Promise) {
      result.then(() => this.setState({
        error: null,
        first_name: '',
        last_name: '',
        dateofbirth: '',
        gender: '',
      })).catch(error => {
        util.log('INS FORM ERROR: ', error);
        this.setState({ error });
      })
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='first_name'
          type='text'
          placeholder='First Name'
          value={this.state.first_name}
          onChange={this.handleChange} />
        <input
          name='last_name'
          type='text'
          placeholder='Last Name'
          value={this.state.last_name}
          onChange={this.handleChange} />
        <input
          name='dateofbirth'
          type='date'
          placeholder='Date of Birth'
          value={this.state.dateofbirth}
          onChange={this.handleChange} />
        <input
          name='gender'
          type='radio'
          id='male'
          value='M'
          onChange={this.handleChange} />
        <label htmlFor='male'>M</label>
        <input
          name='gender'
          type='radio'
          id='female'
          value='F'
          onChange={this.handleChange} />
        <label htmlFor='female'>F</label>
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}