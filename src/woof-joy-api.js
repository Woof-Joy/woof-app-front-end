import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "http://localhost:8080",
  });
export default woofJoyApi;