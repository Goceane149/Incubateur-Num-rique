import { URL_BACK_AUTHENTICATE } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function authenticate(values) {
  return apiBackEnd.post('https://127.0.0.1:8000/api/login', values);
}
