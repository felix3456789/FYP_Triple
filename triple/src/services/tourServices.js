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
export async function getSearchByTag(tag) {
  const response = await http.get(Backend_Api + "tour/recommanded/" + tag);
  return response.data;
}
export async function inserHistory(id) {
  let data = {
    tourId: id
  };
  console.log(id);
  const response = await http.post(Backend_Api + "recommander/insert", data);
}
export default {
  getTourById,
  getFeatureTour,
  getRecommendTag,
  getSearchByTag,
  inserHistory
};
