'use strict';

import React from 'react';
import { connect } from 'react-redux';
import FolderForm from '../folder-form'
import * as util from '../../lib/util';
import * as folderActions from '../../actions/folder-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.folderFetch();
  }

  render() {
    return(
      <div className='dashboard'>
        <h2>Document Organizer</h2>
        <FolderForm
          onComplete={this.props.folderCreate}
          buttonText='Create Folder' />
        {this.props.folders.map(folder => 
        <div key={folder._id}>
          <p>{folder.title}</p>
          <p>{folder.description}</p>
          <button onClick={() => this.props.folderDelete(folder)}>x</button>
        </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    folders: state.folders,
  }
}

const mapDispatchToProps = dispatch => ({
  folderCreate: folder => dispatch(folderActions.folderCreateRequest(folder)),
  folderDelete: folder => dispatch(folderActions.folderDeleteRequest(folder)),
  folderFetch: () => dispatch(folderActions.folderFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);