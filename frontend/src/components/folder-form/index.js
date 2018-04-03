'use strict';

import React from 'react';
import * as util from '../../lib/util';

export default class FolderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.folder ? folder.list : {title: '', description: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.folder) {
      this.setState(props.folder);
    }
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let { onComplete } = this.props;
    let result = onComplete(this.state);
    if (result instanceof Promise ) {
      result
        .then(() => this.setState({
          error: null,
          title: '',
          description: ''
        }))
        .catch(error => {
          util.log('LIST FORM ERROR', error);
          this.setState({ error });
        })
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Name of Folder'
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          name='description'
          type='text'
          placeholder='Enter a Description'
          value={this.state.description}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}