import fetch from 'node-fetch';
import { join } from 'path';

export const get = (item = '') => {
  const url = `http://10.0.4.1:8181/${item}`;
  return fetch(url);
}

const set = item => {
  const url = 'http://10.0.4.1:8181'
  return fetch(url, {
    method: 'POST',
    body: value
  });
};
