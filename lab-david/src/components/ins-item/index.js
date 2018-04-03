'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {insUpdate, insDelete} from '../../actions/insured-actions';
import InsForm from '../ins-form';

class InsItem extends React.Component{
  render(){
    let {insured, insUpdate, insDelete} = this.props;
    return(
      <section className='ins-item'>
        <div>
          <div className='content'>
            <h2>{insured.first_name} {insured.last_name}</h2>
            <h3>DoB: {insured.dateofbirth}</h3>
            <h3>Gender: {insured.gender}</h3>
            <button onClick={() => insDelete(insured)}>X</button>
          </div>
          <div className='edit'>
            <InsForm
              buttonText='Update Insured'
              insured={insured}
              onComplete={insUpdate} />
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  insUpdate: ins => dispatch(insUpdate(ins)),
  insDelete: ins => dispatch(insDelete(ins))
});

export default connect(null, mapDispatchToProps)(InsItem);