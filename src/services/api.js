import axios from "axios";

const api = axios.create({
  baseURL: "https://museuunoesc.herokuapp.com",
});

export default api;
