import { execRequest } from "./ExecRequest";

export const signin = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/login',
      method: 'POST',
      data,
    })
  };