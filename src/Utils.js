import { API_BASE_URL, API_VERBOSE } from './config';

function urlBase64Decode (str) {
  if (str === undefined) { return; }
  var output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
  }
  return window.atob(output);
}

export function decodeJWT (token) {
  var user = {};
  if (token !== undefined && token != null) {
    var encoded = token.split('.')[1];
    user = JSON.parse(urlBase64Decode(encoded));
  }
  return user;
}

function completeRequest (route, config) {
  return fetch(API_BASE_URL + route, config)
    .then((response) =>
      response
        .json()
        .then((body) => ({ body, response }))
    )
    .then(({ body, response }) => {
      if (API_VERBOSE) {
        console.log('body', body);
        console.log('response', response);
        console.groupEnd('APIRequest:' + route);
      }
      return body;
    });
}
