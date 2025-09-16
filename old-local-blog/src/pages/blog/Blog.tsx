
import React from 'react'
import Layout from '../../components/Layout/Layout'
import CreatePost from './components/CreatePost/CreatePost'
import PostList from './components/PostList/PostList'

const Blog = () => {
    return (
        <Layout>
            {/* Create Post Section */}
            <section id="create-post" className="mb-12">
                <CreatePost />
            </section>

            {/* Blog Posts Section */}
            <PostList />
        </Layout>
    )
}

export default Blog