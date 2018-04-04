import React from 'react';
import { connect } from 'react-redux';
import * as menuActions from '../../actions/menu-actions';

class MenuItem extends React.Component {
  render() {
    let { menu } = this.props;
    return (
      <div>
        <p> ID: {menu._id}<br/>Name: {menu.name}<br/>Created At: {menu.timestamp}<br/>Entrees: {menu.entrees} </p>
        <button onClick={() => this.props.menuDelete(menu)}>X</button>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  menuDelete: (menu) => dispatch(menuActions.menuDeleteRequest(menu)),
});



export default connect(null, mapDispatchToProps)(MenuItem);