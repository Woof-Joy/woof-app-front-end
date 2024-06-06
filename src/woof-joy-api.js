import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "http://100.28.61.16/api",
  });
export default woofJoyApi;
