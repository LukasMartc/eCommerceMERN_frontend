import axios from "axios";

const clientAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`
})

export default clientAxios