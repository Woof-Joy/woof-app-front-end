import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "https://woofjoy.sytes.net/api",
  });
export default woofJoyApi;
