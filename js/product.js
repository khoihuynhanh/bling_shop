// render product list
function renderProductList() {
    const productListItem = document.querySelector('.product_list');
    const htmls = productCartList.map((product, index) => {
        return `
            <div class="product_item" value="${product.value}">
                <img src=${product.img[0]} alt="" class="product_img">
                <h1>${product.name}</h1>
                <h2>$ ${product.price}</h2>
                <div class="product_icon">
                    <i class="fa-solid fa-bag-shopping" onclick="handleAddProduct('${product.id}')"></i>
                    <i class="fa-solid fa-eye" onclick="handleViewCart('${product.id}')"></i>
                </div>
            </div>
        `
    })
    productListItem.innerHTML = htmls.join('')
}
renderProductList()

// filter product list
const productBtns = document.querySelectorAll('.product_buttons button')
const productItem = document.querySelectorAll('.product_item')

function filterProduct() {
    productBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.getAttribute('product-type');
            console.log(type);
            // remove and set active for button
            document.querySelector('.product_buttons button.active').classList.remove('active')
            e.target.classList.add('active')

            // filter product
            productItem.forEach(item => {
                if (type == 'all' || item.getAttribute('value') == type) {
                    item.classList.remove('hide')
                } else {
                    item.classList.add('hide')
                }
            })
        })
    })
}
filterProduct()

// add cart
let arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)

function handleAddProduct(id) {
    let item
    let flag = false
    productCartList.map(product => {
        if (product.id === id) {
            item = product
            quality = 1
        }
    })

    arrayProductCartList.map(el => {
        if (el.product.id === id) {
            el.qty = el.qty + 1
            flag = true
        }
    })

    if (flag === false) {
        let cartItem = {product: item, qty: quality}
        arrayProductCartList.push(cartItem)
        console.log(arrayProductCartList);
    }

    setDataStorage(localStorageProductCartList, JSON.stringify(arrayProductCartList))
    renderCartCount()
}

// view cart
function handleViewCart(id) {
    const productView = productCartList.filter(item => {
        return item.id === id
    })
    setDataStorage(localStorageProductView, JSON.stringify(productView))
    location.href = 'view.html'
}