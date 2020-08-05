import axios from "axios";

axios.get('https://api.github.com/users/andre-jeon')
    .then(res => {
        cardS.appendChild(cardMaker(res.data))
    })
    .cathch(err => {
        console.log(err)
    })


const cardS = document.querySelector('.cards')

function cardMaker(obj) {

    const card = document.createElement('div')
    const cardInfo = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('h3')
    const username = document.createElement('p')
    const location = document.createElement('p')
    const profile = document.createElement('p')
    const address = document.createElement('a')
    const followers = document.createElement('p')
    const following = document.createElement('p')
    const bio = document.createElement('p')

    card.classList.add('card')
    cardInfo.classList.add('card-info')
    name.classList.add('name')
    username.classList.add('username')

    image.src = obj.avatar_url
    name.textContent = obj.name
    username.textContent = obj.login
    location.textContent = `Location: ${obj.location}`
    profile.textContent = 'Profile: '
    address.textContent = obj.html_url
    address.href = obj.html_url
    followers.textContent = `Followers: ${obj.followers}`
    following.textContent = `Following: ${obj.following}`
    bio.textContent = `Bio: ${obj.bio}`

    card.appendChild(image)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(username)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    profile.appendChild(address)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)

    return card
}