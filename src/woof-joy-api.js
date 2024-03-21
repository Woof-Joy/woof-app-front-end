import axios from "axios";

const woofJoyApi = axios.create({
    baseURL:"http://50.17.103.74:8080"

    //baseURL: "http://localhost:8080",
  });
export default woofJoyApi;
