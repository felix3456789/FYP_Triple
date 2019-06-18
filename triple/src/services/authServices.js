import http from "./httpService";
import BackendAPI from "../config/config.json";

const apiEndPoint = BackendAPI + "/auth";
export async function login() {
  let data = {
    params: {
      username: "allenleung",
      password: "allenleung"
    }
  };
  let response = await http.post(apiEndPoint, data);
  console.log(response.data);
}

export default {
  login
};
