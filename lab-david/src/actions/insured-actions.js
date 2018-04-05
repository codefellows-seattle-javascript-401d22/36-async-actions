'use strict';

import superagent from 'superagent';

export const insSet = (insureds) => ({
  type: 'INS_SET',
  payload: insureds
})

export const insCreate = insured => ({
  type: 'INS_CREATE',
  payload: insured,
})

export const insUpdate = insured => ({
  type: 'INS_UPDATE',
  payload: insured,
})

export const insDelete = insured => ({
  type: 'INS_DELETE',
  payload: insured,
})

export const insFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/insured`)
    .then(res => {
      dispatch(insSet(res.body));
      return res;
    })
}

export const insCreateRequest = insured => dispatch => {
  return superagent.post(`${__API_URL__}/api/insured`)
    .send(insured)
    .then(res => {
      dispatch(insCreate(res.body));
      return res;
    })
}

export const insDeleteRequest = insured => dispatch => {
  return superagent.delete(`${__API_URL__}/api/insured/${insured._id}`)
    .then(res => {
      dispatch(insDelete(insured));
      return res;
    })
}