import { execRequest } from "../ExecRequest";

export const IsOpenDone = (data) => {
  return execRequest({
    baseURL: "https://reqres.in/",
    url: "/api/users/2",
    method: "PUT",
    data,
  });
};

export const EnrollToCourse = (data) => {
  return execRequest({
    baseURL: "https://reqres.in/",
    url: `/api/users/${data.id}`,
    method: "PUT",
    data,
  });
};
