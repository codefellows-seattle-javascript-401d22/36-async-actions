import React from 'react';
import * as util from '../../lib/util';

class MenuForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.menu ? props.menu : {name: '', entrees: [], timestamp: null };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.name) {
      this.setState({ name: nextProps.name });
    }
    if(nextProps.entrees) {
      this.setState({...nextProps.entrees});
    }
    if(nextProps.timestamp) {
      this.setState({ timestamp: nextProps.timestamp });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.timestamp) {
      this.setState({ timestamp: new Date() });
    }
    let { onComplete } = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise) {
      result
        .then(() => this.setState({
          error: null,
          name: '',
          entrees: [],
          timestamp: null,
        }))
        .catch(error => {
          util.log('MENU FORM ERROR: ', error);
          this.setState({ error });
        });
    }
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      menunameError: name === 'name' && !value ? 'menu name required' : null,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='menu-form'>
        <input 
          type='text'
          name='name'
          placeholder='menu name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default MenuForm;