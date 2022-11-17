import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/campaign/",
});

export default api;