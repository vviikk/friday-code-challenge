import API from '../config/api';
import http from '../utils/http';

export default (make) => http.get(`${API.MODELS}?make=${make}`);
