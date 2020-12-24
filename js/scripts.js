function toggleMenu() {
    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')

    menu.classList.toggle('active')
    toggle.classList.toggle('active')
}
window.onload = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', scrollY > 0)
    })

}