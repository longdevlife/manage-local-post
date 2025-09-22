// cú pháp nhanh redux  rslice

import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit'
import type { Post } from '../types/blog'

interface BlogState {
  postList: Post[]
  editPost: Post | null
}

const initialState: BlogState = {
  editPost: null,
  postList: [
    {
      id: '1',
      title: 'Hướng dẫn học React từ cơ bản đến nâng cao',
      description:
        'React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Trong bài viết này, chúng ta sẽ tìm hiểu các khái niệm cơ bản và nâng cao của React như components, hooks, state management và nhiều hơn nữa.',
      featuredImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop',
      publishDate: '2024-09-15T10:30:00.000Z',
      published: true
    },
    {
      id: '2',
      title: 'Xây dựng API RESTful với Node.js và Express',
      description:
        'Hướng dẫn chi tiết cách tạo API RESTful sử dụng Node.js và Express framework. Chúng ta sẽ học về routing, middleware, authentication và cách kết nối với database MongoDB.',
      featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      publishDate: '2024-09-14T08:15:00.000Z',
      published: true
    },
    {
      id: '3',
      title: 'TypeScript cho người mới bắt đầu',
      description:
        'TypeScript là một superset của JavaScript thêm static typing. Bài viết này sẽ giúp bạn hiểu về types, interfaces, generics và các tính năng nâng cao của TypeScript.',
      featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop',
      publishDate: '2024-09-13T14:45:00.000Z',
      published: true
    },
    {
      id: '4',
      title: 'Redux Toolkit - Quản lý state hiệu quả',
      description:
        'Redux Toolkit là công cụ chính thức để viết Redux logic. Tìm hiểu cách sử dụng createSlice, configureStore và RTK Query để quản lý state một cách hiệu quả.',
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      publishDate: '2024-09-12T16:20:00.000Z',
      published: false
    },
    {
      id: '5',
      title: 'Lập trình bất đồng bộ trong JavaScript',
      description:
        'Khám phá các kỹ thuật lập trình bất đồng bộ trong JavaScript như callbacks, promises và async/await để xử lý các tác vụ không đồng bộ một cách hiệu quả.',
      featuredImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      publishDate: '2024-09-11T09:00:00.000Z',
      published: true
    }
  ]
}

const blogReducer = createSlice({
  name: 'blogReducer',
  initialState,
  reducers: {
    addPost: (state, action) => {
      // immerjs
      // immerjs giúp chúng ta mutate một state an toàn
      const post = action.payload
      state.postList.push(post)
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      state.postList = state.postList.filter((post) => post.id !== postId)
    },
    editPost: (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editPost = foundPost
    },
    cancelEdit: (state) => {
      state.editPost = null
    },

    updatePost: (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        state.editPost = null
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {
          console.log(current(state))
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, current(state))
      })
  }
})

export const { addPost, deletePost, editPost, cancelEdit, updatePost } = blogReducer.actions

export default blogReducer.reducer
