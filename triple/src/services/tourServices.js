import http from "./httpService";
import API from "../config/config.json";
const Backend_Api = API.Backend_Api;

export async function getTourById(id) {
  const response = await http.get(Backend_Api + "tour/" + id);
  return response.data;
}

export async function getFeatureTour(data) {
  const response = await http.get(Backend_Api + "tour/feature/tour");
  return response.data;
}

export async function getRecommendTag() {
  const response = await http.get(Backend_Api + "user/recommendTag");
  console.log(response.data);
  return response.data;
}

export default {
  getTourById,
  getFeatureTour,
  getRecommendTag
};
