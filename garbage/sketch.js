var direction=''

function preload() {
    var backgroundImg = loadImage("background.jpg")
    var apple = loadImage("apple.jpg")
    var recy = loadImage('a.bmp')
    var non = loadImage('b.bmp')
    var kit = loadImage('c.bmp')
    var har = loadImage('d.bmp')
    var other =loadImage('e.bmp')
    var banana = loadImage('xj.jpg')
    var coke = loadImage('kl.jpg')
    var dhj = loadImage('dhj.jpg')
    var apple = loadImage('apple.jpg')
    var news = loadImage('bz.jpg')
    var battery = loadImage('dc.jpg')
    var pizza = loadImage('pizza.png')
    var pc = loadImage('dn.jpg')
    var paper = loadImage('cz.webp')
    var battle = loadImage('slsp.jpg')
    var light = loadImage('dp.jpg')
}

function setup() {}

function draw() {
    image(backgroundImg, 0, 0)//,width, height)
}
direction=''

function preload() {
    backgroundImg = createImg("https://zlc1005.github.io/garbage/background.jpg")
    apple = loadImage("https://zlc1005.github.io/garbage/apple.jpg")
    recy = createImg('https://zlc1005.github.io/garbage/a.bmp')
    non = createImg('https://zlc1005.github.io/garbage/b.bmp')
    kit = createImg('https://zlc1005.github.io/garbage/c.bmp')
    har = createImg('https://zlc1005.github.io/garbage/d.bmp')
    other =createImg('https://zlc1005.github.io/garbage/e.bmp')
    non.size(60*2,80*2)
    recy.size(60*2,80*2)
    kit.size(60*2,80*2)
    har.size(60*2,80*2)
    other.size(60*2,80*2)
    recy.position(696,106)
    kit.position(696+60*2,106+80*2)
    har.position(817,106)
    other.position(817-60*2,106+80*2)
    non.position(765,427)
    banana = loadImage('https://zlc1005.github.io/garbage/xj.jpg')
    coke = loadImage('https://zlc1005.github.io/garbage/kl.jpg')
    dhj = loadImage('https://zlc1005.github.io/garbage/dhj.jpg')
    apple = loadImage('https://zlc1005.github.io/garbage/apple.jpg')
    news = loadImage('https://zlc1005.github.io/garbage/bz.jpg')
    battery = loadImage('https://zlc1005.github.io/garbage/dc.jpg')
    pizza = loadImage('https://zlc1005.github.io/garbage/pizza.png')
    pc = loadImage('https://zlc1005.github.io/garbage/dn.jpg')
    paper = loadImage('https://zlc1005.github.io/garbage/cz.webp')
    battle = loadImage('https://zlc1005.github.io/garbage/slsp.jpg')
    light = loadImage('https://zlc1005.github.io/garbage/dp.jpg')
}
function setup() {
    createCanvas(1000, 700);
    non.mousePressed(qun)
    kit.mousePressed(quk)
    recy.mousePressed(qur)
    har.mousePressed(quh)
    other.mousePressed(quo)
}

function draw() {
    backgroundImg.size(1000, 700)
    backgroundImg.position(0, 0)
}

function qur() {
    alert('Recyclable')
}
function quh() {
    alert('Harmful Waste')
}
function quo() {
    alert('Other Waste')
}
function quk() {
    alert('Kitchen Waste')
}
function qun() {
    alert('Non-Recyclable')
}
