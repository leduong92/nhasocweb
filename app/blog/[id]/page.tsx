import React from 'react'

const BlogPage = ({ params }: { params: { id: number } }) => {
    return (
        <div className='container'>{params.id}</div>
    )
}

export default BlogPage