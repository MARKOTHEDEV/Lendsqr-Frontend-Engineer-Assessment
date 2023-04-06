import axios from 'axios'




export const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/'
const api =axios.create({
  baseURL: url,
});

export default api
