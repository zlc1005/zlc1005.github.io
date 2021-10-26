function preload() { // preload() is load all the images
    backgroundImg = createImg("https://zlc1005.github.io/garbage/background.jpg",'a')
    recy = createImg('https://zlc1005.github.io/garbage/a.bmp','a')
    kit = createImg('https://zlc1005.github.io/garbage/c.bmp','a')
    har = createImg('https://zlc1005.github.io/garbage/d.bmp','a')
    other =createImg('https://zlc1005.github.io/garbage/e.bmp','a')
    recy.size(60*2,80*2)// set the size of recy
    kit.size(60*2,80*2)// set the size of kit
    har.size(60*2,80*2)// set the size of har
    other.size(60*2,80*2)// set the size of other 
    recy.position(696,106)// set the position of recy
    kit.position(696+60*2,106+80*2)// set the position of kit
    har.position(817,106)// set the position of har
    other.position(817-60*2,106+80*2)// set the position of other
    apple = [loadImage("https://zlc1005.github.io/garbage/apple.jpg"),'apple']// apple
    banana = [loadImage('https://zlc1005.github.io/garbage/xj.jpg'),'banana']// banana
    coke = [loadImage('https://zlc1005.github.io/garbage/kl.jpg'),'coke']// coke
    dhj = [loadImage('https://zlc1005.github.io/garbage/dhj.jpg'),'dhj']// dhj
    news = [loadImage('https://zlc1005.github.io/garbage/bz.jpg'),'news']// news
    battery = [loadImage('https://zlc1005.github.io/garbage/dc.jpg'),'battery']// battery
    pizza = [loadImage('https://zlc1005.github.io/garbage/pizza.png'), 'pizza']// pizza
    pc = [loadImage('https://zlc1005.github.io/garbage/dn.jpg'), 'pc']// pc
    paper = [loadImage('https://zlc1005.github.io/garbage/cz.webp'), 'paper']// webp
    battle = [loadImage('https://zlc1005.github.io/garbage/slsp.jpg'), 'battle']// battle
    light = [loadImage('https://zlc1005.github.io/garbage/dp.jpg'), 'light']// light
    yytt = [loadImage('https://zlc1005.github.io/garbage/yt.jpg'), 'yytt']// yytt
    liii=[recy,kit,har,other]// set the list of all the images
}
imgxy=100,100// set the position of the image
d=0//点击次数
r=0//right次数
function setup() { // setup() is set up the canvas
    console.log('setup')// show the log in the console
    azz=0// set azz=0
    createCanvas(1000, 700) // set the canvas size 
    qu=[// set the list of all the images
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
    scoreElem = createDiv()// create a div
    scoreElem.position(20, 20)// set position of the div
    scoreElem.style('color', 'white')// set the color of the div
    //backgroundImg.mousePressed(quq)
}
// make a function to show some text on screen
function showText(text, x, y ,color='black') { // showText(text, x, y, color)
    scoreElem.position(x, y)// set position of the div
    scoreElem.style('color', color)// set the color of the div
    scoreElem.html(text)// set the text of the div
}
function draw() {// draw() is to draw the canvas
    azz=azz+1// Set the number of times draw() will run
    backgroundImg.size(1000, 700)// set the size of the background image
    backgroundImg.position(0, 0)// set the position of the background image
    asd=mouseX+','+mouseY// get the position of the mouse
    show_time()// show the time
    showText(asd,0,20)// show the position of the mouse
    imaa=choose(qu)// choose a value in the list
    show_image(imaa[0][0],100,100)// show the image
    imaa[1].mousePressed(alert_right)// make the image can be clicked
    asdfg=arrayRemove(liii,imaa)// remove the image from the list
    console.log('draw:'+azz+'   img='+imaa[1])// show the number of times draw() will run
    asdfg[0].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[1].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[2].mousePressed(alert_not_right)// make the image can be clicked
    showText('right:'+r+'  wrong:'+d-r+'   Correct Rate:'+zql(r,d)+'%',0,40)// show the score and the correct rate
    setTimeout(function(){}, 2000)
}
// make a function to show a image on screen
function show_image(img, x, y) { // show_image(img, x, y)
    image(img, x, y)// show the image
}// none
// make a function to show the time on 0,0
function show_time() { // show_time()
    showText(hour() + ':' + minute() + ':' + second(), 0, 0)// show the time
}//none
// make a function to choose a value in a list
function choose(list) {// choose(list)
    return list[floor(random(list.length))]// return a value in the list
}//none
// make a function to round a number
function round(num, n) { // round(num, n)
    return Math.round(num * Math.pow(10, n)) / Math.pow(10, n)// return a number after rounding
}
// make a function, if a=[1,2,3,4] and b=2, return [1,3,4]
function arrayRemove(arr, value) { // arrayRemove(arr, value)
    return arr.filter(function(ele){ // filter() is to filter the value in the list
        return ele != value;// return the value that is not equal to the value
    });
}
// =====================================================================================================================
function zql(a, b) {// zql(a, b)
    rate = a / b * 100// rate is the correct rate
    rate=round(rate,2)//round(rate,2)
    return rate// return the correct rate
}
// make a function to alert 'You are right!!'
function alert_right() {// alert_right()
    d=d+1// set the number of times the button is clicked
    r=r+1// set the right number
    alert('You are right!!')// alert: You are right!!
}
function alert_not_right() {
    d=d+1// set the number of times the button is clicked
    alert("You aren't right.")// alert:You aren't right.
}
