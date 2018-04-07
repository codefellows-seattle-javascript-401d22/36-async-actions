'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListForm from '../list-form';
import * as listActions from './../../actions/list-actions';
import * as util from './../../lib/util';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.listFetch();
  }

  render() {
    return (
      <section className='dashboard'>
        <h2>Recipe Lists</h2>
        <ListForm
          onComplete={this.props.listCreate}
          buttonText='create list'
          placeholderText='create a list'
        />

        {this.props.lists.length > 0 ?
          this.props.lists.map(list =>
            <div className='list' key={list._id}>
              <p>{list.name}</p>
              <ListForm 
                onComplete={this.props.listUpdate}
                list={list}
                buttonText='update list'
                placeholderText={list.name}
              />
              
              <button onClick={() => this.props.listDelete(list)}>X</button>
            </div>)
          : undefined}

      </section>
    );
  }
}

const mapPropsToState = state => {
  return { lists: state.lists };
};

const mapDispatchToProps = dispatch => ({
  listCreate: list => dispatch(listActions.listCreateRequest(list)),
  listUpdate: list => dispatch(listActions.listUpdateRequest(list)),
  listDelete: list => dispatch(listActions.listDeleteRequest(list)),
  listFetch: () => dispatch(listActions.listFetchRequest()),
});

export default connect(mapPropsToState, mapDispatchToProps)(Dashboard);