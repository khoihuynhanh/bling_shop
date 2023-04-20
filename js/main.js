const shopNow = document.querySelectorAll('.shop_now');
function goToProduct() {
    shopNow.forEach(btn => {
        btn.addEventListener('click', () => { location.href = 'product.html' })
    })    
}
goToProduct()

const productCartList = [
    {
        id: 'P01',
        img: ['img/ring1.jpg', 'img/ring1a.jpg', 'img/ring1b.jpg', 'img/ringall.jpg'],
        name: 'ring 1',
        price: 350,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P02',
        img: ['img/ring2.jpg', 'img/ring2a.jpg', 'img/ring2b.jpg', 'img/ringall.jpg'],
        name: 'ring 2',
        price: 900,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P03',
        img: ['img/ring3.jpg', 'img/ring3a.jpg', 'img/ring3b.jpg', 'img/ringall.jpg'],
        name: 'ring 3',
        price: 950,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P04',
        img: ['img/ring4.jpg', 'img/ring4a.jpg', 'img/ring4b.jpg', 'img/ringall.jpg'],
        name: 'ring 4',
        price: 550,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P05',
        img: ['img/ring5.jpg', 'img/ring5a.jpg', 'img/ring5b.jpg', 'img/ringall.jpg'],
        name: 'ring 5',
        price: 550,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P06',
        img: ['img/ring6.jpg', 'img/ring6a.jpg', 'img/ring6b.jpg', 'img/ringall.jpg'],
        name: 'ring 6',
        price: 450,
        value: 'rings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P07',
        img: ['img/bra1.jpg', 'img/bra1a.jpg', 'img/bra1b.jpg', 'img/braall.jpg'],
        name: 'bracelets 1',
        price: 495,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P08',
        img: ['img/bra2.jpg', 'img/bra2a.jpg', 'img/bra2b.jpg', 'img/braall.jpg'],
        name: 'bracelets 2',
        price: 595,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P09',
        img: ['img/bra3.jpg', 'img/bra3a.jpg', 'img/bra3b.jpg', 'img/braall.jpg'],
        name: 'bracelets 3',
        price: 999,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P10',
        img: ['img/bra4.jpg', 'img/bra4a.jpg', 'img/bra4b.jpg', 'img/braall.jpg'],
        name: 'bracelets 4',
        price: 595,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P11',
        img: ['img/bra5.jpg', 'img/bra5a.jpg', 'img/bra5b.jpg', 'img/braall.jpg'],
        name: 'bracelets 5',
        price: 395,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P12',
        img: ['img/bra6.jpg', 'img/bra6a.jpg', 'img/bra6b.jpg', 'img/braall.jpg'],
        name: 'bracelets 6',
        price: 795,
        value: 'bracelets',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P13',
        img: ['img/ear1.jpg', 'img/ear1a.jpg', 'img/ear1b.jpg', 'img/earall.jpg'],
        name: 'earring 1',
        price: 495,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P14',
        img: ['img/ear2.jpg', 'img/ear2a.jpg', 'img/ear2b.jpg', 'img/earall.jpg'],
        name: 'earring 2',
        price: 595,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P15',
        img: ['img/ear3.jpg', 'img/ear3a.jpg', 'img/ear3b.jpg', 'img/earall.jpg'],
        name: 'earring 3',
        price: 995,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P16',
        img: ['img/ear4.jpg', 'img/ear4a.jpg', 'img/ear4b.jpg', 'img/earall.jpg'],
        name: 'earring 4',
        price: 695,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P17',
        img: ['img/ear5.jpg', 'img/ear5a.jpg', 'img/ear5b.jpg', 'img/earall.jpg'],
        name: 'earring 5',
        price: 395,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P18',
        img: ['img/ear6.jpg', 'img/ear6a.jpg', 'img/ear6b.jpg', 'img/earall.jpg'],
        name: 'earring 6',
        price: 795,
        value: 'earrings',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P19',
        img: ['img/nec1.jpg', 'img/nec1a.jpg', 'img/nec1b.jpg', 'img/necall.jpg'],
        name: 'necklace 1',
        price: 995,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P20',
        img: ['img/nec2.jpg', 'img/nec2a.jpg', 'img/nec2b.jpg', 'img/necall.jpg'],
        name: 'necklace 2',
        price: 900,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P21',
        img: ['img/nec3.jpg', 'img/nec3a.jpg', 'img/nec3b.jpg', 'img/necall.jpg'],
        name: 'necklace 3',
        price: 395,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P22',
        img: ['img/nec4.jpg', 'img/nec4a.jpg', 'img/nec4b.jpg', 'img/necall.jpg'],
        name: 'necklace 4',
        price: 595,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P23',
        img: ['img/nec5.jpg', 'img/nec5a.jpg', 'img/nec5b.jpg', 'img/necall.jpg'],
        name: 'necklace 5',
        price: 550,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
    {
        id: 'P24',
        img: ['img/nec6.jpg', 'img/nec6a.jpg', 'img/nec6b.jpg', 'img/necall.jpg'],
        name: 'necklace 6',
        price: 750,
        value: 'necklaces',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat fugiat nostrum quod. Cupiditate, sint.'
    },
]

const localStorageProductCartList = "PRODUCTCARTLIST"
const localStorageProductView = "PRODUCTVIEW"

// save and get data from local storage
const setDataStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const getDataStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

function renderCartCount() {
    const numberCartCount = (getDataStorage(localStorageProductCartList) === null) ? [] : getDataStorage(localStorageProductCartList)
    const sumCount = numberCartCount.reduce((acc, curr) => {
        return acc + curr.qty
    }, 0)
    const cartCount = document.querySelector('.cart_count')
    cartCount.innerHTML = sumCount
}
renderCartCount()