import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';


const useAxiosToken = () => {
  const auth = useAuth()
  const axiosToken = axios.create({
    headers: {'Authorization': 'Bearer '+auth.user}
  });


    return axiosToken;
};

export default useAxiosToken;