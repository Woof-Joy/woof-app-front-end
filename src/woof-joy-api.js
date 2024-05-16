import axios from "axios";

const woofJoyApi = axios.create({
    baseURL: "/backend",
  });
export default woofJoyApi;
