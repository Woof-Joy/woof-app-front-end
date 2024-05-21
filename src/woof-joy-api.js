import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "http://3.80.197.194/api",
  });
export default woofJoyApi;
