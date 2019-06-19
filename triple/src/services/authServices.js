import http from "./httpService";
import { Backend_Api } from "../config/config.json";

const apiEndPoint = Backend_Api + "/auth";
export async function login(data) {
  let data1 = {
    username: data.userAccount,
    password: data.password
  };
  let response = await http.post(apiEndPoint, data1);
  console.log(response.data);
  return response.data;
}

export default {
  login
};
