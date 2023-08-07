import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://nanejoon.sobhanranjbar.ir/',
});

export default Axios;