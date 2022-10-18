import { execRequest } from "../ExecRequest";

export const sendForm = ( data ) => {
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/users',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      },
      data,
    })
  };