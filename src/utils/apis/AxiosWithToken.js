import axios from "axios";

const token =  localStorage.getItem("token")
export const axiosToken = axios.create({
    headers: {'Authorization': 'Bearer '+token}
  });