import axios from "axios"

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1"
})

instance.interceptors.request.use(function (config) {

  const user = JSON.parse(localStorage.getItem("auth"));

  config.headers["authorization"] = `Bearer ${user.data.token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance;