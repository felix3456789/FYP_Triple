import http from "./httpService";
import API from "../config/config.json";
const Backend_Api = API.Backend_Api + "user";
const Like_Api = API.Backend_Api + "like";
const Bookmark_Api = API.Backend_Api + "bookmark";
const _ = require("lodash");

export async function getUserInfo() {
  console.log(Backend_Api + "/me");
  const response = await http.get(Backend_Api + "/me");
  return response.data;
}

export async function likeCount(tourID) {
  const response = await http.post(Like_Api + "/" + tourID, "");
  console.log("LIKE", tourID);
  console.log("LIKE", response.data);
  return response.data;
}

export async function getLikeCount() {
  const response = await http.get(Like_Api);
  return response.data;
}

export async function bookmark(tourID) {
  const response = await http.post(Bookmark_Api + "/" + tourID, "");
  return response.data;
}

export async function getBookmark() {
  const response = await http.get(Bookmark_Api);
  return response.data;
}

export async function updateUserInfo(data) {
  const response = await http.post(Backend_Api + "/updateInfo", data);
  return response.data;
}

export async function getPurchase() {
  const response = await http.get(API.Backend_Api + "purchase");
  return response.data;
}

export async function getPayment() {
  const response = await http.get;
}

export default {
  getUserInfo,
  likeCount,
  bookmark,
  getLikeCount,
  getBookmark,
  updateUserInfo,
  getPurchase
};
