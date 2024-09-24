define(function(require, exports, module) {
    var viruleCoillde = require('./ViruleCoillde');
    var thingArr = viruleCoillde.thingArr;
    var distance = viruleCoillde.distance;
    var powerE = viruleCoillde.powerE;
    var point = viruleCoillde.point;
    var friction = viruleCoillde.friction;
    var thing = function(ctx, img, id, x, y, velocity, mass, radius, color) {
        this.ctx = ctx;
        this.img = img;
        //质量
        this.m = mass;
        //速度
        this.v = velocity;
        // //加速度
        // this.accelerated = a;
        // 半径
        this.r = radius;
        //位置
        this.x = x;
        this.y = y;
        this.id = id;
        this.color = color;
    };
    // x为ture，为碰撞水平方向的墙，y为ture，为碰撞垂直方向的墙
    thing.prototype.collide = function(thing2) {
        var dis = distance(this, thing2);
        if (dis < this.r + thing2.r) {
            var f = 5 * (this.r + thing2.r - dis);
            var direction = new point(this.x - thing2.x, this.y - thing2.y);
            this.v.x += direction.x * f * friction / (direction.l * this.m + 0.0001);
            this.v.y += direction.y * f * friction / (direction.l * this.m + 0.0001);
            // console.log(this.x, this.y, this.v);
        }
    };
    thing.prototype.inRange = function(x, y) {
        //value指需要判定的值,margin指临界值，direction指方向：1为margin<value为正常，-1为margin>value为正常
        function collideMargin(value, margin, direction) {
            var f = (value - margin) * direction;
            f = f > 0 ? 0 : -f * direction;
            return f;
        }
        if (this.x < this.r) {
            this.v.x += collideMargin(this.x, this.r, 1) * friction / (this.m);
        }
        if (this.y < this.r) {
            this.v.y += collideMargin(this.y, this.r, 1) * friction / (this.m);
        }
        if (this.x > x - this.r) {
            this.v.x += collideMargin(this.x, x - this.r, -1) * friction / (this.m);
        }
        if (this.y > y - this.r) {
            this.v.y += collideMargin(this.y, y - this.r, -1) * friction / (this.m);
            this.v.y *= 0.96;
        }
        // if (Math.abs(this.v.x) < 10) {
        //     this.v.x = 0;
        // } else {
        //     this.v.x *= 0.9;
        // }

        // console.log(this.v);
    }
    thing.prototype.draw = function() {
        this.ctx.fillStyle = "#000";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        // this.ctx.stroke();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    };
    thing.prototype.update = function() {
        this.x += this.v.x;
        this.y += this.v.y;
    };
    thing.prototype.fixedUpdate = function() {
        this.inRange(800, 550);
        for (var i = 0; i < thingArr.length; i++) {
            if (i != this.id) {
                this.collide(thingArr[i]);
            }
        };
    };
    thing.prototype.g=function(){
        this.v.y += 0.001;
    }
    module.exports = thing;
});
