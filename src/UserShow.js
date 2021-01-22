import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const UserShow = (props) => {
    const [ user, setUser ] = useState({})
    const [posts, setPosts ] = useState([])
    const { id } = props.match.params
    
    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    },[])

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    })
    
    return (
        <div>
            <h1> User Name : {user.name} </h1>
            <h2> Post Written By User </h2>
            <ul>
                {posts.map((post) => {
                    return <li key = {post.id} ><Link to ={`/posts/${post.id}`}> { post.title } </Link></li>
                })}
            </ul>
        </div>
    )
}

export default UserShow