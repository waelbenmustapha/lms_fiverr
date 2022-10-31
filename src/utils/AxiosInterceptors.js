import { axiosToken } from "./apis/AxiosWithToken";

export const axiosExpiredTokenLogout = (logout) => {
  axiosToken.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
        console.log(error.response)
      if (error.response.status === 401 && error.message == "Network Error") {
        logout();
      }
      return Promise.reject(error);
    }
  );
};
export const axiosInjectToken = (user) => {
  axiosToken.interceptors.request.use(
    (config) => {
      if (user) {
        config.headers.Authorization = `Bearer ${user}`;
      }
      return config;
    },
    (error) => {
      // console.log("request error", error);
      return Promise.reject(error);
    }
  );
};
