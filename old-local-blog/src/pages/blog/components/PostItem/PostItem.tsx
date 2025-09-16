
// Remove unused React import as we're using modern JSX transform

import type { Post } from "../../../../types/blog"

interface PostItemType {
    post: Post
}

const PostItem = ({ post }: PostItemType) => {
    return (
        <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
            <div className="relative overflow-hidden">
                <img
                    src={post.featuredImage}
                    loading="lazy"
                    alt="Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê."
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            </div>

            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {/* Dinh dạng hiện tại là 2024-09-15T10:30:00.000Z cần làm đẹp lại */}
                    <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' })}</time>

                    <span className="mx-2">•</span>
                    <i className="fas fa-clock mr-1"></i>
                    <span>5 phút đọc</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 sition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-gray-600 ">
                    {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 ">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white text-xs"></i>
                        </div>
                        <span className="text-sm font-medium text-gray-700 ">Long Dev</span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 sition-colors" title="Chỉnh sửa">
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-600 sition-colors" title="Xóa">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PostItem
