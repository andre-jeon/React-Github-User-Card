import React from 'react'

const Usercard = props => {
    const user = props.user
    return (
        <div class="card">
            <img src={user.avatar_url}/>
                <div class="card-info">
                    <h3 class="name">{user.name}</h3>
                    <p class="username">{user.login}</p>
                    <p>{user.location}</p>
                    <p>Profile: <a href="https://github.com/bikesh-maharjan">{user.url}</a></p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </div>
        </div>
    )
}


export default Usercard