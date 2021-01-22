import React from 'react'
import { Link, Route } from 'react-router-dom'
import UserShow from './UserShow'
import UsersList from './UsersList'
import PostsList from './PostsList'
import PostDetails from './PostDetails'


const App = (props) => {
  return (
    <div>
        <Link to = "/"> Home </Link>| 
        <Link to = "/Users"> Users </Link> | 
        <Link to = "/Posts"> Posts </Link>


        <Route path = "/Users" component = {UsersList} exact = {true} />
        <Route path = "/users/:id" component = {UserShow} />
        <Route path = "/Posts" component = {PostsList} exact = {true} />
        <Route path = "/Posts/:id" component = {PostDetails} />

    </div>
  )
}

export default App