direction=''
function preload() {
    backgroundImg = createImg("https://zlc1005.github.io/garbage/background.jpg",'a')
    recy = createImg('https://zlc1005.github.io/garbage/a.bmp','a')
    kit = createImg('https://zlc1005.github.io/garbage/c.bmp','a')
    har = createImg('https://zlc1005.github.io/garbage/d.bmp','a')
    other =createImg('https://zlc1005.github.io/garbage/e.bmp','a')
    recy.size(60*2,80*2)
    kit.size(60*2,80*2)
    har.size(60*2,80*2)
    other.size(60*2,80*2)
    recy.position(696,106)
    kit.position(696+60*2,106+80*2)
    har.position(817,106)
    other.position(817-60*2,106+80*2)
    apple = loadImage("https://zlc1005.github.io/garbage/apple.jpg")
    banana = loadImage('https://zlc1005.github.io/garbage/xj.jpg')
    coke = loadImage('https://zlc1005.github.io/garbage/kl.jpg')
    dhj = loadImage('https://zlc1005.github.io/garbage/dhj.jpg')
    news = loadImage('https://zlc1005.github.io/garbage/bz.jpg')
    battery = loadImage('https://zlc1005.github.io/garbage/dc.jpg')
    pizza = loadImage('https://zlc1005.github.io/garbage/pizza.png')
    pc = loadImage('https://zlc1005.github.io/garbage/dn.jpg')
    paper = loadImage('https://zlc1005.github.io/garbage/cz.webp')
    battle = loadImage('https://zlc1005.github.io/garbage/slsp.jpg')
    light = loadImage('https://zlc1005.github.io/garbage/dp.jpg')
    yytt = loadImage('https://zlc1005.github.io/garbage/yt.jpg')
    liii=[recy,kit,har,other]
}
imgxy=100,100
d=0
r=0
function setup() {
    asdfg=[]
    createCanvas(1000, 700)
    qu=[
        [apple,kit,500,500],
        [banana,kit,550,400],
        [coke,recy,550,400],
        [dhj,har,150,550],
        [news,recy,500,540],
        [battery,har,500, 400],
        [pizza,kit,500, 400],
        [pc,har,500, 400],
        [paper,recy,500, 500],
        [battle,recy,500, 500],
        [light,har,400,500],
        [yytt,other,500, 500]
    ]
    scoreElem = createDiv()
    scoreElem.position(20, 20)
    scoreElem.style('color', 'white')
    //backgroundImg.mousePressed(quq)
}
// make a function to show some text on screen
function showText(text, x, y ,color='black') {
    scoreElem.position(x, y)
    scoreElem.style('color', color)
    scoreElem.html(text)
}
function draw() {
    backgroundImg.size(1000, 700)
    backgroundImg.position(0, 0)
    asd=mouseX+','+mouseY
    show_time()
    showText(asd,0,20)
    imaa=choose(qu)
    show_image(imaa[0],100,100)
    imaa[1].mousePressed(alert_right)
    asdfg=remove(liii,imaa)
    asdfg[0].mousePressed(alert_not_right)
    asdfg[1].mousePressed(alert_not_right)
    asdfg[2].mousePressed(alert_not_right)
    showText('right:'+r+'  wrong:'+d+'   Correct Rate:'+zql(r,d),0,40)
}
// make a function to show a image on screen
function show_image(img, x, y) {
    image(img, x, y)
}
// make a function to show the time on 0,0
function show_time() {
    showText(hour() + ':' + minute() + ':' + second(), 0, 0)
}
// make a function to choose a value in a list
function choose(list) {
    return list[floor(random(list.length))]
}
// make a function
// if a=[1,2,3] b=1 return [2,3]
function remove(a, b) {
    var c = []
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b) {
            c.push(a[i])
        }
    }
    return c
}
// make a function to round a number
function round(num, n) {
    return Math.round(num * Math.pow(10, n)) / Math.pow(10, n)
}
function zql(a, b) {
    rate = a / b * 100
    rate=round(rate,2)
    return rate
}
// make a function to alert 'You are right!!'
function alert_right() {
    d=d+1
    r=r+1
    alert('You are right!!')
}
function alert_not_right() {
    d=d+1
    alert("You aren't right.")
}
