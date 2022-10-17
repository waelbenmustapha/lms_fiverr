import { execRequest } from "../ExecRequest";

export const sendForm = ( data ) => {
  const token = localStorage.getItem("token")
    return execRequest({
      baseURL: "https://reqres.in/",
      url: 'api/users',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}` 
      },
      data,
    })
  };