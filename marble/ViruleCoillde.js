define(function(require, exports, module) {
    var viruleCoillde = {
        thingArr: [],
        powerE: 206 * 10.2 / 9.8,
        timeScale: 10,
        minDistance: 12,
        friction:0.1,
        // var distanceScale = 10;
        // var massScale = 10;
        distance: function(thing1, thing2) {
            return Math.pow(Math.pow(thing1.x - thing2.x, 2) + Math.pow(thing1.y - thing2.y, 2), 0.5);
        },

        point: function(x, y) {
            this.x = x;
            this.y = y;
            this.l = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5)
        },
        randomColor:function(){
        	return "#" + Math.floor(Math.random() * 256 * 256 * 256).toString(16);
        },
    };
    return viruleCoillde;
});
