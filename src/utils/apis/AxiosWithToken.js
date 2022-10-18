import axios from "axios";

export const axiosToken = axios.create({
    headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}
  });