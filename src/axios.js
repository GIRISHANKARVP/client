import axios from "axios";
const instance = axios.create({
    baseURL: "https://***.herokuapp.com",
  });
  
  export default instance;