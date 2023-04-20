const cartProduct = document.querySelector('.cart_product')

function renderCartProduct() {
    const arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    const htmls = arrayProductCartList.map(cart => {
        return `
            <div class="cart_wrapper">
                <div class="cart_item">
                    <img src=${cart.product.img[0]} alt="" class="cart_img">
                    <div class="cart_info">
                        <h2>${cart.product.name}</h2>
                        <h2>id cart</h2>
                    </div>
                </div>
                <div class="cart_attribute">
                    <h3 class="cart_price">$ ${cart.product.price}</h3>
                    <div class="change_qty">
                        <div class="change_wrapper">
                            <button onclick="handleDecrease('${cart.product.id}')">-</button>
                            <h3 class="cart_qty">${cart.qty}</h3>
                            <button onclick="handleIncrease('${cart.product.id}')">+</button>
                        </div>
                    </div>
                    <h3>$ ${cart.product.price * cart.qty}</h3>
                    <div class="cart_remove" onclick="handleRemoveCart('${cart.product.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        `
    })
    cartProduct.innerHTML = htmls.join('')
    if (arrayProductCartList.length == 1) {
        cartProduct.style.height = '200px'
    } else if (arrayProductCartList.length == 2) {
        cartProduct.style.height = '400px'
    } else if (arrayProductCartList.length > 2) {
        cartProduct.style.height = '600px'
    } else if (!arrayProductCartList.length) {
        cartProduct.style.height = '50px'
    }
    totalPrice()
}
renderCartProduct()

function handleDecrease(id) {
    const arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    arrayProductCartList.map(item => {
        if (item.product.id === id && item.qty > 1) {
            item.qty -= 1
        }
    })
    setDataStorage(localStorageProductCartList, JSON.stringify(arrayProductCartList))
    renderCartCount()
    renderCartProduct()
}

function handleIncrease(id) {
    const arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    arrayProductCartList.map(item => {
        if (item.product.id === id && item.qty < 20) {
            item.qty += 1
        }
    })
    setDataStorage(localStorageProductCartList, JSON.stringify(arrayProductCartList))
    renderCartCount()
    renderCartProduct()
}

function handleRemoveCart(id) {
    const arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    const listCartRemove = arrayProductCartList.filter(data => {
        return data.product.id !== id
    })
    setDataStorage(localStorageProductCartList, JSON.stringify(listCartRemove))
    renderCartProduct()
    renderCartCount()
}

function totalPrice() {
    const arrayProductCartList = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    const numberTotalPrice = document.querySelector('.total_price')
    const sumTotal = arrayProductCartList.reduce((acc, curr) => {
        return acc + curr.product.price * curr.qty
    }, 0)
    numberTotalPrice.innerHTML = 'Total: $ ' + sumTotal
}

function handleBuyCart() {
    setDataStorage(localStorageProductCartList, JSON.stringify([]))
    renderCartProduct()
    renderCartCount()
}



