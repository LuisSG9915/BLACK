import axios from "axios";

export const jezaApi = axios.create({
  // baseURL: "https://cbinfo.no-ip.info:9071",
  baseURL: "http://cbinfo.no-ip.info:9071",
  headers: {
    'Content-Type': 'application/json'
  }
});
 
