import { execRequest } from "../ExecRequest";
const token = localStorage.getItem("token")
export const IsOpenDone = (data) => {
  return execRequest({
    baseURL: "https://reqres.in/",
    url: "/api/users/2",
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}` 
    },
    data,
  });
};

export const EnrollToCourse = (data) => {
  return execRequest({
    baseURL: "https://reqres.in/",
    url: `/api/users/${data.course_id}`,
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${token}` 
    },
    data,
  });
};
