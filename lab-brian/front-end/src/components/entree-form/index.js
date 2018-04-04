import React from 'react';
import * as util from '../../lib/util';

class EntreeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.entree ? props.entree : {name: '', price: 0, menuID: '0' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.name) {
      this.setState({ name: nextProps.name });
    }
    if(nextProps.price) {
      this.setState({ price: nextProps.price });
    }
    if(nextProps.menuID) {
      this.setState({ menuID: nextProps.menuID });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let { onComplete } = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise) {
      result 
        .then(() => this.setState({
          error: null,
          name: '',
          price: 0,
          menuID: '0',
        }))
        .catch(error => {
          util.log('ENTREE FORM ERROR: ', error);
          this.setState({ error });
        });
    }
  }

  handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
    this.setState({
      entreenameError: name === 'name' && !value ? 'entree name required' : null,
      entreepriceError: name === 'price' && !value ? 'entree price required' : null,
      menuidError: name === 'menuID' && !value ? 'entree menuID required' : null,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='entree-form'>
        <input 
          type='text'
          name='name'
          placeholder='entree name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='number'
          name='price'
          placeholder='entree price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='menuID'
          placeholder='menu ID'
          value={this.state.menuID}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default EntreeForm;