import axios from 'axios';


export const BASE_URL = 'https://6701162fb52042b542d6bb06.mockapi.io/contacts';

export const api = axios.create({
  baseURL: BASE_URL,
});