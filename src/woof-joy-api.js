import axios from "axios";

const woofJoyApi = axios.create({
  baseURL: "http://localhost", 
});
export default woofJoyApi;
