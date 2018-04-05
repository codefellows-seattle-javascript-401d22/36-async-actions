'use strict';

import superagent from 'superagent';

export const polSet = policies => ({
  type: 'POL_SET',
  payload: policies,
})

export const polCreate = policy => ({
  type: 'POL_CREATE',
  payload: policy,
})

export const polUpdate = policy => ({
  type: 'POL_UPDATE',
  payload: policy,
})

export const polDelete = policy => ({
  type: 'POL_DELETE',
  payload: policy,
})

export const polFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/lifepolicy`)
    .then(res => {
      dispatch(polSet(res.body));
      return res;
    })
}

export const polCreateRequest = policy => dispatch => {
  return superagent.post(`${__API_URL__}/api/insured/${policy.primary_insuredId}/lifepolicy`)
    .send(policy)
    .then(res => {
      dispatch(polCreate(res.body));
      return res;
    })
}

export const polDeleteRequest = policy => dispatch => {
  return superagent.delete(`${__API_URL__}/api/${policy.primary_insuredId}/lifepolicy/${policy._id}`)
    .then(res => {
      dispatch(polDelete(policy));
      return res;
    })
}