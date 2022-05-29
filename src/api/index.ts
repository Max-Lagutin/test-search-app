import axios from 'axios';

const API = 'https://rickandmortyapi.com/api';
const defaultConfig = {baseURL: API}
export const api = axios.create(defaultConfig);
