import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';


const useAxiosToken = () => {
  const auth = useAuth()
  console.log(auth.user)
  const axiosToken = axios.create({
    headers: {'Authorization': 'Bearer '+auth.user}
  });
  console.log("********")

  console.log(axiosToken)

    return axiosToken;
};

export default useAxiosToken;