import { useEffect, useState } from 'react'
import type { Post } from '../../../../types/blog'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, cancelEdit, updatePost } from '../../../../store/blog.reducer'
import type { RootState } from '../../../../store'

const initialState: Post = {
  id: '',
  title: '',
  description: '',
  featuredImage: '',
  publishDate: new Date().toISOString(),
  published: false
}

const CreatePost = () => {
  // dispatch là gì? : là hàm dùng để gửi (dispatch) action lên store để cập nhật state toàn cục
  // useDispatch là gì ? : là hook của thư viện react-redux , nó trả về hàm dispatch từ Redux store . Ban có thể sử dụng hàm này để gửi action từ các component chức năng của bạn.
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Post>(initialState)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (editingPost) {
      dispatch(updatePost(formData))
    } else {
      const formDataWithId = { ...formData, id: new Date().toISOString().slice(0, 16) }
      dispatch(addPost(formDataWithId))
      console.log('Form data submitted:', formDataWithId)
    }
    // Reset form gọi là clear data form khi mà ấn nút
    setFormData(initialState)
  }

  //edit post
  const editingPost = useSelector((state: RootState) => state.blog.editPost)

  useEffect(() => {
    setFormData(editingPost || initialState)
  }, [editingPost])

  // Hủy edit

  const handleCancelEdit = () => {
    dispatch(cancelEdit())
  }

  return (
    <div className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden'>
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4'>
        <h2 className='text-2xl font-bold text-white flex items-center'>
          <i className='fas fa-edit mr-3'></i>Tạo bài viết mới
        </h2>
        <p className='text-blue-100 mt-1'>Chia sẻ kiến thức và trải nghiệm của bạn</p>
      </div>

      <form onSubmit={handleSubmit} className='p-6 space-y-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label htmlFor='title' className='block text-sm font-semibold text-gray-700 mb-2'>
              <i className='fas fa-heading mr-2 text-blue-500' />
              Tiêu đề bài viết
            </label>
            <input
              type='text'
              id='title'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400'
              placeholder='Nhập tiêu đề hấp dẫn...'
              required
              value={formData.title}
              onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='featuredImage' className='block text-sm font-semibold text-gray-700 mb-2'>
              <i className='fas fa-image mr-2 text-green-500' />
              Ảnh bài viết
            </label>
            <input
              type='text'
              id='featuredImage'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400'
              placeholder='https://example.com/image.jpg'
              required
              value={formData.featuredImage}
              onChange={(event) => setFormData((prev) => ({ ...prev, featuredImage: event.target.value }))}
            />
          </div>
        </div>

        <div className='space-y-2'>
          <label htmlFor='description' className='block text-sm font-semibold text-gray-700 mb-2'>
            <i className='fas fa-align-left mr-2 text-purple-500' />
            Nội dung bài viết
          </label>
          <textarea
            id='description'
            rows={6}
            className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none'
            placeholder='Viết nội dung bài viết của bạn ở đây...'
            required
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
          />
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label htmlFor='publishDate' className='block text-sm font-semibold text-gray-700 mb-2'>
              <i className='fas fa-calendar-alt mr-2 text-orange-500' />
              Ngày xuất bản
            </label>
            <input
              type='datetime-local'
              id='publishDate'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              required
              value={formData.publishDate}
              onChange={(e) => setFormData((prev) => ({ ...prev, publishDate: e.target.value }))}
            />
          </div>
          <div className='flex items-end'>
            <div className='flex items-center space-x-3 p-4 bg-gray-50 rounded-lg w-full'>
              <input
                id='publish'
                type='checkbox'
                className='w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                checked={formData.published}
                onChange={(e) => setFormData((prev) => ({ ...prev, published: e.target.checked }))}
              />
              <label htmlFor='publish' className='text-sm font-medium text-gray-700 cursor-pointer'>
                <i className='fas fa-rocket mr-2 text-blue-500' />
                Xuất bản
              </label>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-3 pt-4 border-t border-gray-200'>
          <button
            type='submit'
            className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
          >
            <i className='fas fa-paper-plane mr-2'></i>
            {editingPost ? 'Cập nhật' : 'Đăng bài'}
          </button>
          {editingPost && (
            <>
              <button
                onClick={handleCancelEdit}
                type='button'
                className='inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
              >
                <i className='fas fa-times mr-2'></i>Hủy bỏ
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default CreatePost
