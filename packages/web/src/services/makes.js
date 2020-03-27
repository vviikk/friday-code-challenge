import API from '../config/api';
import http from '../utils/http';

export default () => http.get(API.MAKES);
