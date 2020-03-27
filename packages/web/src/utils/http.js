/* globals fetch  */
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export default {
  get: async (url) => (await fetch(url, requestOptions)).json(),
};
