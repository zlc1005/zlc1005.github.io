open console

input
```js
function TrexRunnerBot(){function f(){Runner().onKeyDown(d);setTimeout(function(){Runner().onKeyUp(d)},500)}var b=function(a){return{keyCode:a,preventDefault:function(){}}},c=b(38),d=b(40),e=b(32);Runner().playing||(Runner().onKeyDown(e),setTimeout(function(){Runner().onKeyUp(e)},500));return{conquerTheGame:function(){if(Runner&&Runner().horizon.obstacles[0]){var a=Runner().horizon.obstacles[0];if((!a.typeConfig||"SNACK"!==a.typeConfig.type)&&50!==a.yPos&&a.xPos<=18*Runner().currentSpeed)if(50=== a.yPos)f();else{var b=Runner().horizon.obstacles[1];if(b&&b.xPos-a.xPos<=42*Runner().currentSpeed)Runner().onKeyDown(c),Runner().onKeyUp(c);else Runner().onKeyDown(c)}}}}}var bot=TrexRunnerBot(),botInterval=setInterval(bot.conquerTheGame,2);
```
and somebody help you play
