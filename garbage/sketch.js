
$(function () {
    setTimeout(function(){ $('#spinner').fadeOut(); }, 5000);

})

function preload() { // preload() is load all the images
    backgroundImg = loadImage("https://zlc1005.github.io/garbage/background.jpg")
    recy = createImg('https://zlc1005.github.io/garbage/a.bmp', 'alt')
    kit = createImg('https://zlc1005.github.io/garbage/c.bmp', 'alt')
    har = createImg('https://zlc1005.github.io/garbage/d.bmp', 'alt')
    other = createImg('https://zlc1005.github.io/garbage/e.bmp', 'alt')
    recy.size(60 * 2, 80 * 2)// set the size of recy
    kit.size(60 * 2, 80 * 2)// set the size of kit
    har.size(60 * 2, 80 * 2)// set the size of har
    other.size(60 * 2, 80 * 2)// set the size of other
    recy.position(696, 106)// set the position of recy
    kit.position(696 + 60 * 2, 106 + 80 * 2)// set the position of kit
    har.position(817, 106)// set the position of har
    other.position(817 - 60 * 2, 106 + 80 * 2)// set the position of other
    apple = [loadImage("https://zlc1005.github.io/garbage/apple.jpg"), 'apple']// apple
    banana = [loadImage('https://zlc1005.github.io/garbage/xj.jpg'), 'banana']// banana
    coke = [loadImage('https://zlc1005.github.io/garbage/kl.jpg'), 'coke']// coke
    dhj = [loadImage('https://zlc1005.github.io/garbage/dhj.jpg'), 'dhj']// dhj
    news = [loadImage('https://zlc1005.github.io/garbage/bz.jpg'), 'news']// news
    battery = [loadImage('https://zlc1005.github.io/garbage/dc.jpg'), 'battery']// battery
    pizza = [loadImage('https://zlc1005.github.io/garbage/pizza.png'), 'pizza']// pizza
    pc = [loadImage('https://zlc1005.github.io/garbage/dn.jpg'), 'pc']// pc
    paper = [loadImage('https://zlc1005.github.io/garbage/cz.webp'), 'paper']// webp
    battle = [loadImage('https://zlc1005.github.io/garbage/slsp.jpg'), 'battle']// battle
    light = [loadImage('https://zlc1005.github.io/garbage/dp.jpg'), 'light']// light
    yytt = [loadImage('https://zlc1005.github.io/garbage/yt.jpg'), 'yytt']// yytt
    liii = [recy, kit, har, other]// set the list of all the images
}
imgxy = 100, 100// set the position of the image
d = 0//点击次数
w = 0// wrong
r = 0//right次数
function setup() { // setup() is set up the canvas
    createCanvas(1000, 700) // set the canvas size
    background(backgroundImg)// set the background
    qu = [// set the list of all the images
        [apple, kit, 500, 500],
        [banana, kit, 550, 400],
        [coke, recy, 550, 400],
        [dhj, har, 150, 550],
        [news, recy, 500, 540],
        [battery, har, 500, 400],
        [pizza, kit, 500, 400],
        [pc, har, 500, 400],
        [paper, recy, 500, 500],
        [battle, recy, 500, 500],
        [light, har, 400, 500],
        [yytt, other, 500, 500]
    ]
    scoreElem = createDiv()
    timer = createDiv()
    XYpos = createDiv()
    imagess = choose(qu)
    t = null
    image(imagess[0][0], 100, 100, imagess[2], imagess[3])// item, x,y,w,h
    //backgroundImg.mousePressed(quq)
}
// make a function to show some text on screen
function showText(element, text, x, y, color = 'white') { // showText(text, x, y, color)
    element.position(x, y)// set position of the div
    element.style('color', color)// set the color of the div
    element.html(text)// set the text of the div
}
function clear_all() {// clear_all()
    background(backgroundImg)// set the background
    recy.size(60 * 2, 80 * 2)// set the size of recy
    kit.size(60 * 2, 80 * 2)// set the size of kit
    har.size(60 * 2, 80 * 2)// set the size of har
    other.size(60 * 2, 80 * 2)// set the size of other
    recy.position(696, 106)// set the position of recy
    kit.position(696 + 60 * 2, 106 + 80 * 2)// set the position of kit
    har.position(817, 106)// set the position of har
    other.position(817 - 60 * 2, 106 + 80 * 2)// set the position of other
}
function draw() {
    showText(timer, hour() + ': ' + minute() + ':' + second(), 0, 0)// show the time// show the time
    showText(XYpos, 'x: ' + mouseX + 'y:' + mouseY, 0, 20)
    showText(scoreElem, 'Right:' + r + '&nbsp &nbsp Wrong:' + (w) + '&nbsp &nbspCorrectate:' + zql(r, d) + '%', 0, 40)// score and the correct rate
    //imaa=choose(qu)// choose a value in the list
    play()// play the game
    //image(imaa[0][0],100,100,120,160)//item, x,y,w,h
    //console.log(imaa[0][1])
    /*
     imaa=choose(qu)// choose a value in the list
    show_image(imaa[0][0],100,100)// show the image
    imaa[1].mousePressed(alert_right)// make the image can be clicked
    asdfg=arrayRemove(liii,imaa)// remove the image from the list
    //console.log('draw:'+azz+'   img='+imaa[1])// show the number of times draw() will run
    asdfg[0].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[1].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[2].mousePressed(alert_not_right)// make the image can be clicked
    //showText('right:'+r+'  wrong:'+d-r+'   Correctate:'+zql(r,d)+'%',10,40)// show the score and the correct rate
    */
}

// make a function to choose a value in a list
function choose(list) {// choose(list)
    return list[floor(random(list.length))]// return a value in the list
}//none

// make a function to round a number
function rounds(num, n) { // round(num, n)
    return Math.round(num * Math.pow(10, n)) / Math.pow(10, n)// return a number after rounding
}

// make a function, if a=[1,2,3,4] and b=2, return [1,3,4]
function arrayRemove(arr, value) { // arrayRemove(arr, value)
    return arr.filter(function (ele) { // filter() is to filter the value in the list
        return ele != value;// return the value that is not equal to the value
    });
}

// =====================================================================================================================
function zql(a, b) {// zql(a, b)
    if (a == 0) return 0
    rate = a / b * 100// rate is the correct rate
    rate = rounds(rate, 0)//round(rate,2)
    return rate// return the correct rate
}

// make a function to alert 'You are right!!'
function alert_right() {// alert_right()
    d = d + 1// set the number of times the button is clicked
    r = r + 1// set the right number
    alert('You are right!!')// alert: You are right!!
    tr()
}

function alert_not_right() {
    d = d + 1// set the number of times the button is clicked
    w = w + 1// set the wrong number
    alert("You aren't right.")// alert:You aren't right.
    tr()
}
function tr() {
    t = true// set t to true
}
function play() {
    if (t) {// if t is true
        bf_imagess = imagess// set bf_imagess to imagess
        imagess = choose(qu)// choose a value in the list
        clear_all()// clear the background
        while (bf_imagess == imagess) {// while bf_imagess is not equal to imagess
            bf_imagess = imagess// set bf_imagess to imagess
            imagess = choose(qu)// choose a value in the list
        }
        image(imagess[0][0], 100, 100, imagess[2], imagess[3])// item, x,y,w,h
    }//none
    t = false// set t to false
    imagess[1].mousePressed(alert_right)// make the image can be clicked
    imagesss = arrayRemove(liii, imagess[1])// remove the image from the list
    //console.log('draw:'+azz+'   img='+imaa[1])// show the number of times draw() will run
    imagesss[0].mousePressed(alert_not_right)// make the image can be clicked
    imagesss[1].mousePressed(alert_not_right)// make the image can be clicked
    imagesss[2].mousePressed(alert_not_right)// make the image can be clicked
}
