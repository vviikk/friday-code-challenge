import API from '../config/api';
import http from '../utils/http';

export default (make, model) => http.get(`${API.VEHICLES}?make=${make}&model=${model}`);
