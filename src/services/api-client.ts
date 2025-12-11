import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0d6a343e7fb44695bd8da9ce9ddb3838'
    }
})