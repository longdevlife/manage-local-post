@@ .. @@
const Footer = () => {
    return (
-        <footer className="bg-gray-900 text-white">
+        <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Long Dev Blog
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Chia sẻ kiến thức lập trình, kinh nghiệm phát triển phần mềm và những câu chuyện truyền cảm hứng.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Danh mục</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lập trình</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Giới thiệu</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">RSS Feed</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Long Dev Blog. Made with <i className="fas fa-heart text-red-500"></i> in Vietnam.
                    </p>
                </div>
            </div>
        </footer>
    )
}