const navbar = document.querySelector('.navbar');

function renderNavbar() {
    navbar.innerHTML = `
        <div class="navbar_wrapper">
            <div class="navbar_left">
                <ul class="navbar_left-list">
                    <li class="navbar_left-item">
                        <a href="" class="navbar_left-link">rings</a>
                    </li>
                    <li class="navbar_left-item">
                        <a href="" class="navbar_left-link">bracelets</a>
                    </li>
                    <li class="navbar_left-item">
                        <a href="" class="navbar_left-link">earrings</a>
                    </li>
                    <li class="navbar_left-item">
                        <a href="" class="navbar_left-link">necklaces</a>
                    </li>
                </ul>
            </div>
            <div class="navbar_mid">
                <img src="img/logo.png" alt="" class="navbar_logo">
            </div>
            <div class="navbar_right">
                <ul class="navbar_right-list">
                    <li class="navbar_right-item">
                        <a class="navbar_right-link navbar_home">home</a>
                    </li>
                    <li class="navbar_right-item">
                        <a class="navbar_right-link navbar_about">about</a>
                    </li>
                    <li class="navbar_right-item">
                        <a class="navbar_right-link navbar_product">product</a>
                    </li>
                    <li class="navbar_right-item">
                        <a class="navbar_right-link navbar_cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span class="cart_count">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
}
renderNavbar()

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar')
    if (scrollY > 200) {
        navbar.classList.add('bg')
    } else {
        navbar.classList.remove('bg')
    }
})

const navbarLogo = document.querySelector('.navbar_logo')
navbarLogo.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

const navbarProduct = document.querySelector('.navbar_product')
navbarProduct.addEventListener('click', () => {
    location.href = 'product.html'
})

const navbarHome = document.querySelector('.navbar_home')
navbarHome.addEventListener('click', () => {
    location.href = 'index.html'
})

const navbarCart = document.querySelector('.navbar_cart')
navbarCart.addEventListener('click', () => {
    location.href = 'cart.html'
})
