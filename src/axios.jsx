import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(res => {
    res.headers['Authorization'] = 'Client-ID 6Gfq72MSvDyVlfHrgvOucmvV1fCoYkTFagQBtdw94r8';
    return res;
  })

export default axiosInstance
