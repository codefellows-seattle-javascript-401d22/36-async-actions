import React from 'react';
import { connect } from 'react-redux';
import MenuForm from '../menu-form';
import EntreeForm from '../entree-form';
import * as util from '../../lib/util';
import * as menuActions from '../../actions/menu-actions';
import * as entreeActions from '../../actions/entree-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.menusFetch();
    this.props.entreesFetch();
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='menuDiv'>
          <h2> Menu Form </h2>
          <MenuForm onComplete={this.props.menuCreate} buttonText='Create a Menu' />
          {this.props.menus.map(menu =>
            <div key={menu._id}>
              <p> ID: {menu._id}<br/>Name: {menu.name}<br/>Created At: {menu.timestamp}<br/>Entrees: {menu.entrees} </p>
              <button onClick={() => this.props.menuDelete(menu)}>X</button>
            </div>
          )}
        </div>
        <div className='entreeDiv'>
          <h2> Entree Form </h2>
          <EntreeForm onComplete={this.props.entreeCreate} buttonText='Create an Entree' />
          {this.props.entrees.map(entree =>
            <div key={entree._id}>
              <p> ID: {entree._id}<br/>Name: {entree.name}<br/>Price: ${entree.price}<br/>Menu ID: {entree.menuID} </p>
              <button onClick={() => this.props.entreeDelete(entree)}>X</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    entrees: state.entrees,
  };
};

const mapDispatchToProps = (dispatch) => ({
  menusFetch: () => dispatch(menuActions.menusFetchRequest()),
  menuFetch: (menu) => dispatch(menuActions.menuFetchRequest(menu)),
  menuCreate: (menu) => dispatch(menuActions.menuCreateRequest(menu)),
  menuUpdate: (menu) => dispatch(menuActions.menuUpdateRequest(menu)),
  menuDelete: (menu) => dispatch(menuActions.menuDeleteRequest(menu)),
  entreesFetch: () => dispatch(entreeActions.entreesFetchRequest()),
  entreesByMenuFetch: (entree) => dispatch(entreeActions.entreesByMenuFetchRequest(entree)),
  entreeFetch: (entree) => dispatch(entreeActions.entreeFetchRequest(entree)),
  entreeCreate: (entree) => dispatch(entreeActions.entreeCreateRequest(entree)),
  entreeUpdate: (entree) => dispatch(entreeActions.entreeUpdateRequest(entree)),
  entreeDelete: (entree) => dispatch(entreeActions.entreeDeleteRequest(entree)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);