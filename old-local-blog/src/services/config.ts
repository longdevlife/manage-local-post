import axios from 'axios'

// Gọi API trong useEffect()
// Nếu gọi thành công thì dispatch action type: "blog/getPostListSuccess"
// Nếu gọi thất bại thì dispatch action type: "blog/getPostListFailed"
// Dispatch action type "blog/getPostList" (không dùng )

export const axiosCustom = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
