import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostsList = (props) => {
    const [ posts, setPosts ] = useState([])

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    },[])
    return (
        <div>
            <h1> Total Posts : {posts.length} </h1>
            <ul>
                { posts.map((post) => {
                    return <li key = {post.id}> <Link to = {`posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default PostsList