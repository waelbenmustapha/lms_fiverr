import { execRequest } from "../ExecRequest";
export const IsOpenDone = (data) => {
  return execRequest({
    baseURL: ": http://0.0.0.0:8000",
    url: "/lms/api/v2/lesson_progress/",
    method: "POST",
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
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
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    },
    data,
  });
};
