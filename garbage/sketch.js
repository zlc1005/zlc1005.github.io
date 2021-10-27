function preload() { // preload() is load all the images
    backgroundImg = createImg("http://zlc1005.github.io/garbage/background.jpg", 'a')
    recy = createImg('http://zlc1005.github.io/garbage/a.bmp', 'a')
    kit = createImg('http://zlc1005.github.io/garbage/c.bmp', 'a')
    har = createImg('http://zlc1005.github.io/garbage/d.bmp', 'a')
    other = createImg('http://zlc1005.github.io/garbage/e.bmp', 'a')
    recy.size(60 * 2, 80 * 2)// set the size of recy
    kit.size(60 * 2, 80 * 2)// set the size of kit
    har.size(60 * 2, 80 * 2)// set the size of har
    other.size(60 * 2, 80 * 2)// set the size of other 
    recy.position(696, 106)// set the position of recy
    kit.position(696 + 60 * 2, 106 + 80 * 2)// set the position of kit
    har.position(817, 106)// set the position of har
    other.position(817 - 60 * 2, 106 + 80 * 2)// set the position of other
    apple = createImg("http://zlc1005.github.io/garbage/apple.jpg", 'a')// apple
    banana = createImg('http://zlc1005.github.io/garbage/xj.jpg', 'a')// banana
    coke = createImg('http://zlc1005.github.io/garbage/kl.jpg', 'a')// coke
    dhj = createImg('http://zlc1005.github.io/garbage/dhj.jpg', 'a')// dhj
    news = createImg('http://zlc1005.github.io/garbage/bz.jpg', 'a')// news
    battery = createImg('http://zlc1005.github.io/garbage/dc.jpg', 'a')// battery
    pizza = createImg('http://zlc1005.github.io/garbage/pizza.png', 'a')// pizza
    pc = createImg('http://zlc1005.github.io/garbage/dn.jpg', 'a')// pc
    paper = createImg('http://zlc1005.github.io/garbage/cz.webp', 'a')// webp
    battle = createImg('http://zlc1005.github.io/garbage/slsp.jpg', 'a')// battle
    light = createImg('http://zlc1005.github.io/garbage/dp.jpg', 'a')// light
    yytt = createImg('http://zlc1005.github.io/garbage/yt.jpg', 'a')// yytt
    liii = [recy, kit, har, other]// set the list of all the images
    xxxx()// set the list of all the images size and position
}
imgxy = 100, 100// set the position of the image
d = 0//点击次数
r = 0//right次数
function setup() { // setup() is set up the canvas
    console.log('setup')// show the log in the console
    azz = 0// set azz=0
    qutimes = 0// set question times is 0
    createCanvas(1000, 700) // set the canvas size 
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
    scoreElem = createDiv()// create a div
    scoreElem.position(20, 20)// set position of the div
    scoreElem.style('color', 'white')// set the color of the div
    backgroundImg.size(1000, 700)// set the size of the background image
    backgroundImg.position(0, 0)// set the position of the background image
    //backgroundImg.mousePressed(quq)
}
// make a function to show some text on screen
function showText(text, x, y, color = 'black') { // showText(text, x, y, color)
    scoreElem.position(x, y)// set position of the div
    scoreElem.style('color', color)// set the color of the div
    scoreElem.html(text)// set the text of the div
}
function draw() {// draw() is to draw the canvas
    azz = azz + 1// Set the number of times draw() will run
    asd = mouseX + ',' + mouseY// get the position of the mouse
    //show_time()// show the time
    //showText(asd,0,20)// show the position of the mouse
    imaa = choose(qu)// choose a value in the list
    set_position_size(imaa[0], imaa[2], imaa[3])// set the position and size of the image
    imaa[1].mousePressed(alert_right)// make the image can be clicked
    asdfg = arrayRemove(liii, imaa)// remove the image from the list
    console.log('draw:' + azz + '   img=' + imaa[1])// show the number of times draw() will run
    asdfg[0].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[1].mousePressed(alert_not_right)// make the image can be clicked
    asdfg[2].mousePressed(alert_not_right)// make the image can be clicked
    showText('right:' + r + '  wrong:' + d - r + '   Correct Rate:' + zql(r, d) + '%', 0, 40)// show the score and the correct rate
    for (var i = 0; i < 5 * 600 ; i++) {// do the loop for 5 seconds
        wait(1)
        qutimes++// set the number of times the question will run
        showText('question due time : ' + rounds(qutimes / 1000, 0) + 's', 0, 20)  // show the number of times the question will run
    }
    qutimes = 0  // set the number of times the question will run
}
// make a function to show the time on 0,0
function show_time() { // show_time()
    showText(hour() + ':' + minute() + ':' + second(), 0, 0)// show the time
}//none
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
//////// ===================================================================================================================== ////////
function zql(a, b) {// zql(a, b)
    rate = a / b * 100// rate is the correct rate
    rate = rounds(rate, 2)//round(rate,2)
    return rate// return the correct rate
}
// make a function to alert 'You are right!!'
function alert_right() {// alert_right()
    d = d + 1// set the number of times the button is clicked
    r = r + 1// set the right number
    alert('You are right!!')// alert: You are right!!
}
function alert_not_right() {
    d = d + 1// set the number of times the button is clicked
    alert("You aren't right.")// alert:You aren't right.
}
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
// make a function to set apple, banana, coke, dhj, news, battery, pizza, pc, paper, battle, light, yytt size

function set_position(imgxy) {// set_position(apple, banana, coke, dhj, news, battery, pizza, pc, paper, battle, light, yytt)
    apple.position(imgxy, imgxy)// set the position of the apple
    banana.position(imgxy, imgxy)// set the position of the banana
    coke.position(imgxy, imgxy)// set the position of the coke
    dhj.position(imgxy, imgxy)// set the position of the dhj
    news.position(imgxy, imgxy)// set the position of the news
    battery.position(imgxy, imgxy)// set the position of the battery
    pizza.position(imgxy, imgxy)// set the position of the pizza
    pc.position(imgxy, imgxy)// set the position of the pc
    paper.position(imgxy, imgxy)// set the position of the paper
    battle.position(imgxy, imgxy)// set the position of the battle
    light.position(imgxy, imgxy)// set the position of the light
    yytt.position(imgxy, imgxy)// set the position of the yytt
}
function set_size(imgxy) {
    apple.size(imgxy, imgxy)// set the size of the apple
    banana.size(imgxy, imgxy)// set the size of the banana
    coke.size(imgxy, imgxy)// set the size of the coke
    dhj.size(imgxy, imgxy)// set the size of the dhj
    news.size(imgxy, imgxy)// set the size of the news
    battery.size(imgxy, imgxy)// set the size of the battery
    pizza.size(imgxy, imgxy)// set the size of the pizza
    pc.size(imgxy, imgxy)// set the size of the pc
    paper.size(imgxy, imgxy)// set the size of the paper
    battle.size(imgxy, imgxy)// set the size of the battle
    light.size(imgxy, imgxy)// set the size of the light
    yytt.size(imgxy, imgxy)// set the size of the yytt
}
// make a function
function xxxx() { // set the size and position of the apple, banana, coke, dhj, news, battery, pizza, pc, paper, battle, light, yytt
    set_position(0)
    set_size(1)
}
// make a function to set the position and size of images
function set_position_size(a, imgx, imgy) {// set_position_size(apple, banana, coke, dhj, news, battery, pizza, pc, paper, battle, light, yytt)
    apple.position(100, 100)// set the position of the a
    yytt.size(imgx, imgy)// set the size of the a
}
