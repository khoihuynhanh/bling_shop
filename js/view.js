
const viewSection = document.querySelector('.view')
function renderView() {

    const productView = (getDataStorage(localStorageProductView) === null) ? [] : getDataStorage(localStorageProductView)
    console.log(productView);
    const htmls = productView.map(item => {
        return `
            <div class="view_wrapper">
                <div class="view_img">
                    <div class="view_img_left">
                        <img class="active_img" src=${item.img[0]} alt="">
                        <img src=${item.img[1]} alt="">
                        <img src=${item.img[2]} alt="">
                        <img src=${item.img[3]} alt="">
                    </div>
                    <div class="view_img_right">
                        <img src=${item.img[0]} alt="">
                    </div>
                </div>
                <div class="view_detail">
                    <div class="view_info">
                        <span>${item.value} / ${item.name}</span>
                        <p class="view_value">${item.value}</p>
                        <h1 class="view_title">${item.name}</h1>
                        <h3 class="view_price">$ ${item.price} <span> & free shipping</span></h3>
                        <p class="view_des">${item.des}</p>
                    </div>
                    <div class="view_btn">
                        <button class="btn" onclick="goToProductPage()">Product</button>
                    </div>
                </div>
            </div>
        `
    })
    viewSection.innerHTML = htmls.join('')
}
renderView()

function goToProductPage() {
    const viewBtn = document.querySelector('.view_btn button')
    viewBtn.addEventListener('click', () => {
        location.href = 'product.html'
    })
}


const leftImage = document.querySelectorAll('.view_img_left img')
const rightImage = document.querySelector('.view_img_right img')

let currentIndexImage = 0

leftImage.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        currentIndexImage = index
        rightImage.src = leftImage[currentIndexImage].src

        leftImage.forEach(img => {
            img.classList.remove('active_img')
        })

        leftImage[currentIndexImage].classList.add('active_img')
    })
})


