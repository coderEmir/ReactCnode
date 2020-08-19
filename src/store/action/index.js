import axios from 'axios';

const http = axios.create({
    // 根路径
    base: "https://cnodejs.org.api/v1",
    timeout : 1000,
    timeoutErrorMessage : "请求超时",
})