import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "http://54.152.144.82:8080",
  });
export default woofJoyApi;
