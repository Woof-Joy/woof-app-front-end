import axios from "axios";

const woofJoyApi = axios.create({
  baseURL: "http://172.17.0.4:3002", // Endereço IP interno do container NGINX
});
export default woofJoyApi;
