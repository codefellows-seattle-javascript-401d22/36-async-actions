'use strict';

import React from 'react';
import * as util from '../../lib/util';

export default class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? props.list : {title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.list) {
      this.setState(nextProps.list);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let { onComplete } = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise) {
      result.then(() => this.setState({
        error: null,
        title: '',
      }))
      .catch(error => {
        util.log('LIST FORM ERROR:', error);
        this.setState({ error });
      })
    }
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input  
          name='title'
          type='text'
          placeholder='Enter a title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>

      </form>
    )
  }
}