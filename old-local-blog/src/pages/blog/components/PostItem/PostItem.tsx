
// Remove unused React import as we're using modern JSX transform

const PostItem = () => {
    return (
        <article className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1665412019489-1928d5afa5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                    loading="lazy"
                    alt="Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê."
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        <i className="fas fa-brain mr-1"></i>Mindset
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <time dateTime="2022-10-13T11:32">13 Tháng 10, 2022</time>
                    <span className="mx-2">•</span>
                    <i className="fas fa-clock mr-1"></i>
                    <span>5 phút đọc</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    Nghịch cảnh là một phần của cuộc sống. Nó không thể bị kiểm soát. Cái có thể kiểm soát chính là cách chúng ta phản ứng trước nghịch cảnh.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white text-xs"></i>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Long Dev</span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors" title="Chỉnh sửa">
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="Xóa">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PostItem