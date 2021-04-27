/* eslint-disable no-console */
import config from './constants';

const BASE_URL = config.url.API_URL;

export const register = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error('Registration failed');
  } catch (err) {
    console.log(err);
  }
};

export const authorize = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
      throw new Error('No token received');
    }
    throw new Error('Authorization failed');
  } catch (err) {
    console.log(err);
  }
};

export const checkToken = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Authorization failed');
  } catch (err) {
    console.log(err);
  }
};
