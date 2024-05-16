import axios from "axios";

const woofJoyApi = axios.create({
  baseURL: "http://localhost:80", 
});
export default woofJoyApi;
