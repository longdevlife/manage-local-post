const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Long Dev Blog
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    <i className="fas fa-home mr-2"></i>Trang chủ
                                </a>
                                <a href="#posts" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    <i className="fas fa-blog mr-2"></i>Bài viết
                                </a>
                                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    <i className="fas fa-user mr-2"></i>Giới thiệu
                                </a>
                                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    <i className="fas fa-envelope mr-2"></i>Liên hệ
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <i className="fas fa-bars text-gray-600"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header