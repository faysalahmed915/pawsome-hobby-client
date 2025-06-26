import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://pawsome-hobby-server.vercel.app'
})
const useAxiosSecure = () => {


    return axiosInstance;
};

export default useAxiosSecure;