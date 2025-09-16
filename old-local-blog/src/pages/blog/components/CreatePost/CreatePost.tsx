// Remove unused React import as we're using modern JSX transform

const CreatePost = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header section với gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white flex items-center">
                    <i className="fas fa-edit mr-3"></i>Tạo bài viết mới
                </h2>
                <p className="text-blue-100 mt-1">Chia sẻ kiến thức và trải nghiệm của bạn</p>
            </div>

            <form className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            <i className="fas fa-heading mr-2 text-blue-500" />Tiêu đề bài viết
                        </label>
                        <input type="text" id="title" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Nhập tiêu đề hấp dẫn..." required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="featuredImage" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            <i className="fas fa-image mr-2 text-green-500" />Ảnh đại diện
                        </label>
                        <input type="text" id="featuredImage" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="https://example.com/image.jpg" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <i className="fas fa-align-left mr-2 text-purple-500" />Nội dung bài viết
                    </label>
                    <textarea id="description" rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 resize-none" placeholder="Viết nội dung bài viết của bạn ở đây..." />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="publishDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            <i className="fas fa-calendar-alt mr-2 text-orange-500" />Ngày xuất bản
                        </label>
                        <input type="datetime-local" id="publishDate" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" required />
                    </div>
                    <div className="flex items-end">
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg w-full">
                            <input id="publish" type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 rounded focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor="publish" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                                <i className="fas fa-globe mr-2 text-blue-500" />Xuất bản ngay
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button type="submit" className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        <i className="fas fa-paper-plane mr-2" />Xuất bản bài viết
                    </button>
                    <button type="button" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        <i className="fas fa-sync-alt mr-2" />Cập nhật
                    </button>
                    <button type="reset" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        <i className="fas fa-times mr-2" />Hủy bỏ
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost