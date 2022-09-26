import { execRequest } from "../ExecRequest";

export const IsOpenDone = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: '/api/users/2',
      method: 'PUT',
      data,
    })
  };