import axios from "axios";


const Base_URL = "https://secretmeph.herokuapp.com/api/";

export const publicRequest  = axios.create({
    baseURL: Base_URL,
})