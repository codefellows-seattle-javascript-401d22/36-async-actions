'use strict';

import superagent from 'superagent';

export const listFetch = lists => ({
  type: 'LIST_FETCH',
  payload: lists,
});

export const listCreate = list => ({
  type: 'LIST_CREATE',
  payload: list,
});

export const listUpdate = list => ({
  type: 'LIST_UPDATE',
  payload: list,
});

export const listDelete = list => ({
  type: 'LIST_DELETE',
  payload: list,
});

export const listFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/lists`)
    .then(res => {
      dispatch(listFetch(res.body));
      return res;
    });
};

export const listCreateRequest = list => dispatch => {
  return superagent.post(`${__API_URL__}/api/lists`)
    .then(res => {
      dispatch(listCreate(res.body));
      return res;
    });
};

export const listDeleteRequest = list => dispatch => {
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
    .then(res => {
      dispatch(listDelete(list));
      return res;
    });
};