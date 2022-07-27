const API = 'https://api.github.com/users/'
const form = document.querySelector('.git')
const btn = document.querySelector('#click')
const input = document.querySelector('#inp')
const output = document.querySelector('.output')

const searchGithub = async () => {
    let url = API + input.value
    const request = await fetch(url)
    const response = await request.json()
    renderGithub(response);
    input.value = ''
}
const renderGithub = (users) => {
    output.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('style_div')
    const img = document.createElement('img')
    img.classList.add('style_img')
    img.src = users.avatar_url
    img.addEventListener('click', () => document.location.href = users.html_url)
    const div_nl = document.createElement('div')
    div_nl.classList.add('style.div_nl')
    const name = document.createElement('h1')
    name.classList.add('style.name')
    name.textContent = users.name
    const login = document.createElement('h2')
    login.classList.add('style_login')
    login.textContent = users.login
    const div_imgf = document.createElement('div')
    div_imgf.classList.add('style_div6')
    const imgFoll = document.createElement('img')
    imgFoll.classList.add('style_imgFoll')
    imgFoll.src = "./img/folow.png"
    const followers = document.createElement('h2')
    followers.classList.add('style_followers')
    followers.textContent = users.followers
    const p_fw = document.createElement('h2')
    p_fw.classList.add('style_h')
    p_fw.textContent = ' :folowers'
    const following = document.createElement('h2')
    following.classList.add('style_following')
    following.textContent = users.following
    const p_fl = document.createElement('h2')
    p_fl.classList.add('style_p')
    p_fl.textContent = 'following'
    const email = document.createElement('h2')
    email.classList.add('style_email')
    email.textContent = !users.email ? 'email : Отсутствует' : `email:  ${users.email}`

    div.append(img, div_nl, div_imgf, email)
    div_nl.append(name, login)
    div_imgf.append(imgFoll, followers, p_fw, following, p_fl)
    output.append(div)

}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGithub()
})

