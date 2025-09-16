// Remove unused React import as we're using modern JSX transform

const Sidebar = () => {
    return (
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 sticky top-16 h-screen overflow-y-auto">
            <div className="p-6">
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Danh mục</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <i className="fas fa-code mr-2"></i>Lập trình
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <i className="fas fa-mobile-alt mr-2"></i>Mobile App
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <i className="fas fa-globe mr-2"></i>Web Development
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                <i className="fas fa-brain mr-2"></i>AI & Machine Learning
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Thống kê</h3>
                    <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">24</div>
                            <div className="text-sm text-gray-600">Tổng bài viết</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">1.2k</div>
                            <div className="text-sm text-gray-600">Lượt xem</div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar