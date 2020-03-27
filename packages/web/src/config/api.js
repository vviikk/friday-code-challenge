const SERVER = 'http://localhost:8080';

const _ = (endpoint) => `${SERVER}${endpoint[0]}`;

export default {
  MAKES: _`/api/makes`,
  MODELS: _`/api/models`,
  VEHICLES: _`/api/vehicles`,
};
