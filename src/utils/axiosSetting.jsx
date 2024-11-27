import axios from "axios";

const axiosSetting = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export default axiosSetting;