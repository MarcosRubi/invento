function toggleMenu() {
    const menu = document.querySelector('.menu')
    const toggle = document.querySelector('.toggle')

    menu.classList.toggle('active')
    toggle.classList.toggle('active')
}
function clearClass(elements) {
    elements.forEach((element, index) => {
        element.classList.remove('active')
    })
}
window.onload = () => {

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', scrollY > 0)
    })

    const nav_links = document.querySelectorAll('.menu a');
    nav_links.forEach((element, index) => {
        element.addEventListener('click', () => {
            clearClass(nav_links);
            element.classList.add('active')
        })
    })

}