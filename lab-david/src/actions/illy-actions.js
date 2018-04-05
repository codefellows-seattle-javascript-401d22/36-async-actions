'use strict';

import superagent from 'superagent';

export const illyCreate = illy => ({
  type: 'ILL_CREATE',
  payload: illy
})

export const illyCreateRequest = illy => dispatch => {
  return superagent.post(`${__API_URL__}/lifepolicy/${illy.lifepolicyId}/illustration`)
    .then(res => {
      dispatch(illyCreate(illy));
      return res;
    })
}