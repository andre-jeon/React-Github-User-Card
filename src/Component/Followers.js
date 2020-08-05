import React from 'react'

const Followers = props => {
    const user = props.followers
    return (
        <div class="card">
            <img src={user.avatar_url}/>
                <div class="card-info">
                    <h3 class="name">{user.name}</h3>
                    <p class="username">{user.login}</p>
                </div>
        </div>
    )
}


export default Followers