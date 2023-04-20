import axios from "axios";
export const jezaApi = axios.create({
  baseURL: "http://cbinfo.no-ip.info:9071",
  headers: {
    "Access-Control-Allow-Origin": "http://cbinfo.no-ip.info:9071",
    "Content-Type": "application/json",
  },
});
