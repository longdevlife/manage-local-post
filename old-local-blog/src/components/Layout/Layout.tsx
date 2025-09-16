import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="font-inter bg-gray-50  text-gray-900 dark:text-gray-100 antialiased min-h-screen">
            <Header />

            <div className="flex min-h-screen">
                <Sidebar />

                <main className="flex-1">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default Layout