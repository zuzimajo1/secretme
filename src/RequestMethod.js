import axios from "axios";


const Base_URL = "https://secretme.onrender.com/api/";

export const publicRequest  = axios.create({
    baseURL: Base_URL,
})