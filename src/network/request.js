import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://DESKTOP-209P5B0:8001",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 800,
  });

  //(2.2).响应拦截;
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
