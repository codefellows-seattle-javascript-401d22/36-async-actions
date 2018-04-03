'use strict';

import superagent from 'superagent';

export const folderSet = (folder) => ({
  type: 'FOLDER_SET',
  payload: folder,
})

export const folderCreate = (folder) => ({
  type: 'FOLDER_CREATE',
  payload: folder,
})

export const folderUpdate = (folder) => ({
  type: 'FOLDER_UPDATE',
  payload: folder,
})

export const folderDelete = (folder) => ({
  type: 'FOLDER_DELETE',
  payload: folder,
})

export const folderFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/folder`)
    .then(res => {
      dispatch(folderSet(res.body));
      return res;
    })
}

export const folderCreateRequest = folder => dispatch => {
  return superagent.post(`${__API_URL__}/api/folder`)
    .send(folder)
    .then(res=> {
      dispatch(folderCreate(res.body));
      return res;
    })
}

export const folderDeleteRequest = folder => dispatch => {
  return superagent.delete(`${__API_URL__}/api/folder/${folder._id}`)
    .then(res => {
      dispatch(folderDelete(folder));
      return res;
    })
}