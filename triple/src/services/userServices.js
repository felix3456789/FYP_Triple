import http from "./authServices";
import API from "../config/config.json";
const Backend_Api = API.Backend_Api + "user";
const _ = require("lodash");

export async function getUserInfo() {
  console.log(Backend_Api + "/me");
  const response = await http.get(Backend_Api + "/me");
  return response.data;
}

export default {
  getUserInfo
};
