import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "http://10.0.0.25:8080",
  });
export default woofJoyApi;
