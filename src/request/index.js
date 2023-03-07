import axios from 'axios';

export default axios.create({
    timeout: 5000,
    baseURL:'https://www.chengzier.cn:8000'


})