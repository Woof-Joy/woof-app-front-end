import axios from "axios";

const woofJoyApi = axios.create({
    baseURL:"http://10.0.0.23:8080"

    //baseURL: "http://localhost:8080",
  });
export default woofJoyApi;
