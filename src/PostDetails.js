import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserShow from './UserShow'
import { Link } from 'react-router-dom'


const PostDetails = (props) => {
    const [user, setUser] = useState([])
    const [post, setPost ] = useState ([])
    const [ comments, setComments ] = useState([])
    const { id} = props.match.params

        useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
            const result = response.data
            setPost(result)

        axios.get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
            .then((response) => {
                const result = response.data
                setUser(result)
            })
        })
            .catch((error) => {
                alert(error.message)
            })
        },[])

        useEffect (() => {
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then((response) => {
                    const result = response.data
                    setComments(result)
                })
                .catch((error) => {
                    alert(error.message)
                })
            },[])

    
    return (
        <div>
            <h2>USER NAME : {user.name} </h2>
            <h2>TITLE: {post.title}</h2>
            <h3>BODY: <br/> {post.body} </h3>
            <hr />
            <h2> COMMENTS <br /></h2>
        
            <ul>
                {comments.map((comment) => {
                    return <li key = {comment.id}>{comment.body} </li>
                })}
            </ul>
            <hr />
            <Link to = {`/users/${post.userId}`}>More posts of author: {user.name} </Link>
            
        </div>
    )
}

export default PostDetails