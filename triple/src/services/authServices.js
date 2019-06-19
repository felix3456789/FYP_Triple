import http from "./httpService";
import { Backend_Api } from "../config/config.json";

const apiEndPoint = Backend_Api + "auth";
export async function login(data) {
  let data1 = {
    username: data.userAccount,
    password: data.password
  };
  let response = await http.post(apiEndPoint, data1);
  console.log(response.data);
  return response.data;
}

export async function register(data) {
  let data1 = {
    username: data.newAccount,
    firstNameEng: data.engName,
    lastNameEng: data.engName,
    email: data.email,
    password: data.newPassword
  };
  let response = await http.post(Backend_Api + "user", data1);
  console.log("register", response.data);
  return response.data;
}

export default {
  login,
  register
};
