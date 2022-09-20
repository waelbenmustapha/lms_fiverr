import { execRequest } from "./ExecRequest";

export const signin = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/login',
      method: 'POST',
      data,
    })
  };

  export const forgetPass = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/register',
      method: 'POST',
      data,
    })
  };

  export const setNewPass = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/register',
      method: 'POST',
      data,
    })
  };


