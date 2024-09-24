define(function(require, exports, module) {
    var loadImages = require('./loadImages');
    var ViruleCoillde = require('./ViruleCoillde');
    var imgUrls = [{
        name: 'point',
        path: './res/circle.png'
    }];
    var cvs = document.getElementById('cvs');
    var ctx = cvs.getContext('2d');
    var thingArr = ViruleCoillde.thingArr;
    var minDistance = ViruleCoillde.minDistance;
    var randomColor = ViruleCoillde.randomColor;
    var callback = function(imgEls) {
        var thing = require("./thing.js");
        var getR = function(v) {
            return (0.5 - Math.random()) * v / Math.pow(3, 0.5);
        };
        var thingLength = parseInt(prompt("请输入小球个数(2-50)"));
        if (!thingLength) {
            thingLength = 10;
        }
        if (thingLength > 500) {
            thingLength = 500;
        }
        for (var i = 0; i < thingLength; i++) {
            t = new thing(ctx, imgEls['point'], i, Math.random() * 800, Math.random() * 600, new ViruleCoillde.point(getR(minDistance), getR(minDistance)), minDistance, minDistance, randomColor());
            thingArr.push(t);
        };
        var mousePoint = new thing(ctx, imgEls['point'], -1, Math.random() * 800, Math.random() * 600, new ViruleCoillde.point(0, 0), 10000, 100, "rgba(255,255,255,0)");
        thingArr.push(mousePoint);
        cvs.onmousemove = function(e) {
            mousePoint.x = e.pageX - cvs.offsetLeft;
            mousePoint.y = e.pageY - cvs.offsetTop;
            mousePoint.v = new ViruleCoillde.point(0, 0);
            // console.log(mousePoint.x, mousePoint.y);
        }
        var looper = function() {

            for (var i = 0; i < thingArr.length; i++) {
                thingArr[i].fixedUpdate();
            };
            for (var i = 0; i < thingArr.length; i++) {

                thingArr[i].update();
                if (thingArr[i].id != -1) {
                    thingArr[i].g();
                }
            };
            ctx.clearRect(0, 0, 800, 600);
            for (var i = 0; i < thingArr.length; i++) {
                thingArr[i].draw();
            };
            requestAnimationFrame(looper);
        };
        requestAnimationFrame(looper);
    }

    // 调用图片加载函数
    loadImages(imgUrls, callback);
});
