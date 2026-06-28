import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://fal-t-hw-70-default-rtdb.europe-west1.firebasedatabase.app'
});

export default axiosApi;