// cú pháp nhanh redux  rrslice

import { createSlice } from '@reduxjs/toolkit'
import type { Post } from '../types/blog'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: []
}

const blogReducer = createSlice({
  name: 'blogReducer',
  initialState,
  reducers: {}
})

// export const {} = blogReducer.actions

export default blogReducer.reducer
