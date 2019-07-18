import http from "./httpService";
import { Backend_Api } from "../config/config.json";

const apiEndPoint = Backend_Api + "auth";
const tokenKey = "token";

export async function login(data) {
  let data1 = {
    username: data.userAccount,
    password: data.password
  };
  let response = await http.post(apiEndPoint, data1);
  console.log("login", response.data);
  localStorage.setItem(tokenKey, response.data);
  localStorage.setItem("username", data1.username);
  return response.data;
}

export function logout() {
  localStorage.removeItem(tokenKey);
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

export function getJwt() {
  console.log(localStorage.getItem(tokenKey));
  if (localStorage.getItem(tokenKey)) {
    return localStorage.getItem(tokenKey);
  }
  return null;
}
export function getUsername() {
  console.log(localStorage.getItem("username"));
  if (localStorage.getItem("username")) {
    return localStorage.getItem("username");
  }
  return null;
}

export default {
  login,
  register,
  getJwt,
  logout,
  getUsername
};
