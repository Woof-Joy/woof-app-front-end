import axios from "axios";

const woofJoyApi = axios.create({
    baseURL:"http://ip-10-0-0-23.ec2.internal:8080"

    //baseURL: "http://localhost:8080",
  });
export default woofJoyApi;
