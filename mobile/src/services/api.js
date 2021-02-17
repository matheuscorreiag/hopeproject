import axios from "axios";

const api = axios.create({
  baseUrl: "http://192.168.0.26:3030",
});

export default api;
