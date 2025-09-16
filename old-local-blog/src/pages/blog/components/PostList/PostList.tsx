
import React from 'react'
import PostItem from '../PostItem/PostItem'

const PostList = () => {
    return (
        <section id="blog-posts">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
                            <i className="fas fa-blog mr-3 text-blue-600"></i>Bài viết mới nhất
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Khám phá những kiến thức và trải nghiệm mới nhất</p>
                    </div>
                    <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                            <i className="fas fa-th-large mr-2"></i>Lưới
                        </button>
                        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            <i className="fas fa-list mr-2"></i>Danh sách
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    <i className="fas fa-arrow-down mr-2"></i>Xem thêm bài viết
                </button>
            </div>
        </section>
    )
}





export default PostList