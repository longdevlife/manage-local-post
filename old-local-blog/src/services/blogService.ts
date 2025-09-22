import { axiosCustom } from './config'

export const blogService = {
  getPostList: () => {
    return axiosCustom.get('/posts')
  }
}
