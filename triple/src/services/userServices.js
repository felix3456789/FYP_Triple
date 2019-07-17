import http from "./httpService";
import API from "../config/config.json";
const Backend_Api = API.Backend_Api + "user";
const Like_Api = API.Backend_Api + "like";
const Bookmark_Api = API.Backend_Api + "bookmark";
const _ = require("lodash");

export async function getUserInfo() {
  // console.log(Backend_Api + "/me");
  const response = await http.get(Backend_Api + "/me");
  return response.data;
}

export async function likeCount(tourID) {
  const response = await http.post(Like_Api + "/" + tourID, "");
  // console.log("LIKE", tourID);
  // console.log("LIKE", response.data);
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
export async function addPayment(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/addPayment", data);
  // console.log(response.data);
}
export async function addFriend(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/addFriend", data);
  // console.log(response.data);
}
export async function addEmerContact(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/addEmerContact", data);
  // console.log(response.data);
}
export async function delPayment(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/delPayment/" + data);
  // console.log(response.data);
}
export async function delFriend(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/delFriend/" + data);
  // console.log(response.data);
}
export async function delEmerContact(data) {
  // console.log(data);
  const response = await http.post(Backend_Api + "/delEmerContact/" + data);
  // console.log(response.data);
}

export default {
  getUserInfo,
  likeCount,
  bookmark,
  getLikeCount,
  getBookmark,
  updateUserInfo,
  getPurchase,
  addFriend,
  addEmerContact,
  addPayment,
  delFriend,
  delEmerContact,
  delPayment
};
