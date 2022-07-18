import axios from "axios";

//base url created
const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export default instance;
