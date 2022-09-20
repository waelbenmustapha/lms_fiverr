import { execRequest } from "../ExecRequest";

export const sendForm = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/login',
      method: 'POST',
      data,
    })
  };