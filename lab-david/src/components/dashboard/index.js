'use strict';

import React from 'react';
import {connect} from 'react-redux';
import InsForm from '../ins-form';
import InsItem from '../ins-item';
import * as util from '../../lib/util';
import * as insActions from '../../actions/insured-actions';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.insFetch();
  }

  render(){
    return(
      <div className='dashboard'>
        <h2>Insurance App</h2>
        <InsForm
          onComplete={this.props.insCreate}
          buttonText='Create Insured' />
        {this.props.insureds.map(ins => 
          <InsItem
            key={ins._id}
            insured={ins} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    insureds: state.insured
  }
}

const mapDispatchToProps = dispatch => ({
  insCreate: ins => dispatch(insActions.insCreateRequest(ins)),
  insFetch: () => dispatch(insActions.insFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);