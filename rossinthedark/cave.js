function getInt(e) {
	return Math.floor(Math.random() * 1e5) % e
}
function distanceBetweenPoints(e, t, n, r) {
	return Math.sqrt((e - n) * (e - n) + (t - r) * (t - r))
}
function distanceBetweenPointsP(e, t) {
	return distanceBetweenPoints(e.x, e.y, t.x, t.y)
}
function removeClip(e) {
	if (e && e.parent) e.parent.removeChild(e)
}
function isMobile() {
	var e = navigator.userAgent || navigator.vendor;
	return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|android|ipad|playbook|silk|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}
function cjp(e, t) {
	return new createjs.Point(e, t)
}
function createSpriteFromSpritesheet(e, t) {
	if (typeof t === "undefined") {
		t = 0
	}
	var n = new createjs.Sprite(App.game.atlases[t], e);
	n.gotoAndStop(e);
	n.framerate = 30;
	return n
}
function safeTrackEvent(e, t) {
	try {
		FlurryAgent.logEvent(e, t)
	} catch(t) {
		console.log("cant track event: ", e)
	}
}
function addChild(e, t) {
	t.addChild(e)
}
function createBitmap(e) {
	var t = new createjs.Bitmap(App.game.preloader.loader.getResult(e));
	return t
}
function setReg(e, t, n, r) {
	if (typeof t === "undefined") {
		t = .5
	}
	if (typeof n === "undefined") {
		n = .5
	}
	if (typeof r === "undefined") {
		r = true
	}
	e.regX = (r ? e.getBounds().width: 1) * t;
	e.regY = (r ? e.getBounds().height: 1) * n
}
function limitDt(e) {
	return e
}
function limit(e, t, n) {
	if (e < t) e = t;
	if (e > n) e = n;
	return e
}
function lerp(e, t, n) {
	return e + n * (t - e)
}
function lerpAngle(e, t, n) {
	var r = Math.abs(t - e);
	if (r > 180) {
		if (t > e) e += 360;
		else t += 360
	}
	var i = e + (t - e) * n;
	return normalizeAngle(i)
}
function angleBetween(e, t, n, r) {
	return Math.atan2(r - t, n - e)
}
function normalizeAngle(e, t, n) {
	if (typeof t === "undefined") {
		t = 0
	}
	if (typeof n === "undefined") {
		n = 360
	}
	while (e > n) e -= 360;
	while (e < t) e += 360;
	return e
}
function sign(e) {
	return e > 0 ? 1 : -1
}
function rotatePoint(e, t) {
	t *= Math.PI / 180;
	var n = Math.sin(t);
	var r = Math.cos(t);
	var i = e.x * r - e.y * n;
	var s = e.x * n + e.y * r;
	e.x = i;
	e.y = s
}
function createAnimation(e, t, n, r, i, s, o, u) {
	if (typeof s === "undefined") {
		s = 1
	}
	if (typeof o === "undefined") {
		o = null
	}
	if (typeof u === "undefined") {
		u = 0
	}
	var a = [];
	for (var f = r; f <= i; ++f) {
		var l = e.animations[n + (f <= 9 ? "000": "00") + f][0];
		if (l == undefined || l == null || isNaN(l)) console.log("ERROR");
		var c = 1 + (f == i ? u: 0);
		for (var h = 0; h < c; ++h) a.push(l)
	}
	e.animations[t] = {
		frames: a,
		next: o ? o: t,
		speed: s
	}
}
function linePoint(e, t, n, r) {
	r.x = e.x + n * (t.x - e.x);
	r.y = e.y + n * (t.y - e.y)
}
function createFontFrames(e) {
	var t = "abcdefghijklmnopqrstuvwxyz1234567890!-./:%";
	for (var n = 0; n < t.length; ++n) {
		var r = t.charCodeAt(n);
		var i = t.charAt(n);
		var s = i.toUpperCase().charCodeAt(0);
		var o = e.animations[r.toString()];
		var u = e.animations[s.toString()];
		var a = o ? o: u;
		if (a) e.animations[i.toLowerCase()] = e.animations[i.toUpperCase()] = a;
		else console.log("FONT ERROR!", i, r)
	}
}
function getTextSize(e) {
	var t = e.text.length;
	var n = e.letterSpacing;
	var r = 0;
	var i = 0;
	for (var s = 0; s < t; ++s) {
		var o = e.text.charAt(s);
		var u = e._getFrame(o, e.spriteSheet);
		if (o == " ") r += e.spaceWidth;
		else {
			i = Math.max(i, u.rect.height);
			r += u.rect.width + (s == 0 ? 0 : n)
		}
	}
	textSize.x = r;
	textSize.y = i;
	return textSize
}
function traceChildren(e, t) {
	if (typeof t === "undefined") {
		t = 0
	}
	var n = e.getBounds();
	var r = e instanceof createjs.Container ? e: null;
	console.log(t, e.x, e.y, n ? n.width: "null", n ? n.height: "null", r != null);
	if (Math.abs(e.x) > 2e3 || Math.abs(e.y) > 2e3) console.log("error!");
	if (r) {
		for (var i = 0; i < r.getNumChildren(); ++i) traceChildren(r.getChildAt(i), t + 1)
	}
}
function touchHandlerDummy(e) {
	e.preventDefault();
	return false
}
function getButtonAnimation(e) {
	var t = new AnimatedNode(App.game.animationManager.getAnimation("buttons anim"), 1 / 30, new SingleFlameSelector(e));
	t.addAction(t.totalFrames - 1, 0);
	return t
}
function isOrientationLocked() {
	return false;
	if (!viewporter || !viewporter.ACTIVE) {
		return false
	}
	var e = window.innerWidth > window.innerHeight && window.innerWidth <= 640;
	return e || viewporter.isLandscape()
}
var DESIGN_FPS = 60;
var CACHE_ENABLED = false;
var ANIM_SCALE = 1.5 * 59 / 60;
var apiInstance;
var splashScreenData;
var needTutorial = true;
var needFpsText = true;
var needShowSplash = true;
var needApi = true;
var needMoreGames = true;
var needCross = true;
var needLockLevels = true;
var allLevelsUnlocked = !needLockLevels;
var isEditorVersion = false;
var DEG_TO_RAD = Math.PI / 180;
var textSize = new createjs.Point;
var spriteSheetInfo;
var jellyAnimation = [[0, 0, 1, 1, 0, 0], [.024999999999997247, -1.15, .9915771484375, 1.0256500244140625, 0, 0], [.05000000000000293, -3.700000000000004, .97265625, 1.083343505859375, 0, 0], [.12499999999999867, -6.200000000000005, .9544219970703125, 1.1389007568359375, 0, 0], [.10000000000000009, -7.300000000000006, .946807861328125, 1.162109375, 0, 0], [.10000000000000009, -7.300000000000006, .946807861328125, 1.162109375, 0, 0], [.05000000000000293, -6.0749999999999975, .9620361328125, 1.1312408447265625, 0, 0], [5.773159728050814e-15, -3.275, .9962615966796875, 1.061798095703125, 0, 0], [.024999999999997247, -.6249999999999942, 1.02923583984375, .994903564453125, 0, 0], [.05000000000000293, .5249999999999972, 1.042999267578125, .9669952392578125, 0, 0], [.07500000000000151, -1.1250000000000013, 1.01068115234375, 1.00726318359375, 0, 0], [.14999999999999725, -2.3750000000000013, .9874267578125, 1.0362396240234375, 0, 0], [.12499999999999867, -2.8750000000000013, .977996826171875, 1.0479736328125, 0, 0], [.12499999999999867, -1.199999999999997, .9898681640625, 1.018829345703125, 0, 0], [.10000000000000009, -.12499999999999423, .9973602294921875, 1.00042724609375, 0, 0], [.10000000000000009, .17499999999999583, 1, .993988037109375, 0, 0], [.05000000000000293, .025000000000004352, 1, .9984588623046875, 0, 0], [ - 1.3322676295501878e-15, -1.3322676295501878e-15, 1, 1, 0, 0], [.05000000000000293, .049999999999995826, 1, 1, 0, 0], [1.7749999999999972, .07500000000000151, 1, 1.0004982491681325, .7527414880487653, 0], [5.825000000000001, .025000000000004352, 1, 1.001664350237178, 2.5152581429922156, 0], [9.274999999999997, .049999999999995826, 1, 1.0026699631071858, 4.031232289654886, 0], [10.700000000000001, .049999999999995826, 1, 1.0032807863162294, 4.644965767715552, 0], [8.274999999999997, .05000000000000293, 1, 1.0027891286212487, 3.539021537307087, 0], [1.8749999999999987, .049999999999995826, 1, 1.0021068045460955, .7807179428891375, 0], [ - 1.3750000000000013, .05000000000000293, 1, 1.0012419476751582, -1.5640586784195598, 0], [ - 2.0499999999999985, .049999999999995826, 1, 1.0010724593956364, -2.6542661529803153, 0], [ - 1.5499999999999985, .049999999999995826, 1, 1.000676433996075, -1.8001100161352006, 0], [ - .5000000000000013, .049999999999995826, 1, 1.0002103088230885, -.5280555851120258, 0], [.05000000000000293, .049999999999995826, 1, 1, 0, 0], [.05000000000000293, .049999999999995826, 1, 1, 0, 0], [.14999999999999725, -.44999999999999707, .9672088623046875, 1.0127410888671875, 0, 0], [.17499999999999583, -1.1250000000000013, .9302825927734375, 1.0271148681640625, 0, 0], [.2500000000000058, -1.5499999999999985, .9080352783203125, 1.0357666015625, 0, 0], [.24999999999999867, -1.65, .9017333984375, 1.0382080078125, 0, 0], [.14999999999999725, -.7500000000000013, .929656982421875, 1.016571044921875, 0, 0], [.05000000000000293, 2.0750000000000015, 1.009918212890625, .954345703125, 0, 0], [ - .1750000000000056, 5.124999999999998, 1.09759521484375, .886383056640625, 0, 0], [ - .02499999999999991, 3.2749999999999972, 1.0360107421875, .9274749755859375, 0, 0], [.10000000000000009, 1.4249999999999958, .9744415283203125, .9685516357421875, 0, 0], [.24999999999999867, -.37500000000000133, .9128570556640625, 1.0096435546875, 0, 0], [.14999999999999725, .8250000000000015, .9672088623046875, .9827728271484375, 0, 0], [ - 1.3322676295501878e-15, 2.049999999999996, 1.021575927734375, .9558868408203125, 0, 0], [ - .10000000000000275, 3.2499999999999987, 1.075927734375, .92901611328125, 0, 0], [.049999999999995826, .5750000000000015, 1.0054473876953125, .9878997802734375, 0, 0], [.2000000000000015, -2.074999999999997, .934967041015625, 1.0467987060546875, 0, 0], [.14999999999999725, -1.0000000000000013, .9674835205078125, 1.0233917236328125, 0, 0], [.05000000000000293, .049999999999995826, 1, 1, 0, 0]];
var animationLen = jellyAnimation.length;
var mapButtons = [[[93.4, -72.55], [250.2, -71.5], [404.6, -64.95], [527.25, -150.6], [525, -297.4], [376.95, -347.45], [185.3, -329.5], [85.3, -465.05], [225.15, -547.2], [397.35, -505.65], [531.45, -594.6], [541, -749.7], [372.3, -781.2], [167.9, -777.8], [74.05, -929.35], [172.3, -1071.75], [314.9, -967.25], [492.2, -1006.35], [522.25, -1155.6], [377.35, -1270.95], [193.75, -1250], [113.5, -1415.4], [283.5, -1463.55], [372.4, -1610.3], [477.7, -1733.95], [529.95, -1871.3], [417.4, -2026.35], [324.75, -1857.5], [147.75, -1819.4], [83.25, -1973.2], [521.5, -284], [502.6, -441.4], [360.1, -491.75], [229.5, -390.8], [73.4, -450.25], [72.6, -614.6], [239.2, -622.75], [383.05, -691.9], [538.4, -749.45], [529.65, -923.05], [326.3, -978.45], [124.7, -943.6], [62.5, -1157.65], [191, -1278.15], [334.35, -1216.5], [513, -1200.3], [531.95, -1337.75], [531.95, -1484.25], [395.7, -1545.35], [225.65, -1503.25], [127.85, -1621.2], [72.2, -1774.3], [223.95, -1823.4], [337.2, -1718.7], [498.3, -1784.1], [481.15, -1943.3], [343.95, -2046.15], [192.1, -2019.2], [79.5, -2150.9], [268.1, -2207.25]], [[93.4, -72.55], [250.2, -71.5], [404.6, -64.95], [527.25, -150.6], [525, -297.4], [376.95, -347.45], [185.3, -329.5], [85.3, -465.05], [225.15, -547.2], [397.35, -505.65], [531.45, -594.6], [541, -749.7], [372.3, -781.2], [167.9, -777.8], [74.05, -929.35], [172.3, -1071.75], [314.9, -967.25], [492.2, -1006.35], [522.25, -1155.6], [377.35, -1270.95], [193.75, -1250], [113.5, -1415.4], [283.5, -1463.55], [372.4, -1610.3], [477.7, -1733.95], [529.95, -1871.3], [417.4, -2026.35], [324.75, -1857.5], [147.75, -1819.4], [83.25, -1973.2]], [[521.5, -284], [502.6, -441.4], [360.1, -491.75], [229.5, -390.8], [73.4, -450.25], [72.6, -614.6], [239.2, -622.75], [383.05, -691.9], [538.4, -749.45], [529.65, -923.05], [326.3, -978.45], [124.7, -943.6], [62.5, -1157.65], [191, -1278.15], [334.35, -1216.5], [513, -1200.3], [531.95, -1337.75], [531.95, -1484.25], [395.7, -1545.35], [225.65, -1503.25], [127.85, -1621.2], [72.2, -1774.3], [223.95, -1823.4], [337.2, -1718.7], [498.3, -1784.1], [481.15, -1943.3], [343.95, -2046.15], [192.1, -2019.2], [79.5, -2150.9], [268.1, -2207.25]]];
var __extends = this.__extends ||
function(e, t) {
	function r() {
		this.constructor = e
	}
	for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
	r.prototype = t.prototype;
	e.prototype = new r
};
var ObjectPool = function() {
	function e() {
		this.fieldObjects = new Array;
		this.destroyAnimations = [];
		this.shields = [];
		this.cages = [];
		this.scores = {};
		var e = 90;
		for (var t = 0; t < 6; ++t) {
			if (t == 5) e = 15;
			var n = [];
			for (var r = 0; r < e; ++r) {
				n.push(new FieldObject(t))
			}
			if (t <= 3) {
				for (var r = 0; r < e; ++r) this.destroyAnimations.push(new GemDestroyAnimation)
			}
			this.fieldObjects.push(n)
		}
		for (var t = 3; t < 20; ++t) {
			var i = this.getText(Match3Level.getComboScore(t).toString(), null, 0, 0, 0);
			var s = this.getText(Match3Level.getComboScore(t).toString(), null, 0, 0, 0);
			this.returnText(i);
			this.returnText(s)
		}
		for (var t = 0; t < 50; ++t) {
			this.shields.push(new ShieldRemoveSprite);
			this.cages.push(new ColorBlockDestroyAnimation)
		}
	}
	e.prototype.getText = function(e, t, n, r, i) {
		if (typeof r === "undefined") {
			r = -1
		}
		if (typeof i === "undefined") {
			i = -1
		}
		var s = this.scores[e];
		if (!s) {
			s = [];
			this.scores[e] = s
		}
		var o = s.length > 0 ? s.splice(0, 1)[0] : new JumpText(e, n);
		o.init(r > 0 || !t ? r: t.pos.x, i > 0 || !t ? i: t.pos.y, t);
		return o
	};
	e.prototype.returnText = function(e) {
		var t = e.text;
		var n = this.scores[t];
		if (!n) {
			n = [];
			this.scores[t] = n
		}
		e.release();
		n.push(e)
	};
	e.prototype.getObject = function(e, t, n, r, i, s) {
		if (typeof s === "undefined") {
			s = 0
		}
		if (r > Match3Level.instance.assetNumber) r = -1;
		while (true) {
			var o = r >= 0 ? r: getInt(Math.min(n, this.fieldObjects.length));
			if (i[o] && this.fieldObjects[o].length > 0) {
				var u = this.fieldObjects[o].splice(0, 1)[0];
				u.init(e, t);
				if (Math.random() < s) u.setShield(1);
				return u
			}
			r = -1
		}
		return null
	};
	e.prototype.returnObject = function(e) {
		e.release();
		this.fieldObjects[e.colorType].push(e)
	};
	e.prototype.getDestroyAnimation = function(e, t, n, r) {
		var i = this.destroyAnimations.splice(0, 1)[0];
		i.init(t, n, r);
		return i
	};
	e.prototype.returnGemDestroy = function(e) {
		this.destroyAnimations.push(e);
		e.release()
	};
	e.prototype.getShield = function(e, t, n) {
		if (this.shields.length > 0) {
			var r = this.shields.splice(0, 1)[0];
			r.init(e, t, n);
			return r
		}
		return null
	};
	e.prototype.returnShield = function(e) {
		this.shields.push(e)
	};
	e.prototype.getCage = function(e, t, n) {
		if (this.cages.length > 0) {
			var r = this.cages.splice(0, 1)[0];
			r.init(e, t, n);
			return r
		}
		return null
	};
	e.prototype.returnCage = function(e) {
		this.cages.push(e)
	};
	return e
} ();
var GameObject = function() {
	function e() {
		this.sprite = null;
		this.isDestroyed = false;
		this.isWaitingForDestruction = false;
		this.isLocked = false;
		this.stage = App.game.stage;
		this.level = Match3Level.instance
	}
	e.prototype.canBeVisible = function(e) {
		return true
	};
	e.prototype.update = function(e) {};
	e.prototype.destroy = function() {
		removeClip(this.sprite);
		this.sprite = null;
		this.isDestroyed = true
	};
	return e
} ();
var FieldBonusType; (function(e) {
	e[e["kBonusNone"] = 0] = "kBonusNone";
	e[e["kHorizontalLize"] = 1] = "kHorizontalLize";
	e[e["kVerticalLine"] = 2] = "kVerticalLine"
})(FieldBonusType || (FieldBonusType = {}));
var TweenData = function() {
	function e() {
		this.initPos = new createjs.Point;
		this.endPos = new createjs.Point;
		this.currentTime = 0;
		this.totalTime = 0;
		this.corner = false
	}
	e.prototype.init = function(e, t, n, r, i, s) {
		this.initPos.x = e;
		this.initPos.y = t;
		this.endPos.x = n;
		this.endPos.y = r;
		this.totalTime = i;
		this.currentTime = 0;
		this.corner = s
	};
	e.prototype.update = function(e, t) {
		this.currentTime += e;
		var n = false;
		if (this.currentTime >= this.totalTime) {
			this.currentTime = this.totalTime;
			n = true
		}
		var r = this.currentTime / this.totalTime;
		if (!this.corner) r *= r * r;
		t.pos.x = this.initPos.x + (this.endPos.x - this.initPos.x) * r;
		t.pos.y = this.initPos.y + (this.endPos.y - this.initPos.y) * r;
		if (n) t.stopMove()
	};
	return e
} ();
var FieldObject = function(e) {
	function t(t) {
		e.call(this);
		this.isMoving = true;
		this.SPEED = 200;
		this.lastTarget = new createjs.Point(0, 0);
		this.currentTile = 6;
		this.bonusType = 0;
		this.isActive = false;
		this.isCustom = false;
		this.moveCornerCount = 0;
		this.timeSinceStop = 0;
		this.isMovedAfterCorner = false;
		this.rowMoveAfterConterCount = 0;
		this.currentFrame = 0;
		this.isPlaying = false;
		this.animationPower = 1;
		this.animationSpeed = 1;
		this.stopSpeed = 0;
		this.nextIdleTime = 0;
		this.timeSinceAnim = 0;
		this.isCached = false;
		this.playBonusAnimationIn = -1;
		this.playEyeIn = 1e10;
		this.frameTime = 1 / 18;
		this.pos = new createjs.Point(0, 0);
		this.animPos = new createjs.Point(0, 0);
		this.tween = new TweenData;
		this.removeSelectIn = -1;
		this.isSelected = false;
		this.prevNeighbours = [null, null, null, null];
		this.shieldsLeft = -1;
		this.colorType = t;
		this.sprite = new createjs.Container;
		this.mainSprite = new createjs.Sprite(App.game.atlases[1], this.getFileName());
		this.mainSprite.gotoAndStop(this.getFileName());
		this.sprite.addChild(this.mainSprite);
		var n = this.sprite.getBounds();
		this.mainSprite.regX = n.width / 2;
		this.mainSprite.regY = n.height / 2;
		this.selectSprite = new createjs.Container;
		this.circleSelectSprite = createSpriteFromSpritesheet("select_spell");
		this.circleSelectSprite.regX = this.circleSelectSprite.getBounds().width / 2 + 1;
		this.circleSelectSprite.regY = this.circleSelectSprite.getBounds().height / 2;
		this.bonusSelectSprite = createSpriteFromSpritesheet("line_light", 1);
		this.bonusSelectSprite.regX = this.bonusSelectSprite.getBounds().width / 2;
		this.bonusSelectSprite.regY = this.bonusSelectSprite.getBounds().height / 2;
		this.bonusSelectSprite.scaleY = Match3Level.LEVEL_H * Match3Level.TILE_SIZE / 50;
		this.selectSprite.addChild(this.bonusSelectSprite);
		this.selectSprite.addChild(this.circleSelectSprite);
		this.bonusSprite = createSpriteFromSpritesheet("bonus_marker");
		this.bonusSprite.regX = this.bonusSprite.getBounds().width / 2;
		this.bonusSprite.regY = this.bonusSprite.getBounds().height / 2;
		this.setEyeSprite()
	}
	__extends(t, e);
	t.prototype.hasShield = function() {
		return this.shieldsLeft > 0
	};
	t.prototype.setShield = function(e) {
		if (e > 0 && this.cell && this.cell.isColorBlocked) return;
		var t = this.hasShield();
		e = e > 0 ? 1 : -1;
		if (e != this.shieldsLeft) {
			this.shieldsLeft = e;
			if (e == 1) {} else {
				var n = Match3Level.pool.getShield(this.sprite.x, this.sprite.y, this.colorType);
				if (n) this.level.objects.push(n)
			}
		}
		this.updateMainSprite();
		if (t && !this.hasShield()) SoundsManager.instance.playSound("monster_defence")
	};
	t.prototype.updateSelectSprite = function(e) {
		var t = this.bonusType != 0;
		var n = this.comboSelectBonus != 0;
		if (this.selectSprite.parent) {
			var r = this.isSelected && !t;
			var i = this.isSelected && n;
			var s = limit(this.circleSelectSprite.alpha + (r ? 1 : -1) * e * 7, 0, 1);
			this.circleSelectSprite.alpha = s;
			this.circleSelectSprite.visible = s > 0;
			if (this.circleSelectSprite.visible) {
				this.circleSelectSprite.x = this.sprite.x - this.animPos.x;
				this.circleSelectSprite.y = this.sprite.y - this.animPos.y - 5;
				this.circleSelectSprite.rotation += 45 * e
			}
			var s = limit(this.bonusSelectSprite.alpha + (i ? 1 : -1) * e * 7, 0, 1);
			this.bonusSelectSprite.alpha = s;
			this.bonusSelectSprite.visible = s > 0;
			if (this.bonusSelectSprite.visible && i) {
				this.bonusSelectSprite.rotation = this.comboSelectBonus == 2 ? 0 : 90;
				this.bonusSelectSprite.x = this.comboSelectBonus == 2 ? this.sprite.x: this.level.gridToStageX(3.5);
				this.bonusSelectSprite.y = this.comboSelectBonus == 2 ? this.level.gridToStageY(3.5) : this.sprite.y
			}
			if (this.removeSelectIn > 0 && e > 0 && !(this.cell && this.cell.isWaitingForClear)) {--this.removeSelectIn;
				if (this.removeSelectIn <= 0) {
					this.comboSelectBonus = this.bonusType;
					this.isSelected = false
				}
			}
			if (!this.circleSelectSprite.visible && !this.bonusSelectSprite.visible) removeClip(this.selectSprite)
		}
	};
	t.prototype.setEyeTime = function() {
		this.playEyeIn = lerp(3, 60, Math.random())
	};
	t.prototype.playEye = function() {
		if (!this.eyeSprite) return;
		this.setEyeSprite();
		this.eyeSprite.visible = true;
		this.eyeSprite.play();
		this.setEyeTime()
	};
	t.prototype.setEyeSprite = function() {
		if (this.isPushable) return;
		var e = "eye_" + t.assetNames[this.colorType];
		if (this.eyeSprite) this.eyeSprite.gotoAndStop(e);
		else {
			this.eyeSprite = createSpriteFromSpritesheet(e, 1);
			this.sprite.addChild(this.eyeSprite)
		}
		this.eyeSprite.regX = t.eyeRegs[this.colorType].x;
		this.eyeSprite.regY = t.eyeRegs[this.colorType].y;
		this.eyeSprite.x = t.eyePos[this.colorType].x;
		this.eyeSprite.y = t.eyePos[this.colorType].y;
		this.eyeSprite.framerate = 20;
		this.eyeSprite.visible = false
	};
	t.prototype.select = function() {
		var e = this.isSelected;
		this.isSelected = true;
		this.removeSelectIn = -1;
		if (this.selectSprite.parent) {
			return
		}
		this.level.underGemLayer.addChild(this.selectSprite);
		this.circleSelectSprite.rotation = Math.random() * 360;
		this.circleSelectSprite.alpha = 0;
		this.bonusSelectSprite.alpha = 0;
		this.circleSelectSprite.visible = this.bonusSelectSprite.visible = true;
		if (!e) {
			this.playJellyAnimation(2, 1, 1);
			SoundsManager.instance.playSound("monster_select")
		}
	};
	t.prototype.tempSelect = function() {
		if (this.selectSprite.parent) {
			if (this.removeSelectIn > 0) this.removeSelectIn = 4;
			this.updateSelectSprite(0);
			return
		}
		this.select();
		this.removeSelectIn = 3
	};
	t.prototype.unselect = function(e) {
		if (typeof e === "undefined") {
			e = false
		}
		this.isSelected = false
	};
	t.prototype.killSelect = function() {
		removeClip(this.selectSprite)
	};
	t.prototype.setNextIdleTime = function() {
		this.nextIdleTime = 1 + Math.random() * 78;
		this.timeSinceAnim = 0
	};
	t.prototype.getFileName = function() {
		if (this.isPushable) return "chest";
		var e = t.assetNames[this.colorType];
		if (this.hasShield()) e += "_shield";
		if (this.cell && this.cell.isColorBlocked) e += "_cage";
		return e
	};
	t.prototype.updateMainSprite = function() {
		this.mainSprite.spriteSheet = App.game.atlases[this.isPushable ? 0 : 1];
		this.mainSprite.gotoAndStop(this.getFileName());
		var e = this.cell && this.cell.isColorBlocked;
		var t = this.isPushable || !this.hasShield() && !e;
		this.mainSprite.scaleX = this.mainSprite.scaleY = 1;
		var n = t ? null: this.hasShield() ? ShieldRemoveSprite.data[this.colorType] : ColorBlockDestroyAnimation.data[this.colorType];
		setReg(this.mainSprite, t ? this.mainSprite.getBounds().width / 2 : n[4], t ? this.mainSprite.getBounds().height / 2 : n[5], false)
	};
	Object.defineProperty(t.prototype, "isPushable", {
		get: function() {
			return this.colorType == 5
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.init = function(e, n) {
		this.cell = e;
		e.object = this;
		this.removeSelectIn = -1;
		createjs.Tween.removeTweens(this.pos);
		createjs.Tween.removeTweens(this.sprite);
		this.level = Match3Level.instance;
		addChild(this.sprite, this.level.gemLayer);
		this.comboSelectBonus = 0;
		this.pos.x = n.x;
		this.pos.y = n.y;
		this.sprite.x = n.x;
		this.sprite.y = n.y;
		this.animPos.x = this.animPos.y = 0;
		this.isMoving = false;
		this.isWaitingForDestruction = false;
		this.isPlaying = false;
		this.currentFrame = 0;
		this.isMoving = false;
		this.sprite.visible = true;
		this.animationPower = 1;
		this.stopSpeed = 1;
		this.animationSpeed = 1;
		this.setNextIdleTime();
		this.isCached = false;
		this.playBonusAnimationIn = -1;
		this.bonusType = 0;
		this.updateMainSprite();
		var r = Math.abs(this.sprite.x - e.pos.x) + Math.abs(this.sprite.y - e.pos.y) < 1;
		this.setFrame( - 1, true, r);
		var i = this.sprite.getBounds();
		this.killSelect();
		this.setEyeSprite();
		this.setEyeTime();
		this.shieldsLeft = -1;
		if (!this.isActive) {
			t.activeCount++;
			this.isActive = true
		}
		removeClip(this.bonusSprite);
		this.updateSelectSprite(0);
		this.isSelected = false;
		return this
	};
	t.prototype.release = function() {
		this.setCache(false);
		removeClip(this.sprite);
		this.sprite.visible = false;
		this.killSelect();
		createjs.Tween.removeTweens(this.pos);
		createjs.Tween.removeTweens(this.sprite);
		this.isMoving = false;
		this.isWaitingForDestruction = false;
		this.animPos.x = this.animPos.y = 0;
		this.setFrame( - 1);
		this.isPlaying = false;
		this.shieldsLeft = -1;
		this.currentFrame = 0;
		this.playBonusAnimationIn = -1;
		this.isMoving = false;
		this.animationPower = 1;
		this.stopSpeed = 1;
		this.animationSpeed = 1;
		this.isCached = false;
		this.bonusType = 0;
		if (this.isActive) {
			t.activeCount--;
			this.isActive = false
		}
		this.isSelected = false;
		removeClip(this.bonusSprite);
		return this
	};
	t.prototype.setCache = function(e, t, n) {
		if (typeof t === "undefined") {
			t = true
		}
		if (typeof n === "undefined") {
			n = false
		}
		if (!CACHE_ENABLED) return;
		if ((this.isCached != e || n) && this.sprite.parent) {
			this.isCached = e;
			this.sprite.visible = !e;
			if (t) this.level.updateCacheCell(this.cell, e)
		}
	};
	Object.defineProperty(t.prototype, "isBonus", {
		get: function() {
			return this.bonusType != 0 && !this.hasShield()
		},
		enumerable: true,
		configurable: true
	});
	Object.defineProperty(t.prototype, "isComboOnlyBonus", {
		get: function() {
			return this.comboSelectBonus != 0 && !this.hasShield()
		},
		enumerable: true,
		configurable: true
	});
	Object.defineProperty(t.prototype, "isComboBonus", {
		get: function() {
			return (this.isBonus || this.comboSelectBonus != 0) && !this.hasShield()
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.setBonusType = function(e) {
		if (this.bonusType != e) {
			this.bonusType = e;
			this.setEyeSprite();
			var t = this.mainSprite.getBounds();
			this.mainSprite.regX = t.width / 2;
			this.mainSprite.regY = t.height / 2;
			this.playJellyAnimation(2, 1, 1);
			this.setCache(false, true, true);
			this.sprite.addChild(this.bonusSprite);
			this.bonusSprite.rotation = e == 1 ? 0 : 90;
			this.bonusSprite.y = -5;
			this.bonusSprite.x = -1;
			this.updateSelectSprite(0);
			this.comboSelectBonus = this.bonusType
		}
	};
	t.prototype.isSwapable = function() {
		return true
	};
	t.prototype.moveTo = function(e, t, n, r, i) {
		if (typeof n === "undefined") {
			n = false
		}
		if (typeof r === "undefined") {
			r = 0
		}
		if (typeof i === "undefined") {
			i = false
		}
		this.isMoving = true;
		var s = n ? .5 : 1;
		this.lastTarget.x = e;
		this.lastTarget.y = t;
		this.timeSinceStop = 0;
		if (!i && this.isMovedAfterCorner) {
			this.rowMoveAfterConterCount++;
			if (this.rowMoveAfterConterCount > 1) {
				this.rowMoveAfterConterCount = 0;
				this.isMovedAfterCorner = false
			}
		} else this.rowMoveAfterConterCount = 0;
		this.isMovedAfterCorner = false;
		var o = 300 * Math.pow(.6, limit(this.moveCornerCount, 0, 4));
		this.moveCornerCount++;
		var u = distanceBetweenPoints(e, t, this.pos.x, this.pos.y);
		if (u < 1) o = 10;
		if (i) {
			var a = this.level.stageToGrid(this.sprite.x, this.sprite.y);
			a.x = Math.floor(a.x);
			a.y = Math.floor(a.y);
			for (var f = a.y - 1; f >= 0; --f) if (this.validatePos(a.x, f)) {
				var l = this.level.cells[a.x][f];
				if (l && l.object && !l.object.isMoving) l.object.isMovedAfterCorner = true
			}
		}
		this.tween.init(this.pos.x, this.pos.y, e, t, o / 1e3, i);
		if (!this.isPushable && u > 10) {
			this.stopSpeed = .7 + Math.random() * .3;
			this.playAnimation(0, .6)
		}
		this.setCache(false)
	};
	t.prototype.setFrame = function(e, t, n) {
		if (typeof t === "undefined") {
			t = true
		}
		if (typeof n === "undefined") {
			n = true
		}
		var r = animationLen;
		var i = e < 0 || e >= r ? null: jellyAnimation[e];
		var s = e + 1 < 0 || e + 1 >= r ? null: jellyAnimation[e + 1];
		var o = i == null || i.length <= 0;
		var u = !o && s != null && s.length > 0;
		var a = this.currentFrame - e;
		var f = 1;
		if (o) {
			t = true;
			f = 1;
			a = 0;
			this.currentFrame = e = 0;
			i = s = jellyAnimation[0]
		}
		if (t) {
			this.setCache(false);
			var l = !u && !o;
			this.animPos.x = l ? i[0] * f: f * (i[0] + a * (s[0] - i[0]));
			this.animPos.y = l ? i[1] * 1 : 1 * (i[1] + a * (s[1] - i[1]));
			this.mainSprite.scaleX = 1 * (l ? 1 + (i[2] - 1) * f: 1 + (i[2] + a * (s[2] - i[2]) - 1) * f);
			this.mainSprite.scaleY = 1 * (l ? 1 + (i[3] - 1) * f: 1 + (i[3] + a * (s[3] - i[3]) - 1) * f);
			this.mainSprite.skewX = l ? i[4] * f: f * (i[4] + a * (s[4] - i[4]));
			this.mainSprite.skewY = l ? i[5] * f: f * (i[5] + a * (s[5] - i[5]))
		}
		if (o) {
			if (!this.isMoving && n) this.setCache(true);
			this.isPlaying = false;
			this.currentFrame = 0
		}
	};
	t.prototype.playAnimation = function(e, t, n) {
		if (typeof t === "undefined") {
			t = 1
		}
		if (typeof n === "undefined") {
			n = 1
		}
		this.animationPower = t;
		this.animationSpeed = n;
		this.currentFrame = e;
		this.isPlaying = true;
		this.setFrame(this.currentFrame, true, false)
	};
	t.prototype.playJellyAnimation = function(e, t, n) {
		var r = e == 0;
		var i = e == 1;
		var s = getInt(3);
		this.playAnimation(r ? 0 : i || s == 0 ? 5 : s == 1 ? 18 : 30, t, n)
	};
	t.prototype.stopMove = function() {
		var e = this;
		this.isMoving = false;
		this.timeSinceStop = 0;
		if (!this.isPushable && this.isPlaying) {
			this.playJellyAnimation(1, this.stopSpeed, .75 + Math.random() * .5)
		}
		if (this.isPushable && (this.cell.y == this.level.fieldHeight - 1 || this.cell.y == this.level.fieldHeight - 2 && this.cell.x >= 3 && this.cell.x <= 4)) {
			this.level.objects.push(Match3Level.pool.getText("100", this.cell, 0));
			var t = this.level.gridToStage(this.cell.x, this.level.fieldHeight);
			createjs.Tween.get(this.pos, {
				loop: false
			}).wait(0).to({
				x: t.x,
				y: t.y
			},
			300, createjs.Ease.cubicIn).call(function() {
				return e.pushDown()
			});
			SoundsManager.instance.playSound("cake_down")
		} else SoundsManager.instance.playSound("stop_move")
	};
	t.prototype.pushDown = function() {
		this.cell.object = null;
		this.level.target.onTargetPush();
		Match3Level.pool.returnObject(this)
	};
	t.prototype.changeType = function(e, t) {
		if (typeof t === "undefined") {
			t = false
		}
	};
	t.prototype.isOnEndFrame = function() {
		return~~this.currentFrame == 4 || ~~this.currentFrame == 17 || ~~this.currentFrame == 29 || ~~this.currentFrame == 47
	};
	t.prototype.update = function(e) {
		if (!this.isMoving) {
			this.timeSinceStop += e;
			if (this.timeSinceStop >= .5) this.moveCornerCount = 0
		}
		if (this.sprite) {
			if (this.isPlaying) {
				var t = e * this.animationSpeed;
				while (t > 0 && !this.isOnEndFrame() && this.isPlaying) {
					this.currentFrame += t >= this.frameTime ? 1 : t / this.frameTime;
					t -= this.frameTime;
					this.setFrame(~~this.currentFrame, t <= this.frameTime)
				}
			} else {
				this.timeSinceAnim += e;
				if (this.timeSinceAnim >= this.nextIdleTime) {
					this.setNextIdleTime()
				}
			}
			if (this.isMoving) this.tween.update(e, this);
			if (this.playBonusAnimationIn >= 0) {
				this.playBonusAnimationIn -= e;
				if (this.isBonus && this.playBonusAnimationIn < 0) {
					this.playBonusAnimation()
				}
			}
			this.sprite.x = this.pos.x + this.animPos.x;
			this.sprite.y = this.pos.y + this.animPos.y - 0;
			this.updateSelectSprite(e);
			if (this.eyeSprite && this.eyeSprite.visible) {
				if (this.eyeSprite.currentAnimationFrame > 3) {
					this.eyeSprite.visible = false;
					this.eyeSprite.stop()
				}
			} else if (!this.hasShield()) {
				this.playEyeIn -= e;
				if (this.playEyeIn < 0) this.playEye()
			}
		}
	};
	t.prototype.playBonusAnimation = function() {};
	t.prototype.validatePos = function(e, t) {
		return e >= 0 && t >= 0 && e < App.level.fieldWidth && t < App.level.fieldHeight
	};
	t.prototype.getNeighbourObject = function(e, t, n) {
		var r = this.cell.x + e;
		var i = this.cell.y + t;
		if (r < 0 || r >= App.level.fieldWidth) return null;
		if (!this.isMoving) {
			if (!this.validatePos(r, i)) return null;
			o = App.level.cells[r][i].object;
			if (o && !o.isMoving && o.colorType == this.colorType) return o;
			else return null
		} else {
			for (var s = -1; s < App.level.fieldHeight; s++) {
				if (s != -1 && !this.validatePos(r, s)) continue;
				var o = s == -1 ? this.prevNeighbours[n] : App.level.cells[r][s].object;
				if (o && !o.isDestroyed && o.colorType == this.colorType) {
					var u = Math.abs(o.sprite.x - (this.sprite.x + e * App.level.tileSize)) < .5;
					var a = Math.abs(o.sprite.y - (this.sprite.y + t * App.level.tileSize)) < .5;
					if (u && a) {
						return o
					}
				}
			}
		}
		return null
	};
	t.TILE_SIZE = 35;
	t.destroyCount = 0;
	t.GEM_SCALE = 1;
	t.GEM_KILL_DELAY = .075;
	t.assetNames = ["red", "yellow", "blue", "green", "purple"];
	t.regPoints = [cjp(5, 3), cjp(4, 2), cjp(1, 1), cjp(4, 4), cjp(5, -5)];
	t.bonusNames = ["", " horizontal", " vertical", " bomb", " bomb"];
	t.activeCount = 0;
	t.eyeRegs = [cjp(17, 13), cjp(13, 11), cjp(11, 9), cjp(11, 12), cjp(7, 7)];
	t.eyePos = [cjp( - 2.3, -17.3), cjp(0, -13), cjp( - 3, -12), cjp( - 1, -13), cjp( - 13, -30)];
	return t
} (GameObject);
var Match3Level = function(e) {
	function t() {
		e.call(this);
		this.isPaused = false;
		this.isGenerated = false;
		this.isLocked = false;
		this._isHardLocked = false;
		this.isEnded = false;
		this.score = 0;
		this.pushPositions = [];
		this.objects = [];
		this.customMatches = new Array;
		this.comboAmount = 0;
		this.maxCombo = 0;
		this.comboTimer = t.COMBO_TIME;
		this.turnedOff = false;
		this.isSelectBlocked = false;
		this.fieldCount = 5;
		this.fpsText = null;
		this.timeSinceLastAction = 0;
		this.limitLeft = 0;
		this.showWinMenuIn = -1;
		this.playLoseIn = 1.3;
		this.currentMove = 0;
		this.cellData = null;
		this.needToUpdateGemCache = false;
		this.cachedSprites = {};
		this.showTargetIn = -1;
		this.isPressed = false;
		this.gemChain = new GemChain;
		this.tileLayer = new createjs.Container;
		this.markLayer = new createjs.Container;
		this.needToUpdateBack = true;
		this.gemSpellLayer = new createjs.Container;
		this.underGemLayer = new createjs.Container;
		this.gemLayer = new createjs.Container;
		this.gemCacheLayer = new createjs.Container;
		this.blockLayer = new createjs.Container;
		this.gemDestroyLayer = new createjs.Container;
		this.blockDestroyLayer = new createjs.Container;
		this.bonusLayer = new createjs.Container;
		this.bonusIndicatorLayer = new createjs.Container;
		this.hudLayer = new createjs.Container;
		this.downChainLayer = new createjs.Container;
		this.topChainLayer = new createjs.Container;
		this.isTimeLevel = false;
		this.levelTime = 0;
		this.mustSort = false;
		t.instance = this;
		var n = ["blue bomb", "blue horizontal", "blue vertical", "blue", "green bomb", "green horizontal", "green vertical", "green", "orange bomb", "orange horizontal", "orange vertical", "orange", "purple bomb", "purple horizontal", "purple vertical", "purple"];
		for (var r = 0; r < n.length; ++r) {
			var i = createSpriteFromSpritesheet(n[r]);
			var s = i.getBounds();
			i.cache(s.x, s.y, s.width, s.height);
			this.cachedSprites[n[r]] = i
		}
		this.addChild(this.tileLayer);
		this.addChild(this.markLayer);
		this.addChild(this.gemSpellLayer);
		this.addChild(this.underGemLayer);
		this.addChild(this.downChainLayer);
		this.addChild(this.gemLayer);
		if (CACHE_ENABLED) this.addChild(this.gemCacheLayer);
		this.addChild(this.blockLayer);
		this.addChild(this.topChainLayer);
		this.addChild(this.gemDestroyLayer);
		this.addChild(this.blockDestroyLayer);
		this.addChild(this.bonusLayer);
		this.addChild(this.bonusIndicatorLayer);
		this.addChild(this.hudLayer);
		this.victoryText = createSpriteFromSpritesheet("victory_text");
		this.victoryText.regX = this.victoryText.getBounds().width / 2;
		this.victoryText.regY = this.victoryText.getBounds().height / 2;
		this.setFieldProps(t.TILE_SIZE, t.SHIFT_X, t.SHIFT_Y, t.LEVEL_W, t.LEVEL_H);
		this.cells = new Array;
		for (var r = 0; r < this.fieldWidth; r++) {
			var o = new Array;
			for (var u = 0; u < this.fieldHeight; u++) {
				var a = new CellObject(r, u);
				o.push(a)
			}
			this.cells.push(o)
		}
		if (CACHE_ENABLED) {
			this.gemCacheLayer.cache(0, 0, this.fieldWidth * this.tileSize, this.fieldHeight * this.tileSize);
			this.gemCacheLayer.x = this.offsetX;
			this.gemCacheLayer.y = this.offsetY
		}
		App.level = this;
		var f = new createjs.Text("20fps", "30px Arial Black", "#ffffff");
		f.x = 0;
		f.alpha = .3;
		f.y = App.SCREEN_H + 124 - 20;
		if (needFpsText) addChild(f, this.hudLayer);
		this.fpsText = f;
		this.hud = new Hud;
		this.hero = new Hero
	}
	__extends(t, e);
	t.prototype.pause = function() {
		if (this.isPaused || this.isEnded) return;
		var e = this.getBounds();
		this.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H);
		this.isPaused = true;
		MenuManager.instance.show(MenuManager.instance.pause, false)
	};
	t.prototype.unpause = function() {
		this.isPaused = false;
		this.uncache();
		if (MenuManager.instance.current == MenuManager.instance.pause) MenuManager.instance.closeCurrent()
	};
	t.prototype.updateCacheCell = function(e, t) {
		e.setCacheState(t ? CellObject.CACHE_DRAW: CellObject.CACHE_CLEAR)
	};
	t.prototype.drawCache = function(e) {
		if (e.object && e.cacheUpdateState == CellObject.CACHE_DRAW || e.cacheUpdateState == CellObject.CACHE_CLEAR) {
			if (e.cacheUpdateState == CellObject.CACHE_CLEAR) {
				this.gemCacheLayer.cacheCanvas.getContext("2d").clearRect(e.rect.x - this.offsetX, e.rect.y - this.offsetY, e.rect.width, e.rect.height)
			} else {
				var t = e.object.getFileName();
				var n = this.cachedSprites[t];
				var r = n.cacheCanvas;
				this.gemCacheLayer.cacheCanvas.getContext("2d").drawImage(r, e.pos.x - r.width / 2 - this.offsetX, e.pos.y - r.height / 2 - this.offsetY, r.width, r.height)
			}
		}
		e.resetCacheState()
	};
	Object.defineProperty(t.prototype, "isActive", {
		get: function() {
			return this.parent != null
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.init = function(e) {
		this.reset();
		this.showTargetIn = .3;
		this.mustSort = true;
		this.levelTime = 0;
		removeClip(this.victoryText);
		this.showWinMenuIn = -1;
		this.uncache();
		SoundsManager.instance.reset();
		App.game.stage.addChild(this);
		this.isEnded = false;
		this.isPressed = false;
		this.currentMove = 0;
		var t = 0;
		var n = 0;
		var r = 0;
		t = -1;
		n = 0;
		r = 0;
		this.limitLeft = 99;
		var i = [500, 1500, 3e3];
		var s = null;
		var o = window.location.href;
		if (o.indexOf("lvl") != -1) {
			o = o.split("lvl")[1];
			s = o
		}
		var u = s ? new LevelData(e, s) : LevelManager.instance.data[e];
		this.isTimeLevel = u.isTimeLevel;
		this.levelData = u;
		this.cellData = u.cellData;
		t = u.targetData;
		n = u.customData;
		r = u.customData2;
		this.limitLeft = u.limitLeft;
		i = u.starValues;
		switch (t) {
		case 0:
			this.target = new BlockClearTarget;
			break;
		case 1:
			this.target = new ClearMarkTarget;
			break;
		case 2:
			this.target = new PushDownTarget(n);
			break;
		case 3:
			this.target = new ColorTarget(n, r);
			break;
		case 4:
			this.target = new ScoreTarget(n);
			break;
		case - 1 : this.target = new InfiniteTarget;
			break
		}
		this.target.scores = i;
		this.score = 0;
		this.generate();
		this.needToUpdateGemCache = true;
		this.hud.show();
		this.gemChain.level = this;
		this.needToUpdateBack = true;
		this.update(0)
	};
	t.prototype.startAwardMode = function() {
		if (this.isEnded || this.isHardLocked) return;
		this.isEnded = true;
		var e = [];
		for (var n = 0; n < this.fieldWidth; ++n) {
			for (var r = 0; r < this.fieldHeight; ++r) {
				var i = this.cells[n][r];
				if (i && i.object && !i.object.isMoving && !i.object.isBonus && !i.object.isPushable) {
					e.push(i)
				}
			}
		}
		this.victoryText.alpha = 0;
		this.victoryText.x = App.SCREEN_W / 2;
		this.victoryText.y = App.SHIFT_H + 500;
		this.victoryText.scaleX = this.victoryText.scaleY = 1.3;
		this.hudLayer.addChild(this.victoryText);
		createjs.Tween.get(this.victoryText, {
			loop: false
		}).wait(0).to({
			alpha: 1,
			y: this.victoryText.y - 220
		},
		500, createjs.Ease.quartInOut).wait(800).to({
			alpha: 0,
			y: this.victoryText.y - 400
		},
		500, createjs.Ease.quartInOut);
		var s = this.hud.movesText.x;
		var o = this.hud.movesText.y - 20;
		var u = !this.isTimeLevel && this.limitLeft > 0;
		var a = [];
		var f = [];
		var l = [];
		for (var n = 0; n < this.fieldWidth; ++n) for (var r = 0; r < this.fieldHeight; ++r) {
			var i = this.cells[n][r];
			if (i && i.object && i.object.isBonus) {
				a.push(i);
				f.push(i.getBonusType());
				l.push(!u ? 0 : .5)
			}
		}
		var c = e.length;
		var h = 0;
		var p = -1;
		var d = this.limitLeft;
		if (!this.isTimeLevel) {
			while (d > 0) {
				if (c <= 0 || h >= 10) {
					this.objects.push(t.pool.getText("600", null, 0, s + lerp( - 100, 100, Math.random()), o + lerp(0, 100, Math.random())));
					this.limitLeft--
				} else {
					i = e.splice(getInt(c), 1)[0];
					var v = .6 + h * .065;
					var m = 1 + getInt(2);
					f.push(m);
					var g = new EndBonusIndicator(s, o, i, v, m);
					this.objects.push(g);
					a.push(i);
					p = Math.max(p, g.totalTime);
					l.push(g.totalTime); ++h
				}--c;
				d--
			}
		} else {
			var y = Math.round(this.limitLeft) * 200;
			if (y > 0) {
				this.objects.push(t.pool.getText(y.toString(), null, 0, s + lerp( - 100, 100, Math.random()), o + lerp(0, 100, Math.random())))
			}
		}
		var b = [];
		p += .2;
		var w = -1;
		c = a.length;
		for (var h = 0; h < c; ++h) {
			i = a[h];
			var E = this.getBonusGroup(i, f[h]);
			v = l[h];
			var S = E.length;
			for (var x = 0; x < S; ++x) {
				var T = E[x];
				var N = this.getDistance(i, T, false);
				var C = (!u ? .1 : .6) + v + N * FieldObject.GEM_KILL_DELAY;
				w = Math.max(C, w);
				if (T == i || a.indexOf(T) == -1) {
					T.prepareToClear(C, f[h], -1, T == i)
				}
				b.push(T)
			}
			i.scoreToAdd = this.getBonusScore(f[h], 0)
		}
		c = b.length;
		w += FieldObject.GEM_KILL_DELAY;
		for (h = 0; h < c; ++h) b[h].setTempBlock(true, w);
		this.showWinMenuIn = 1
	};
	t.prototype.getStarAmount = function() {
		var e = 0;
		for (var t = 1; t <= 3; ++t) {
			var n = this.target.scores[t - 1];
			if (this.score >= n) e = t
		}
		return e
	};
	t.prototype.destroyObjects = function() {
		var e = this.objects.length;
		for (var t = 0; t < e; ++t) this.objects[t].destroy();
		this.objects = []
	};
	t.prototype.onWin = function() {
		hwset2();
		$(".ad").show();
		if (this.isEnded) return;
		this.isEnded = true;
		this.destroyObjects();
		var e = this.getBounds();
		this.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H);
		var t = this.objects.length;
		for (var n = 0; n < t; ++n) {
			var r = this.objects[n];
			if (r && r.isDestroyed && r instanceof JumpText) {
				var i = r;
				i.finishMovement();
				i.destroy()
			}
		}
		var s = this.getStarAmount();
		this.hud.forceFullUpdate();
		LevelManager.instance.onLevelComplete(s, this.score);
		var o = this.levelData.levelNumber == LevelManager.LEVEL_AMOUNT - 1 ? MenuManager.instance.result: MenuManager.instance.winMenu;
		MenuManager.instance.show(o, false)
	};
	t.prototype.onLose = function() {
		if (this.isEnded) return;
		this.isEnded = true;
		this.destroyObjects();
		var e = this.getBounds();
		this.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H);
		MenuManager.instance.show(MenuManager.instance.loseMenu, false);
		var n = {
			levelNumber: this.levelData.levelNumber.toString(),
			time: t.instance.levelTime
		};
		safeTrackEvent("fail", n)
	};
	t.prototype.resetSelects = function() {
		for (var e in this.cells) {
			var t = this.cells[e];
			for (var n in t) {
				var r = t[n]
			}
		}
	};
	t.prototype.trySpawnBonus = function(e) {
		if (e == null) return;
		var n = e.length;
		if (n < t.MIN_BONUS_SIZE) return;
		var r = n >= t.MIN_TRIPLE_BONUS_SIZE ? 3 : n >= t.MIN_DOUBLE_BONUS_SIZE ? 2 : 1;
		for (var i = 0; i < r; ++i) this.spawnBonus(Math.random() < .5 ? 1 : 2, e[0], e[e.length - 1])
	};
	t.prototype.spawnBonus = function(e, t, n, r) {
		if (typeof r === "undefined") {
			r = null
		}
		var i;
		var s;
		var o;
		var u;
		var a = MenuManager.instance.isOnTutorial() ? Tutorial.instance.getBonusSpawnCell() : null;
		for (i = 0; i < 80; ++i) {
			s = getInt(this.fieldWidth);
			o = getInt(this.fieldHeight);
			u = a ? a: this.cells[s][o];
			var f = false;
			if (u.object && !u._isBlock && !u.object.isBonus && !u.object.isWaitingForDestruction && !u.object.isMoving && !u.isWaitingForClear && !u.object.isPushable) {
				for (var l = 0; l < this.customMatches.length; ++l) if (this.customMatches[l].indexOf(u) != -1) {
					f = true;
					break
				}
				if (!f) {
					if (r == null) {
						if (u == a && a != null) e = 1;
						this.objects.push(new BonusIndicator(t, n, u, e))
					} else r.updateTarget(u);
					return
				}
			}
		}
		if (r) r.destroy()
	};
	t.prototype.getBonusGroup = function(e, t, n) {
		if (typeof t === "undefined") {
			t = 0
		}
		if (typeof n === "undefined") {
			n = null
		}
		var r = t != 0 ? t: e.getComboBonusType();
		var i = [];
		switch (r) {
		case 1:
			for (var s = 0; s < this.fieldWidth; ++s) {
				var o = this.cells[s][e.y];
				if (o.isStable() || o.isBreakable) i.push(o)
			}
			break;
		case 2:
			for (var u = 0; u < this.fieldHeight; ++u) {
				var a = this.cells[e.x][u];
				if (a.isStable() || a.isBreakable) i.push(a)
			}
			break
		}
		return i
	};
	t.prototype.getBonusDelay = function(e) {
		var t = 0;
		return t
	};
	t.prototype.getDistanceDelay = function(e, t, n, r) {
		var i = this.getDistance(e, t, false);
		return FieldObject.GEM_KILL_DELAY * i * Math.pow(.75, r)
	};
	t.prototype.getMatchColor = function(e, t) {
		if (!t) return e.getType();
		var n = [0, 0, 0, 0, 0, 0];
		var r = n.length;
		for (var i = 0; i < r; ++i) {
			var s = t[i].getType();
			if (s >= 0) {
				n[s]++;
				if (n[s] >= 2) return s
			}
		}
		return e.getType()
	};
	t.prototype.getCellByMousePos = function(e, n, r) {
		if (typeof r === "undefined") {
			r = false
		}
		var i = this.stageToGrid(e, n);
		var s = new createjs.Point;
		if (i.y < 0 && i.y >= -.5) i.y = 0;
		s.x = Math.floor(i.x);
		s.y = Math.floor(i.y);
		if (s.x < 0 || s.y < 0 || s.x >= this.fieldWidth || s.y >= this.fieldHeight) return null;
		var o = this.cells[s.x][s.y];
		return ! r || distanceBetweenPoints(o.pos.x, o.pos.y, e, n) < t.TILE_SIZE / 2 ? o: null
	};
	t.prototype.onMouseUp = function(e, t) {
		if (!this.isActive) return;
		if (this.hud) this.hud.onDown(e, t);
		if (this.gemChain.length() >= 3) {
			this.gemChain.clearChain()
		} else this.gemChain.reset();
		this.isPressed = false
	};
	t.prototype.onMouseMove = function(e, t) {
		var n = this.getCellByMousePos(e, t, true);
		if (n && n.object) {
			if (this.isPressed) this.gemChain.onRollOver(n)
		}
	};
	t.prototype.onMouseDown = function(e, t) {
		if (!this.isActive) return;
		if (this.isLocked || this.limitLeft <= 0 || this.isPaused || this.isWaitingForTarget) return;
		var n = this.getCellByMousePos(e, t);
		if (n && n.object) {
			this.isPressed = true;
			if (this.gemChain.list.isEmpty()) this.gemChain.onRollOver(n)
		}
	};
	t.prototype.clearChain = function(e) {
		if (Tutorial.instance && Tutorial.instance.isMenuActive && !Tutorial.instance.page.checkMatch(e)) {
			this.gemChain.isLocked = false;
			return
		}++this.currentMove;
		if (!this.isTimeLevel)--this.limitLeft;
		this.hero.attack(.05);
		var t = new createjs.Point;
		t.x = e[e.length - 1].x;
		t.y = e[e.length - 1].y;
		if (e && e.length >= 3) {
			this.isLocked = true;
			SoundsManager.instance.playSound("remove" + 1);
			var n = [{
				match: e,
				mains: [this.cells[t.x][t.y]],
				delay: .15,
				bonus: 0,
				gen: 0,
				prevBonus: 0
			}];
			var r = 0;
			var i = -1;
			var s = true;
			while (r < n.length) {
				var o = n[r].match;
				var u = n[r].mains;
				var a = n[r].delay;
				var f = n[r].bonus;
				var l = n[r].gen;
				var c = n[r].prevBonus; ++r;
				this.customMatches.push(o);
				var h = o.length;
				for (var p = 0; p < h; ++p) {
					var d = u[0];
					var v = o[p];
					var m = a + this.getDistanceDelay(d, v, f, l) + this.getBonusDelay(v.getComboBonusType());
					i = Math.max(i, v.clearIn);
					if (v && v.object && v.object.isComboOnlyBonus && !v.object.isMoving && !v.isWaitingForClear) {
						var g = v.object.comboSelectBonus == 1 || v.object.comboSelectBonus == 2;
						var y = this.getBonusGroup(v, 0, o);
						if (y.length > 0) {
							n.push({
								match: y,
								mains: [v],
								delay: m,
								bonus: v.object.comboSelectBonus,
								gen: l + 1,
								prevBonus: f
							})
						}
					}
					v.clearId = s ? p: this.getDistance(d, v);
					v.prepareToClear(m, f)
				}
				if (s) {
					var b = this.getComboScore(h);
					var i = -1;
					var w = null;
					for (var p = 0; p < h; ++p) {
						var v = o[p];
						if (v.object && !v.object.isComboOnlyBonus && v.isWaitingForClear && v.clearIn > i) {
							i = v.clearIn;
							w = v
						}
					}
					if (w) {
						w.scoreToAdd = b + (v.scoreToAdd >= 0 ? v.scoreToAdd: 0);
						w.bonusComboCount = r
					}
				} else {
					if (d.object && d.object.isComboOnlyBonus) {
						d.scoreToAdd = this.getBonusScore(f, l - 1, c) + (d.scoreToAdd >= 0 ? d.scoreToAdd: 0);
						d.bonusComboCount = r
					}
				}
				s = false
			}
			i += FieldObject.GEM_KILL_DELAY * (this.customMatches.length <= 1 ? 3 : 7);
			for (p = 0; p < this.customMatches.length; ++p) for (var E = 0; E < this.customMatches[p].length; ++E) this.customMatches[p][E].setTempBlock(true, i);
			this.customMatches = [];
			this.trySpawnBonus(e)
		}
	};
	t.prototype.getBonusScore = function(e, t, n) {
		if (typeof n === "undefined") {
			n = -1
		}
		var r = CellObject.BASE_SCORE * this.fieldWidth;
		r = Math.round(r / 10);
		r *= 10;
		return r
	};
	t.getComboScore = function(e) {
		var t = 0;
		for (var n = 0; n < e; ++n) t += CellObject.BASE_SCORE + (n > 2 ? n - 2 : 0) * CellObject.BASE_SCORE / 5;
		t = Math.round(t);
		return t
	};
	t.prototype.getComboScore = function(e) {
		return t.getComboScore(e)
	};
	t.prototype.getDistance = function(e, t, n) {
		if (typeof n === "undefined") {
			n = false
		}
		var r = Math.abs(e.x - t.x);
		if (n) r = Math.min(r, Math.abs(r - this.fieldWidth));
		var i = Math.abs(e.y - t.y);
		if (n) i = Math.min(i, Math.abs(i - this.fieldHeight));
		return r + i
	};
	t.prototype.onBeforeSwap = function(e) {};
	t.prototype.onExit = function() {};
	t.prototype.onWrongMove = function() {};
	t.prototype.onSuccessMove = function(e, t, n, r) {};
	t.prototype.handleCombo = function() {};
	t.prototype.canSwap = function(e, t) {
		if (e.isBlock() || t.isBlock()) return {
			colorType: -1,
			color: -1
		};
		return {
			colorType: 0,
			color: 0
		};
		var n = e.x - 2;
		var r = e.x + 2;
		var i = e.y - 2;
		var s = e.y + 2;
		n = n < 0 ? 0 : n >= this.fieldWidth ? this.fieldWidth - 1 : n;
		i = i < 0 ? 0 : i >= this.fieldHeight ? this.fieldHeight - 1 : i;
		r = r < 0 ? 0 : r >= this.fieldWidth ? this.fieldWidth - 1 : r;
		s = s < 0 ? 0 : s >= this.fieldHeight ? this.fieldHeight - 1 : s;
		var o = -1;
		var u = 0;
		var a = e.y;
		for (var f = n; f <= r; f++) {
			var l = this.cells[f][a] == t ? e.getType() : this.cells[f][a] == e ? t.getType() : this.cells[f][a].getType();
			if (l == this.assetNumber) {
				var c = f + 1 <= r ? this.cells[f + 1][a] : null;
				var h = !c ? -2 : c == e ? t.getType() : c == t ? e.getType() : c.getType();
				if (u == 0 && c) {
					o = h;
					u = 1
				} else if (u == 2) {
					return {
						colorType: 0,
						color: o
					}
				} else if (u == 1 && c) {
					if (o == h || h == this.assetNumber) {
						return {
							colorType: 0,
							color: o
						}
					} else {
						o = h;
						u = 2;
						f++
					}
				}
			} else if (l == -1) {
				o = -1;
				u = 0
			} else if (o == -1 || l != o) {
				o = l;
				u = 1
			} else if (o == l) {
				u++;
				if (u >= 3) {
					return {
						colorType: 0,
						color: o
					}
				}
			}
		}
		o = -1;
		u = 0;
		f = e.x;
		for (a = i; a <= s; a++) {
			l = this.cells[f][a] == t ? e.getType() : this.cells[f][a] == e ? t.getType() : this.cells[f][a].getType();
			if (l == this.assetNumber) {
				c = a + 1 <= s ? this.cells[f][a + 1] : null;
				h = !c ? -2 : c == e ? t.getType() : c == t ? e.getType() : c.getType();
				if (u == 0 && c) {
					o = h;
					u = 1
				} else if (u == 2) {
					return {
						colorType: 1,
						color: o
					}
				} else if (u == 1 && c) {
					if (o == h || h == this.assetNumber) {
						return {
							colorType: 1,
							color: o
						}
					} else {
						o = h;
						u = 2;
						a++
					}
				}
			} else if (l == -1) {
				o = -1;
				u = 0
			} else if (o == -1 || l != o) {
				o = l;
				u = 1
			} else if (o == l) {
				u++;
				if (u >= 3) {
					return {
						colorType: 1,
						color: o
					}
				}
			}
		}
		if ((e.object == null || t.object == null) && !(e.object == null && t.object == null)) {
			var p = e.object == null ? e: t;
			var d = e.object == null ? t: e;
			o = -1;
			u = 0;
			f = d.x;
			for (a = this.fieldHeight - 1; a >= 0; a--) {
				if (a == d.y) continue;
				l = this.cells[f][a].getType();
				if (l == this.assetNumber) {
					var v = a - 1 == d.y ? a - 2 : a - 1;
					c = v >= 0 ? this.cells[f][v] : null;
					h = !c ? -2 : c.getType();
					if (u == 0 && c) {
						o = h;
						u = 1
					} else if (u == 2) {
						return {
							colorType: 2,
							color: o
						}
					} else if (u == 1 && c) {
						if (o == h || h == this.assetNumber) {
							return {
								colorType: 2,
								color: o
							}
						} else {
							o = h;
							u = 2;
							a++
						}
					}
				} else if (l == -1) {
					o = -1;
					u = 0
				} else if (o == -1 || l != o) {
					o = l;
					u = 1
				} else if (o == l) {
					u++;
					if (u >= 3) {
						return {
							colorType: 2,
							color: o
						}
					}
				}
			}
		}
		return {
			colorType: -1,
			color: -1
		}
	};
	t.prototype.getCustomMatchesAmount = function() {
		var e = 0;
		for (var t in this.customMatches) for (var n in this.customMatches[t]) e++;
		return e
	};
	Object.defineProperty(t.prototype, "isHardLocked", {
		get: function() {
			return this.isLocked || this._isHardLocked
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.update = function(e) {
		var t = this;
		if (!this.isGenerated) return;
		if (!this.isPaused && this.isActive && !App.game.isHidden) this.levelTime += e;
		if (this.comboTimer > 0) {
			this.comboTimer--;
			if (this.comboTimer == 0) {
				if (this.comboAmount > this.maxCombo) this.maxCombo = this.comboAmount;
				this.handleCombo();
				this.comboAmount = 0;
				this.setCombo()
			}
		}
		this.gemChain.updateBonusChain();
		var n = 0;
		this._isHardLocked = false;
		this.isLocked = false;
		for (var r = 0; r < this.fieldWidth; ++r) for (var i = 0; i < this.fieldHeight; ++i) {
			var s = this.cells[r][i];
			s.update(e);
			this.mustSort = this.mustSort || s.object && s.object.isMoving;
			if (s.object == null && !s.isBlock())++n;
			this.isLocked = this.isLocked || s.object && (s.object.isMoving || s.object.isWaitingForDestruction) || s.isWaitingForClear || s.isChangingType;
			this._isHardLocked = this._isHardLocked || this.isLocked || s.isTempBlock && !s._isBlock
		}
		var o = this.objects.length;
		for (var u = 0; u < o; ++u) {
			var a = this.objects[u];
			if (a && !a.isDestroyed) {
				a.update(e);
				this.isLocked = this.isLocked || a.isLocked && !a.isDestroyed
			} else {
				this.objects.splice(u, 1);
				u--;
				o--
			}
		}
		if (n > 0) {
			var f = this.addObjects();
			f += this.pushObjects();
			this.isLocked = this.isLocked || f > 0
		}
		if (this.isLocked || this.isEnded || this.isPressed) this.timeSinceLastAction = 0;
		else {
			this.timeSinceLastAction += e;
			if (this.timeSinceLastAction > 5 && !MenuManager.instance.isOnTutorial()) this.playHint();
			if (!this.isHardLocked) this.checkIfComboExists()
		}
		if (CACHE_ENABLED) {
			for (var r = 0; r < this.fieldWidth; ++r) for (var i = 0; i < this.fieldHeight; ++i) {
				var s = this.cells[r][i];
				if (s.cacheUpdateState > CellObject.CACHE_NONE) this.drawCache(s)
			}
		}
		if (this.showWinMenuIn > 0 && !this.isHardLocked) {
			this.showWinMenuIn -= e;
			if (this.showWinMenuIn <= 0) {
				this.isEnded = false;
				this.onWin()
			}
		}
		this.isLocked = this.isLocked || this.isEnded;
		if (!this.isPaused && !this.isHardLocked && !this.isEnded && !this.target.isCompleted && this.limitLeft <= 0 && this.playLoseIn > 0) {
			this.playLoseIn -= e;
			if (this.playLoseIn <= 0) fhoper(this,e);
		}
		if (this.isWaitingForTarget && !this.isHardLocked) {
			this.showTargetIn -= e;
			if (!this.isWaitingForTarget) {
				if (!Tutorial.instance.hasTutorial(this.levelData.levelNumber) || !needTutorial) MenuManager.instance.show(MenuManager.instance.target, false);
				else MenuManager.instance.show(MenuManager.instance.tutorial, false)
			}
		}
		if (this.isTimeLevel && !this.isWaitingForTarget && !MenuManager.instance.target.isMenuActive && !this.isPaused && !MenuManager.instance.pause.isMenuActive && !MenuManager.instance.tutorial.isMenuActive && !this.isEnded) {
			this.limitLeft -= e
		}
		if (this.mustSort) {
			this.gemLayer.sortChildren(function(e, n) {
				return t.sortObjects(e, n)
			});
			this.mustSort = false
		}
		this.gemChain.update(e);
		if (this.needToUpdateBack) {
			this.needToUpdateBack = false;
			if (this.markLayer.cacheCanvas) this.markLayer.updateCache();
			else this.markLayer.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H)
		}
		this.hud.update(e);
		this.hero.update(e);
		this.fpsText.text = createjs.Ticker.getMeasuredFPS().toFixed(1)
	};
	t.prototype.sortObjects = function(e, t) {
		var n = ~~ (e.y / this.tileSize);
		var r = ~~ (t.y / this.tileSize);
		if (n < r) {
			return - 1
		} else if (n > r) {
			return 1
		} else {
			return 0
		}
	};
	t.prototype.updateFpsText = function() {
		this.fpsText.text = createjs.Ticker.getMeasuredFPS().toFixed(1)
	};
	t.prototype.checkIfComboExists = function() {
		if (this.hud.isShuffleActive() || this.isWaitingForTarget || MenuManager.instance.current == MenuManager.instance.target) return;
		for (var e = 0; e < this.fieldHeight; ++e) {
			for (var t = 0; t < this.fieldWidth; ++t) {
				var n = this.cells[t][e];
				var r = this.getFillZone(t, e, 3);
				if (r && r.length >= 3) {
					return
				}
			}
		}
		this.hud.playShuffleAnimation();
		var i = [];
		for (var t = 0; t < this.fieldWidth; ++t) for (var e = 0; e < this.fieldHeight; ++e) if (this.isGoodForClick(this.cells[t][e])) i.push(this.cells[t][e]);
		var s = i.length;
		this.isLocked = true;
		var o = 80;
		var u = false;
		var a = .6;
		while (o >= 0 && !u) {
			o--;
			var f = getInt(s);
			var n = i[f];
			if (!n.object.isPushable) {
				var l = [n];
				for (var c = 0; c < 4; ++c) {
					t = n.x + (c == 0 ? 1 : c == 1 ? -1 : 0);
					e = n.y + (c == 2 ? 1 : c == 3 ? -1 : 0);
					if (t >= 0 && e >= 0 && t < this.fieldWidth && e < this.fieldHeight) {
						var h = this.cells[t][e];
						if (this.isGoodForClick(h)) {
							l.push(h);
							if (l.length >= 3) {
								var p = (n.getType() + 1) % this.assetNumber;
								u = true;
								for (var d = 0; d < l.length; ++d) {
									l[d].prepareToChangeType(a + lerp(0, .2, Math.random()), p);
									f = i.indexOf(l[d]);
									if (f != -1) {
										i.splice(f, 1);
										s--
									}
								}
								break
							}
						}
					}
				}
			}
		}
		while (s > 0) {
			var f = getInt(s);
			s--;
			var n = i.splice(f, 1)[0];
			n.prepareToChangeType(a + lerp(0, .2, Math.random()))
		}
		return;
		while (s > 0) {
			var f = getInt(s);
			s--;
			var n = i.splice(f, 1)[0];
			if (!n.object || n.timeSinceLastTypeChange < 1) continue;
			var l = [];
			for (var c = 0; c < 4; ++c) {
				t = n.x + (c == 0 ? 1 : c == 1 ? -1 : 0);
				e = n.y + (c == 2 ? 1 : c == 3 ? -1 : 0);
				if (t >= 0 && e >= 0 && t < this.fieldWidth && e < this.fieldHeight) {
					var h = this.cells[t][e];
					if (this.isGoodForClick(h)) {
						l.push(h);
						if (l.length >= 2) {
							for (var d = 0; d < l.length; ++d) l[d].changeObjectType(n.getType());
							return
						}
					}
				}
			}
		}
		return;
		while (s > 0) {
			var f = Math.random() < .5 ? Math.floor(s / 2 + getInt(Math.floor(s / 2))) : getInt(s);
			s--;
			var n = i.splice(f, 1)[0];
			if (!n.object || n.timeSinceLastTypeChange < 1) continue;
			var l = [];
			for (var c = 0; c < 4; ++c) {
				t = n.x + (c == 0 ? 1 : c == 1 ? -1 : 0);
				e = n.y + (c == 2 ? 1 : c == 3 ? -1 : 0);
				if (t >= 0 && e >= 0 && t < this.fieldWidth && e < this.fieldHeight) {
					var h = this.cells[t][e];
					if (this.isGoodForClick(h)) {
						l.push(h);
						if (l.length >= 2) {
							for (var d = 0; d < l.length; ++d) l[d].changeObjectType(n.getType());
							return
						}
					}
				}
			}
		}
	};
	t.prototype.playHint = function() {
		var e = [];
		for (var t = 0; t < this.fieldWidth; ++t) for (var n = 0; n < this.fieldHeight; ++n) e.push(this.cells[t][n]);
		var r = 15;
		var i = e.length;
		while (--r > 0 && i > 0) {
			var s = getInt(i);
			i--;
			var o = e.splice(s, 1)[0];
			if (!this.isGoodForClick(o)) continue;
			var u = this.getFillZone(o.x, o.y, 3);
			if (u && u.length >= 3) {
				this.timeSinceLastAction = -Math.random() * 4;
				u[getInt(u.length)].object.playJellyAnimation(2, 1, .55 + Math.random() * .25);
				return
			}
		}
	};
	t.prototype.setCombo = function() {};
	t.prototype.isGoodForClick = function(e) {
		return e.object && e.object.colorType != -1 && !e.object.isMoving && !e.isWaitingForClear && e.object.colorType != 5 && !e.isChangingType
	};
	t.prototype.getFillZone = function(e, t, n) {
		if (typeof n === "undefined") {
			n = -1
		}
		if (e < 0 || t < 0 || e >= this.fieldWidth || t >= this.fieldHeight) return null;
		var r = new Array;
		var i = new Array;
		var s = this.cells[e][t];
		if (!this.isGoodForClick(s)) return r;
		var o = s.object.colorType;
		i.push(s);
		var u = 0;
		var a = i.length;
		while (u < a && (n < 0 || u < n)) {
			var f = i[u];
			r.push(f); ++u;
			for (var l = 0; l < 9; ++l) {
				var c = f.x + l % 3 - 1;
				var h = f.y + Math.floor(l / 3) - 1;
				if (c >= 0 && h >= 0 && c < this.fieldWidth && h < this.fieldHeight) {
					var p = this.cells[c][h];
					if (p.object && p.object.colorType == o && !p.object.isMoving && i.indexOf(p) == -1) {
						i.push(p); ++a
					}
				}
			}
		}
		return r
	};
	t.prototype.findMatches = function(e) {
		if (typeof e === "undefined") {
			e = false
		}
		var t = this.customMatches;
		this.customMatches = [];
		return t;
		var n = this.findHorizontalMatches(e);
		var r = this.findVerticalMatches(e);
		n = n.concat(r).concat(this.customMatches);
		this.customMatches = new Array;
		return n
	};
	t.prototype.findHorizontalMatches = function(e) {
		var t = new Array;
		var n = -1;
		var r = new Array;
		for (var i = 0; i < this.fieldHeight; i++) {
			for (var s = 0; s < this.fieldWidth; s++) {
				var o = this.cells[s][i];
				var u = s + 1 < this.fieldWidth ? this.cells[s + 1][i] : null;
				if (u && (u.object == null || !u.isStatic() && !e)) u = null;
				var a = o.getType();
				if (o.object == null || !o.isStatic() && !e || a != n && a != this.assetNumber) {
					if (r.length >= 3) t.push(r);
					n = -1;
					r = new Array;
					if (o.object && (o.isStatic() || e)) {
						n = o.getType();
						r.push(o)
					}
				} else {
					if (a == n) {
						r.push(o)
					} else {
						if (a != this.assetNumber) throw new Error("colorType must be asset number!");
						if (!u || u.getType() == n || u.getType() == this.assetNumber) r.push(o);
						else {
							r.push(o);
							if (r.length >= 3) t.push(r);
							n = u.getType();
							r = new Array;
							r.push(o)
						}
					}
				}
			}
			if (r.length >= 3) t.push(r);
			n = -1;
			r = new Array
		}
		return t
	};
	t.prototype.findVerticalMatches = function(e) {
		var t = new Array;
		var n = -1;
		var r = new Array;
		for (var i = 0; i < this.fieldWidth; i++) {
			for (var s = 0; s < this.fieldHeight; s++) {
				var o = this.cells[i][s];
				var u = s + 1 < this.fieldHeight ? this.cells[i][s + 1] : null;
				if (u && (u.object == null || !u.isStatic() && !e)) u = null;
				var a = o.getType();
				if (o.object == null || !o.isStatic() && !e || a != n && a != this.assetNumber) {
					if (r.length >= 3) t.push(r);
					n = -1;
					r = new Array;
					if (o.object && (o.isStatic() || e)) {
						n = o.getType();
						r.push(o)
					}
				} else {
					if (a == n) {
						r.push(o)
					} else {
						if (a != this.assetNumber) throw new Error("colorType must be asset number!");
						if (!u || u.getType() == n || u.getType() == this.assetNumber) r.push(o);
						else {
							r.push(o);
							if (r.length >= 3) t.push(r);
							n = u.getType();
							r = new Array;
							r.push(o)
						}
					}
				}
			}
			if (r.length >= 3) t.push(r);
			n = -1;
			r = new Array
		}
		return t
	};
	t.prototype.removeMatches = function(e) {
		return;
		for (var t in e) {
			var n = e[t];
			var r = false;
			for (var i in n) {
				var s = n[i];
				if (s.object) {
					if (!r && s.getType() >= 0) {
						r = true;
						this.onGroupRemove(n.length, s.object)
					}
					s.clearCell()
				}
			}
		}
	};
	t.prototype.onGroupRemove = function(e, t) {};
	t.prototype.pushObjects = function(e, t) {
		if (typeof e === "undefined") {
			e = -1
		}
		if (typeof t === "undefined") {
			t = -1
		}
		var n = 0;
		n += this.pushBaseObjects(e, t);
		n += this.pushHoles();
		return n
	};
	t.prototype.pushBaseObjects = function(e, t) {
		if (typeof e === "undefined") {
			e = -1
		}
		if (typeof t === "undefined") {
			t = -1
		}
		var n = 0;
		for (var r = 0; r < this.fieldWidth; r++) {
			if (e != -1 && r != e) continue;
			for (var i = this.fieldHeight - 1; i >= 0; i--) {
				if (t != -1 && i != t) continue;
				var s = this.cells[r][i];
				var o = s._isBlock || s.isTempBlock;
				if (o) continue;
				if (s.object == null && !o) {
					var u = -1;
					var a = false;
					for (var f = i - 1; f >= 0; f--) {
						var l = this.cells[r][f];
						var c = l._isBlock || l.isTempBlock;
						if (c || l.isWaitingForClear) {
							a = true;
							break
						} else if (l.object != null && !c && !l.object.isMoving) {
							u = f;
							break
						}
					}
					if (u != -1 && !a) {
						var h = s.pos;
						l.object.moveTo(h.x, h.y, false, .05);
						s.setObject(l.object);
						l.object = null; ++n
					}
				}
			}
		}
		return n
	};
	t.prototype.pushHoles = function() {
		var e = 0;
		for (var t = 0; t < this.fieldWidth; ++t) {
			var n = this.isEnded;
			for (var r = 0; r < this.fieldHeight; ++r) {
				var i = this.cells[t][r];
				var s = i._isBlock || i.isTempBlock;
				if (s) {
					n = true;
					continue
				} else if (i.object == null && n) {
					if (i.blockWasRemovedRecently) continue;
					var o = Math.random() > .5;
					var u = [new createjs.Point(t + (o ? 1 : -1), r - 1), new createjs.Point(t + (o ? -1 : 1), r - 1)];
					for (var a = 0; a < 2; a++) {
						var f = u[a];
						if (! (f.x >= 0 && f.y >= 0 && f.x < this.fieldWidth && f.y < this.fieldHeight)) continue;
						var l = this.cells[f.x][f.y];
						if (l.isStable() && l.object != null && !l.isWaitingForClear && !l.isTempBlock && !l.isColorBlocked) {
							var c = i.pos;
							l.object.moveTo(c.x, c.y, false, .05, true);
							i.setObject(l.object);
							l.object = null; ++e;
							break
						}
					}
				} else if (i.object != null && n) {
					n = false
				}
			}
		}
		return e
	};
	t.prototype.addObjects = function(e, n) {
		if (typeof e === "undefined") {
			e = -1
		}
		if (typeof n === "undefined") {
			n = -1
		}
		if (this.isEnded) return 0;
		var r = 0;
		for (var i = 0; i < this.fieldWidth; i++) {
			if (e != -1 && i != e) continue;
			var s = false;
			for (var o = 0; o < this.fieldHeight; o++) {
				if (n != -1 && o != n) continue;
				if (this.cells[i][o].object || this.cells[i][o].isBlock()) {
					if (this.isGenerated) break;
					else s = true
				} else {
					var u = this.gridToStage(i, o);
					var a = -3;
					if (s) {
						if (this.getCellDataColor(i, o) <= 0) continue;
						else a = o
					}
					var f = this.gridToStage(i, a);
					var l = this.getObjectType(i, o);
					var c = t.pool.getObject(this.cells[i][o], f, this.assetNumber, l, this.levelData.typeEnable, this.levelData.shieldProbability);
					if (a != o) c.moveTo(u.x, u.y);
					this.cells[i][o].setObject(c); ++r
				}
			}
		}
		return r
	};
	t.prototype.getObjectType = function(e, t) {
		if (!this.isGenerated) {
			var n = this.getCellDataColor(e, t);
			return n - 1
		}
		return this.target.getExactType(e, t)
	};
	t.getCellDataType = function(e, n, r) {
		if (!e) return - 1;
		return parseInt(e.charAt(2 * (r + n * t.LEVEL_H) + 1))
	};
	t.prototype.getCellDataColor = function(e, t) {
		if (!this.cellData) return - 1;
		return parseInt(this.cellData.charAt(2 * (t + e * this.fieldHeight) + 2))
	};
	t.prototype.generateCells = function() {
		for (var e = 0; e < this.fieldWidth; e++) {
			for (var n = 0; n < this.fieldHeight; n++) {
				var r = this.cells[e][n];
				var i = t.getCellDataType(this.cellData, e, n);
				switch (i) {
				case 0:
				case - 1 : break;
				case 1:
					r.setBlock();
					break;
				case 2:
					r.setBlock(1);
					break;
				case 3:
					r.setBlock(2);
					break;
				case 4:
					r.setBlock(0, true);
					break;
				case 5:
					r.setMark(1);
					break;
				case 6:
					r.setMark(2);
					break;
				case 7:
					r.setBlock(0, false, true);
					break
				}
				var s = this.getCellDataColor(e, n);
				if (s == 6) r.setBlock(0, true);
				if (n == this.fieldHeight - 1 && (e == 3 || e == 4) && !r.isBlock()) r.setBlock(0, false, true)
			}
		}
		this.generateTiles()
	};
	t.prototype.generateField = function() {
		this.addObjects();
		this.target.onLevelGenerated();
		for (var e = 0; e < this.fieldWidth; e++) {
			for (var n = 0; n < this.fieldHeight; n++) {
				var r = this.cells[e][n];
				var i = t.getCellDataType(this.cellData, e, n);
				switch (i) {
				case 8:
					if (r.object) r.object.setShield(1);
					break
				}
			}
		}
	};
	t.prototype.generateTiles = function() {
		this.tileLayer.removeAllChildren();
		this.tileLayer.uncache();
		var e = createBitmap("back" + 1);
		this.tileLayer.addChildAt(e, 0);
		var t = [];
		for (var n = 0; n < 7; ++n) {
			var r = new createjs.Container;
			t.push(r);
			this.tileLayer.addChild(r)
		}
		var i = this.levelData.tileData.length;
		for (var n = 0; n < i; ++n) {
			var s = this.levelData.tileData[n];
			var o = createSpriteFromSpritesheet("tile" + s[0], 1);
			o.x = s[1];
			o.y = s[2];
			var u = s[3];
			t[u].addChild(o)
		}
		var a = ["hud_top", "hud_left", "hud_right", "hud_bottom"];
		var f = [cjp(0, 0), cjp( - 1, -9), cjp(626, -9), cjp(0, 796)];
		var l = [cjp(0, 58), cjp(0, 0), cjp(0, 0), cjp(35, 0), cjp(0, 0)];
		for (var n = 0; n < 4; ++n) {
			var c = createSpriteFromSpritesheet(a[n]);
			c.x = f[n].x;
			c.y = f[n].y;
			this.tileLayer.addChild(c)
		}
		this.tileLayer.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H);
		this.tileLayer.removeAllChildren();
		this.needToUpdateBack = true
	};
	t.prototype.generate = function() {
		this.assetNumber = 5;
		this.generateCells();
		this.generateField();
		this.isGenerated = true
	};
	t.prototype.getRandomType = function() {
		this.fieldCount++;
		var e = getInt(1e3);
		var t = e % this.assetNumber;
		return t
	};
	t.prototype.getChangeType = function() {
		return getInt(1e3) % this.assetNumber
	};
	t.prototype.setBackground = function(e) {
		this.background = e
	};
	t.prototype.setFieldProps = function(e, t, n, r, i) {
		this.tileSize = e;
		this.offsetX = t;
		this.offsetY = n + 124;
		this.fieldWidth = r;
		this.fieldHeight = i
	};
	t.gridToStage = function(e, n) {
		return new createjs.Point(t.SHIFT_X + (e + .5) * t.TILE_SIZE, t.SHIFT_Y + 124 + (n + .5) * t.TILE_SIZE)
	};
	t.prototype.gridToStage = function(e, t) {
		return new createjs.Point(this.offsetX + (e + .5) * this.tileSize, this.offsetY + (t + .5) * this.tileSize)
	};
	t.prototype.stageToGrid = function(e, t) {
		return new createjs.Point((e - this.offsetX) / this.tileSize, (t - this.offsetY) / this.tileSize)
	};
	t.prototype.gridToStageX = function(e) {
		return this.offsetX + (e + .5) * this.tileSize
	};
	t.prototype.gridToStageY = function(e) {
		return this.offsetY + (e + .5) * this.tileSize
	};
	t.prototype.getCellCenterCoordinates = function(e, t) {
		return new createjs.Point(this.offsetX + (e + .5) * this.tileSize, this.offsetY + (t + .5) * this.tileSize)
	};
	Object.defineProperty(t.prototype, "isWaitingForTarget", {
		get: function() {
			return this.showTargetIn > 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.reset = function() {
		if (this.isActive) {
			removeClip(this);
			this.isEnded = false;
			this.currentMove = 0;
			this.playLoseIn = 1.3;
			this.uncache();
			this.isPaused = false;
			this._isHardLocked = false;
			this.showTargetIn = .3;
			this.isGenerated = false;
			this.showWinMenuIn = -1;
			var e = 0;
			var t = 0;
			for (var n = 0; n < this.fieldWidth; ++n) {
				for (var r = 0; r < this.fieldHeight; ++r) this.cells[n][r].reset()
			}
			var i = this.objects.length;
			for (var s = 0; s < i; ++s) this.objects[s].destroy();
			this.objects = [];
			this.target = null;
			this.hud.reset()
		}
	};
	t.bonusScores = [0, 80, 80, 100, 150, 110, 180, 180, 250, 280, 500];
	t.COMBO_TIME = 70;
	t.OLD_TILE_SIZE = 50;
	t.TILE_SIZE = 78;
	t.LEVEL_W = 8;
	t.LEVEL_H = 8;
	t.TILE_SIZE_FACTOR = t.TILE_SIZE / t.OLD_TILE_SIZE;
	t.MIN_BONUS_SIZE = 6;
	t.MIN_DOUBLE_BONUS_SIZE = 10;
	t.MIN_TRIPLE_BONUS_SIZE = 14;
	t.SHIFT_X = 9;
	t.SHIFT_Y = 9;
	return t
} (createjs.Container);
var App = function() {
	function e() {
		var t = this;
		this.atlases = [];
		this.musicPlayed = false;
		this.gameTime = 0;
		this.isMouseDown = false;
		this.isVisible = true;
		this.visibilityState = null;
		this.isPlayingOnMobile = false;
		this.isPaused = false;
		this.isHidden = false;
		e.game = this;
		this.isPlayingOnMobile = isMobile();
		if (window.top != window) {
			document.getElementById("header").style.display = "none"
		}
		try {
			if (navigator.appVersion.indexOf("Win") != -1) {
				var n = document.getElementsByTagName("body")[0];
				n.style.overflow = "hidden"
			}
		} catch(r) {}
		this.stage = new createjs.Stage("canvas");
		createjs.Touch.enable(this.stage, true);
		this.preloader = new Preloader;
		setTimeout(function() {
			window.scrollTo(0, 1)
		},
		1e3);
		if (viewporter && viewporter.ACTIVE) {
			window.addEventListener("viewportready",
			function() {
				return t.resize()
			},
			true);
			window.addEventListener("viewportchange",
			function() {
				return t.resize()
			},
			true)
		} else window.addEventListener("resize",
		function() {
			return t.resize()
		},
		true);
		this.resize();
		window.addEventListener("touchstart",
		function() {});
		createjs.Ticker.setFPS(320);
		createjs.Ticker.addEventListener("tick",
		function(e) {
			t.update(e)
		});
		this.stage.addEventListener("stagemousedown",
		function(e) {
			t.onPreloaderDown(e)
		});
		try {
			var i = ["G4JHTHQCRN8MP4TJF2VC", "P666VB78T6MRB3CF6QMS"];
			FlurryAgent.startSession(i[e.episode - 1]);
			var s = {};
			s["userAgent"] = navigator.userAgent;
			s["vendor"] = navigator.vendor;
			safeTrackEvent("environment", s)
		} catch(r) {
			console.log("CAN'T LOAD ANALYTICS!")
		}
	}
	e.prototype.loadApi = function() {
		e.game.onLoadComplete()
	};
	e.prototype.onLoadComplete = function() {
		var e = this;
		this.stage.removeAllEventListeners();
		this.resize();
		this.levelManager = new LevelManager;
		var t = this.preloader.loader.getResult("artJson");
		t.images[0] = this.preloader.loader.getResult("art.png");
		spriteSheetInfo = t;
		createAnimation(t, "explosion", "explosion", 1, 9, 1, null, 50);
		for (var n = 0; n < FieldObject.assetNames.length; ++n) {
			createAnimation(t, "chain_" + FieldObject.assetNames[n], "chain_" + FieldObject.assetNames[n], 1, 5, 1, null)
		}
		createAnimation(t, "tutorial_effect", "tutorial_effect", 1, 20);
		this.atlases.push(new createjs.SpriteSheet(t));
		this.animationManager = new AnimationManager;
		this.animationManager.putAnimation("wizard", this.preloader.loader.getResult("wizard anim"), 0);
		this.animationManager.putAnimation("button", this.preloader.loader.getResult("buttonAnim"), 0);
		this.animationManager.putAnimation("TutorialWizard_Animation", this.preloader.loader.getResult("TutorialWizard_Animation"), 0);
		t = this.preloader.loader.getResult("artLinearJson");
		t.images[0] = this.preloader.loader.getResult("art_linear.png");
		createFontFrames(t);
		for (var n = 0; n < FieldObject.assetNames.length; ++n) {
			var r = "eye_" + FieldObject.assetNames[n];
			var i = [r + "0003", r + "0002", r + "0003"];
			var s = [];
			for (var o = 0; o < i.length; ++o) {
				var u = o == i.length - 1 ? 50 : 1;
				for (var a = 0; a < u; ++a) s.push(t.animations[i[o]][0])
			}
			t.animations[r] = {
				frames: s,
				next: r,
				speed: 1
			}
		}
		this.atlases.push(new createjs.SpriteSheet(t));
		t = this.preloader.loader.getResult("artEpisodeJson");
		t.images[0] = this.preloader.loader.getResult("artEpisode.png");
		this.atlases.push(new createjs.SpriteSheet(t));
		t = this.preloader.loader.getResult("artFontJson");
		t.images[0] = this.preloader.loader.getResult("artFont");
		createFontFrames(t);
		this.atlases.push(new createjs.SpriteSheet(t));
		this.animationManager.putAnimation("MenuAnim", this.preloader.loader.getResult("MenuAnim"), 0);
		if (!Match3Level.pool) Match3Level.pool = new ObjectPool;
		Match3Level.instance = new Match3Level;
		this.soundManager = new SoundsManager;
		this.stage.addEventListener("stagemousedown",
		function(t) {
			e.onDown(t)
		});
		this.stage.addEventListener("stagemouseup",
		function(t) {
			e.onUp(t)
		});
		this.stage.addEventListener("stagemousemove",
		function(t) {
			e.onMove(t)
		});
		this.menuManager = new MenuManager;
		splashScreenData = apiInstance ? apiInstance.Branding.getSplashScreen() : null;
		this.preloader.disable();
		if (splashScreenData && splashScreenData.show && needShowSplash) {
			this.menuManager.show(this.menuManager.splashMenu, false);
			console.log("show splash")
		} else this.menuManager.show(this.menuManager.mainMenu, true);
		this.resize();
		this.setVisibilityListener()
	};
	e.prototype.showAds = function() {
		var e = this;
		if (apiInstance) {
			console.log("show ads");
			apiInstance.GameBreak.request(function() {
				return e.pauseGame()
			},
			function() {
				return e.resumeGame()
			})
		}
	};
	e.prototype.pauseGame = function() {
		this.isPaused = true;
		SoundsManager.instance.pauseMusic()
	};
	e.prototype.resumeGame = function() {
		this.isPaused = false;
		SoundsManager.instance.resumeMusic()
	};
	e.prototype.update = function(t) {
		if (this.isPaused) return;
		this.stage.update(t);
		if (e.level && e.level.isActive) e.level.update(t.delta / 1e3);
		if (this.menuManager) this.menuManager.update(t.delta / 1e3);
		if (this.preloader) this.preloader.update(t.delta / 1e3);
		if (this.soundManager) this.soundManager.update(t.delta / 1e3);
		this.gameTime += t.delta / 1e3
	};
	e.prototype.onPreloaderDown = function(e) {
		this.preloader.onDown(e.stageX, e.stageY);
		e.nativeEvent && e.preventDefault && e.preventDefault() && e.stopPropagation()
	};
	e.prototype.onDown = function(t) {
		if (this.isPaused) return;
		this.isMouseDown = true;
		this.soundManager.playMusic();
		var n = MenuManager.instance.credits.isMenuActive ? MenuManager.instance.credits: MenuManager.instance.current;
		var r = n == this.menuManager.target;
		if (n) n.onDown(t.stageX, t.stageY);
		if (e.level && !r && (n != Tutorial.instance || Tutorial.instance.tapAllowed)) e.level.onMouseDown(t.stageX, t.stageY);
		this.onMove(t);
		t.nativeEvent && t.preventDefault && t.preventDefault() && t.stopPropagation()
	};
	e.prototype.onMove = function(t) {
		if (this.isPaused) return;
		if (!this.isMouseDown) return;
		var n = MenuManager.instance.current;
		var r = n == this.menuManager.target;
		if (e.level && !r && (n != Tutorial.instance || Tutorial.instance.tapAllowed)) e.level.onMouseMove(t.stageX, t.stageY);
		t.nativeEvent && t.preventDefault && t.preventDefault() && t.stopPropagation()
	};
	e.prototype.onUp = function(t) {
		if (this.isPaused) return;
		this.isMouseDown = false;
		var n = MenuManager.instance.credits.isMenuActive ? MenuManager.instance.credits: MenuManager.instance.current;
		if (n) n.onUp(t.stageX, t.stageY);
		var r = n == this.menuManager.target;
		if (e.level && !r && (n != Tutorial.instance || Tutorial.instance.tapAllowed)) e.level.onMouseUp(t.stageX, t.stageY);
		t.nativeEvent && t.preventDefault && t.preventDefault() && t.stopPropagation()
	};
	e.prototype.resize = function() {
		var t = false;
		var n = .95;
		var r = e.SCREEN_W * n;
		var i = e.FULL_SCREEN_H * n;
		t = t && window.innerWidth > r && window.innerHeight > i;
		var s = t ? r: window.innerWidth,
		o = t ? i: window.innerHeight;
		var u = this.stage;
		var a = s,
		f = o;
		var l = document.getElementById("portraitLock");
		if (isOrientationLocked()) {
			l.style.display = "block";
			u.canvas.style.display = "none"
		} else {
			l.style.display = "none";
			u.canvas.style.display = "block";
			var c = u.canvas.width,
			h = u.canvas.height,
			p = s / c,
			d = o / e.SCREEN_H,
			v = Math.min(p, d);
			var m = c * v,
			g = h * v;
			u.canvas.style.width = m + "px";
			u.canvas.style.height = g + "px";
			e.ACTUAL_H = limit(e.SCREEN_H * d / v, e.SCREEN_H, e.FULL_SCREEN_H);
			var y = (o - g) / 2,
			b = u.canvas.parentElement;
			e.CURRENT_SHIFT = y / v;
			u.canvas.style.top = y + "px";
			this.stage.canvas.style.left = (window.innerWidth - m) / 2 + "px";
			if (t) this.stage.canvas.style.top = (window.innerHeight - g) / 2 + "px"
		}
		if (this.menuManager) this.menuManager.onResize();
		if (this.preloader) this.preloader.onResize()
	};
	e.prototype.setVisibilityListener = function() {
		var e = this;
		var t = "hidden";
		var n = function() {
			return e.onVisibilityChange()
		};
		if (t in document) {
			document.addEventListener("visibilitychange", n);
			this.visibilityState = "visibilityState"
		} else if ((t = "mozHidden") in document) {
			document.addEventListener("mozvisibilitychange", n);
			this.visibilityState = "mozVisibilityState"
		} else if ((t = "webkitHidden") in document) {
			document.addEventListener("webkitvisibilitychange", n);
			this.visibilityState = "webkitVisibilityState"
		} else if ((t = "msHidden") in document) {
			document.addEventListener("msvisibilitychange", n);
			this.visibilityState = "msVisibilityState"
		} else if ("onfocusin" in document) document.onfocusin = document.onfocusout = n;
		else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
	};
	e.prototype.onVisibilityChange = function() {
		var e = this.visibilityState && document[this.visibilityState] && document[this.visibilityState] == "hidden";
		this.isHidden = e;
		if (SoundsManager.instance.musicPaused && !e) SoundsManager.instance.resumeMusic();
		else if (e && !SoundsManager.instance.musicPaused) SoundsManager.instance.pauseMusic()
	};
	e.SCREEN_W = 640;
	e.SCREEN_H = 750;
	e.FULL_SCREEN_H = 960;
	e.ACTUAL_H = e.SCREEN_H;
	e.SHIFT_H = (e.FULL_SCREEN_H - e.SCREEN_H) / 2;
	e.CURRENT_SHIFT = 0;
	e.episode = 2;
	return e
} ();
var ActionType; (function(e) {
	e[e["ACTION_STOP"] = 0] = "ACTION_STOP";
	e[e["ACTION_GOTO_AND_PLAY"] = 1] = "ACTION_GOTO_AND_PLAY";
	e[e["ACTION_GOTO_AND_STOP"] = 2] = "ACTION_GOTO_AND_STOP"
})(ActionType || (ActionType = {}));
var FrameSelector = function() {
	function e(e) {
		this.object = e;
		this.names = new Array;
		this.values = new Array
	}
	e.prototype.getFrame = function(e, t) {
		return 0
	};
	e.prototype.testLayer = function(e) {
		return true
	};
	return e
} ();
var SingleFlameSelector = function(e) {
	function t(t) {
		e.call(this, null);
		this.frame = t
	}
	__extends(t, e);
	t.prototype.getFrame = function(e, t) {
		return this.frame
	};
	return t
} (FrameSelector);
var AnimatedNode = function(e) {
	function t(t, n, r, i) {
		if (typeof i === "undefined") {
			i = 0
		}
		e.call(this);
		this.animation = t;
		this.parts = new Array;
		this.isPlaying = true;
		this.actions = new Array;
		this.hasCycle = false;
		this.owner = null;
		this.skins = new Array;
		this.frameSelector = r;
		this.initFrameDelay = n;
		this.initParts(i);
		this.mouseChildren = false
	}
	__extends(t, e);
	t.prototype.createUsualSprite = function(e, t) {
		if (typeof t === "undefined") {
			t = 0
		}
		return createSpriteFromSpritesheet(e, t)
	};
	t.prototype.initParts = function(e) {
		if (typeof e === "undefined") {
			e = 0
		}
		this.setFrameDelay(this.animation.forceFrameDelay > 0 ? this.animation.forceFrameDelay: Math.abs(this.initFrameDelay) < 1e-10 ? 1 / DESIGN_FPS: this.initFrameDelay);
		this.totalFrames = 1;
		for (var t = 0; t < this.animation.layers.length; t++) {
			var n = this.animation.layers[t];
			if (this.frameSelector && !this.frameSelector.testLayer(this.animation.name)) continue;
			this.totalFrames = Math.max(this.totalFrames, n.frames.length);
			var r = this.frameSelector ? this.frameSelector.getFrame(this, n) : 0;
			if (r != -1) {
				this.skins.push(r);
				var i = new createjs.Container;
				var s = null;
				var o = n.getClipData(r);
				s = this.createUsualSprite(o.name, e);
				s.regX = s.getBounds().width * o.anchor.x;
				s.regY = s.getBounds().height * (1 - o.anchor.y);
				i.addChild(s);
				this.parts.push(i);
				this.addChild(i)
			} else {
				this.skins.push( - 1);
				this.parts.push(null)
			}
		}
		this.gotoAndPlay(0);
		if (this.animation.transform) this.animation.transform.applyTransform(this);
		if (this.totalFrames <= 1) this.stop();
		if (this.frameSelector) {
			this.frameSelector = null
		}
		if (this.animation && this.animation.isAdd) {}
		if (this.animation && this.animation.isOverlay) {}
	};
	t.prototype.getFrameByPartIndex = function(e) {
		var t = this.animation;
		var n = e;
		var r = t.layers[n].frames[this.currentFrame];
		return r
	};
	t.prototype.disableLayer = function(e) {
		var t = this.getPartByFlashName(e);
		if (t) removeClip(t)
	};
	t.prototype.update = function(e) {
		limitDt(e);
		if (this.isPlaying) {
			this.currentDelay -= e;
			while (this.currentDelay <= 0) {
				this.gotoAndPlay(this.currentFrame + 1);
				for (var t = 0; t < this.actions.length; t++) this.actions[t].checkAction();
				this.currentDelay += this.frameDelay;
				if (this.currentFrame == 0) this.hasCycle = true
			}
		}
	};
	t.prototype.setRandomFrame = function() {
		var e = getInt(this.totalFrames);
		if (this.isPlaying) this.gotoAndPlay(e);
		else this.gotoAndStop(e)
	};
	t.prototype.setFrameDelay = function(e) {
		this.currentDelay = this.frameDelay = e
	};
	t.prototype.setFps = function(e) {
		this.setFrameDelay(1 / e)
	};
	t.prototype.isOnLastFrame = function() {
		return this.currentFrame == this.totalFrames - 1
	};
	t.prototype.setOwner = function(e) {
		this.owner = e
	};
	t.prototype.getOwner = function() {
		return this.owner
	};
	t.prototype.gotoAndPlay = function(e) {
		this.play();
		this.currentFrame = Math.max(0, e);
		this.currentFrame = this.currentFrame % this.totalFrames;
		for (var t = 0; t < this.parts.length; t++) {
			var n = this.parts[t];
			if (n) {
				var r = this.animation;
				var i = t;
				var s = r.layers[i].frames[this.currentFrame];
				s.applyTransform(n);
				if (this.owner) n.visible = n.visible && this.owner.canBeVisible(n)
			}
		}
		var o = this.currentFrame;
		for (t = 0; t < this.actions.length; t++) {
			this.actions[t].checkAction();
			if (this.currentFrame != o) return
		}
	};
	t.prototype.gotoAndStop = function(e) {
		this.gotoAndPlay(e);
		this.stop()
	};
	t.prototype.play = function() {
		if (!this.isPlaying) this.resetFrameDelay();
		this.isPlaying = true
	};
	t.prototype.stop = function() {
		this.isPlaying = false;
		this.resetFrameDelay()
	};
	t.prototype.resetFrameDelay = function() {
		this.currentDelay = this.frameDelay
	};
	t.prototype.getCurrentDelay = function() {
		return this.currentDelay
	};
	t.prototype.setCurrentDelay = function(e) {
		this.currentDelay = this.frameDelay * e
	};
	t.prototype.getFloatFrame = function() {
		return this.currentFrame + limit((this.frameDelay - this.currentDelay) / this.frameDelay, 0, 1)
	};
	t.prototype.setPartSkin = function(e, t, n) {
		if (typeof n === "undefined") {
			n = false
		}
		var r = this.animation.getLayerByFlashName(e);
		var i = this.parts[r].getChildAt(0);
		var s = this.animation.layers[r];
		if (n) t = s.clipDatas.length + t;
		this.skins[r] = t;
		var o = s.getClipData(t);
		i.gotoAndStop(o.name);
		i.regX = i.getBounds().width * o.anchor.x;
		i.regY = i.getBounds().height * (1 - o.anchor.y)
	};
	t.prototype.getPart = function(e) {
		return this.parts[e]
	};
	t.prototype.getPartByFlashName = function(e) {
		return this.getPart(this.animation.getLayerByFlashName(e))
	};
	t.prototype.getPartSkin = function(e) {
		return this.skins[e]
	};
	t.prototype.getPartSkinByName = function(e) {
		return this.getPartSkin(this.animation.getLayerByFlashName(e))
	};
	t.prototype.getSkinByFlashName = function(e) {
		return this.getPartSkin(this.animation.getLayerByFlashName(e))
	};
	t.prototype.updateOwnerVisibility = function() {
		for (var e = 0; e < this.parts.length; e++) {
			var t = this.parts[e];
			if (t && this.owner) t.visible = t.visible && this.owner.canBeVisible(t)
		}
	};
	t.prototype.destroy = function() {
		this.skins = null;
		this.frameSelector = null;
		for (var e = 0; e < this.parts.length; e++) {
			if (this.parts[e]) removeClip(this.parts[e])
		}
		this.owner = null;
		this.parts = null;
		this.actions = null
	};
	t.prototype.addAction = function(e, t, n, r) {
		if (typeof n === "undefined") {
			n = -1
		}
		if (typeof r === "undefined") {
			r = 1
		}
		var i = new AnimationAction(e, t, this, n, r);
		this.actions.push(i);
		return i
	};
	return t
} (createjs.Container);
var FrameData = function() {
	function e(e, t, n, r, i, s, o, u, a) {
		if (typeof t === "undefined") {
			t = 100
		}
		if (typeof n === "undefined") {
			n = 0
		}
		if (typeof r === "undefined") {
			r = 0
		}
		if (typeof i === "undefined") {
			i = 0
		}
		if (typeof s === "undefined") {
			s = 1
		}
		if (typeof o === "undefined") {
			o = 1
		}
		if (typeof u === "undefined") {
			u = 0
		}
		if (typeof a === "undefined") {
			a = 0
		}
		this.visible = e;
		this.alpha = t;
		this.rotation = n;
		this.x = r;
		this.y = i;
		this.scaleX = s;
		this.scaleY = o;
		this.skewX = u;
		this.skewY = a
	}
	e.prototype.clone = function() {
		return new e(this.visible, this.alpha, this.rotation, this.x, this.y, this.scaleX, this.scaleY)
	};
	e.prototype.applyTransform = function(e) {
		e.visible = this.visible;
		if (!e.visible) return;
		e.alpha = this.alpha;
		e.rotation = this.rotation;
		e.x = this.x;
		e.y = this.y;
		e.scaleX = this.scaleX;
		e.scaleY = this.scaleY;
		e.skewX = isNaN(this.skewX) ? 0 : this.skewX;
		e.skewY = isNaN(this.skewY) ? 0 : this.skewY
	};
	e.getEmptyData = function() {
		if (!e.empty) e.empty = new e(false, 0, 0, 0, 0, 0, 0);
		return e.empty
	};
	return e
} ();
var ClipLayerData = function() {
	function e(e, t) {
		this.name = e.split(".")[0];
		this.anchor = t
	}
	return e
} ();
var LayerData = function() {
	function e(e, t, n) {
		this.isMark = n;
		this.frames = new Array;
		this.name = e;
		this.flashName = t;
		this.clipDatas = new Array
	}
	e.prototype.addFrame = function(e) {
		this.frames.push(e)
	};
	e.prototype.addClipData = function(e) {
		this.clipDatas.push(e)
	};
	e.prototype.getClipData = function(e) {
		return name == "none" ? null: e < this.clipDatas.length ? this.clipDatas[e] : this.clipDatas[this.clipDatas.length - 1]
	};
	e.prototype.clone = function() {
		var t = new e(this.name, this.flashName, false);
		for (var n = 0; n < this.clipDatas.length; n++) t.addClipData(new ClipLayerData(this.clipDatas[n].name, this.clipDatas[n].anchor));
		for (n = 0; n < this.frames.length; n++) t.addFrame(frames[n].clone());
		return t
	};
	return e
} ();
var AnimationData = function() {
	function e(e, t) {
		this.layerNameMap = {};
		this.layers = new Array;
		this.animationDatas = new Array;
		this.name = e;
		this.transform = t;
		this.isAdd = false;
		this.forceFrameDelay = -1;
		this.isOverlay = false
	}
	e.prototype.setAdd = function() {
		this.isAdd = true;
		return this
	};
	e.prototype.setScale = function(e, t) {};
	e.prototype.shift = function(e, t) {
		return this
	};
	e.prototype.addLayer = function(e) {
		var t = this.layers.length;
		this.layerNameMap[e.flashName] = t;
		this.layers.push(e)
	};
	e.prototype.addData = function(e) {
		this.animationDatas.push(e)
	};
	e.prototype.getLayerByFlashName = function(e) {
		return this.layerNameMap[e]
	};
	e.prototype.connectLayers = function(e) {
		return this
	};
	e.prototype.makeTheSameAmountOfFramesInAllLayers = function() {
		var e = 0;
		for (var t = 0; t < this.layers.length; ++t) e = Math.max(e, this.layers[t].frames.length);
		for (t = 0; t < this.layers.length; ++t) {
			var n = this.layers[t];
			while (n.frames.length < e) n.addFrame(FrameData.getEmptyData())
		}
	};
	e.prototype.cloneLayer = function(e, t) {
		var n = this.getLayerByFlashName(e);
		var r = this.getLayerByFlashName(t);
		this.layers[r].frames = this.layers[n].frames
	};
	return e
} ();
var AnimationManager = function() {
	function e() {
		this.data = {};
		e.instance = this;
		this.data = {}
	}
	e.prototype.putAnimation = function(e, t, n) {
		var r = this.parseAnimation(t, n);
		this.data[e] = r;
		return r
	};
	e.prototype.parseAnimation = function(e, t) {
		var n = new AnimationData(e.name, null);
		var r = 0;
		var i = e.l.length == undefined ? 1 : e.l.length;
		for (var s = 0; s < i; ++s) {
			var o = i == 1 ? e.l: e.l[s];
			var u = o.flashName;
			var a = o.isMark != undefined;
			var f = new LayerData(o.name, u ? u: "", a);
			var l = o.d.length == undefined ? 1 : o.d.length;
			for (var c = 0; c < l; ++c) {
				var h = l == 1 ? o.d: o.d[c];
				var p = h.name;
				var d = p.split("/");
				var v = d[d.length - 1];
				var m = parseFloat(h.anchorX);
				var g = parseFloat(h.anchorY);
				var y = new ClipLayerData(v, new createjs.Point(m, g > 0 ? 1 - g: 1 - g));
				f.addClipData(y)
			}
			for (var b = 0; b < t; b++) f.addFrame(FrameData.getEmptyData());
			var w = o.f.length == undefined ? 1 : o.f.length;
			for (var E = 0; E < w; ++E) {
				var S = null;
				var x = w == 1 ? o.f: o.f[E];
				var T = x.v != undefined && x.v != null ? x.v: true;
				if (!T) {
					S = FrameData.getEmptyData()
				} else {
					var N = T ? x.a != undefined ? parseFloat(x.a) : 100 : 0;
					N /= 100;
					var C = T ? parseFloat(x.r) : 0;
					var k = T ? parseFloat(x.x) : 0;
					var L = T ? parseFloat(x.y) : 0;
					var A = T ? parseFloat(x.scX) : 0;
					var O = T ? parseFloat(x.scY) : 0;
					var M = T ? parseFloat(x.skX) : 0;
					var _ = T ? parseFloat(x.skY) : 0;
					S = new FrameData(T, N, C, k, L, A, O, M, _)
				}
				f.addFrame(S)
			}
			n.addLayer(f);
			r = Math.max(r, E)
		}
		n.makeTheSameAmountOfFramesInAllLayers();
		return n
	};
	e.prototype.getAnimation = function(e) {
		return this.data[e]
	};
	return e
} ();
var AnimationAction = function() {
	function e(e, t, n, r, i) {
		this.frame = e;
		this.type = t;
		this.animation = n;
		this.data = r;
		this.probability = i;
		this.isEnabled = true;
		this.frameSelector = null
	}
	e.prototype.checkAction = function() {
		if (this.isEnabled && this.animation.currentFrame == this.frame && this.animation.isPlaying && Math.random() <= this.probability) {
			switch (this.type) {
			case 0:
				this.animation.stop();
				break;
			case 1:
				this.animation.gotoAndPlay(this.calcNextFrame());
				break;
			case 2:
				this.animation.gotoAndStop(this.data);
				break
			}
		}
	};
	e.prototype.calcNextFrame = function() {
		var e = !this.frameSelector ? this.data: this.frameSelector.selectFrame(this.frame);
		if (e == -1) e = this.data;
		return e
	};
	e.prototype.setSelector = function(e) {
		this.frameSelector = e
	};
	e.prototype.setEnabled = function(e) {
		this.isEnabled = e
	};
	e.prototype.getEnabled = function() {
		return this.isEnabled
	};
	return e
} ();
var Hud = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.currentPercent = 0;
		this.currentPercent2 = 0;
		this.barScale = 1;
		this.bar2Scale = 1;
		this.currentMoves = -1;
		this.currentTarget = "";
		this.currentScore = 0;
		this.starScales = [.3, .63, .999];
		this.stars = [];
		this.clickables = [];
		this.starsEarned = [false, false, false];
		var n = new createjs.Container;
		this.sprite = n;
		addChild(this.sprite, this.level.hudLayer);
		var r = this.sprite;
		var i = 0;
		var s = createSpriteFromSpritesheet("bar10");
		var o = new createjs.Bitmap(App.game.preloader.loader.getResult("bar"));
		var u = createSpriteFromSpritesheet("bar11");
		var a = createSpriteFromSpritesheet("bar20");
		var f = new createjs.Bitmap(App.game.preloader.loader.getResult("bar2"));
		var l = createSpriteFromSpritesheet("bar22");
		var c = createSpriteFromSpritesheet("bar_icon");
		addChild(s, n);
		addChild(o, n);
		addChild(u, n);
		addChild(a, n);
		addChild(f, n);
		addChild(l, n);
		addChild(c, n);
		this.timeIcon = createSpriteFromSpritesheet("time");
		n.addChild(this.timeIcon);
		setReg(this.timeIcon, .5, .5);
		this.timeIcon.x = 297 - 61;
		this.timeIcon.y = 817 + 1 + i;
		this.barRect = o.getBounds().clone();
		this.bar = o;
		s.x = 125 - 116 + 1;
		s.y = 787 - 11 + i;
		o.x = 125 + 1 - 116;
		o.y = 787 - 10 + i;
		o.scaleX = o.scaleY = this.barScale;
		u.x = 125 + 0 - 117;
		u.y = 787 - 15 + i;
		this.bar2Rect = f.getBounds().clone();
		this.bar2 = f;
		a.x = 514 - 116 + 3;
		a.y = 787 - 11 + 6 + i;
		f.x = 514 - 116 + 3;
		f.y = 787 - 11 + 6 + i;
		f.scaleX = o.scaleY = this.bar2Scale;
		l.x = 514 - 118 + 2;
		l.y = 787 - 15 + 6 + i;
		c.x = f.x + 15;
		c.y = f.y + 1;
		setReg(c, .5, .5);
		var h = new createjs.BitmapText("xxx", App.game.atlases[1]);
		h.letterSpacing = -5;
		h.spaceWidth *= .8;
		h.scaleX = h.scaleY = .75;
		this.movesText = h;
		n.addChild(this.movesText);
		var h = new createjs.BitmapText("1", App.game.atlases[1]);
		h.letterSpacing = -6;
		h.scaleX = h.scaleY = .75;
		this.targetText = h;
		n.addChild(this.targetText);
		var h = new createjs.BitmapText("score", App.game.atlases[1]);
		h.letterSpacing = -6;
		this.scoreText = h;
		h.x = 100;
		h.getBounds();
		h.x = 1e3;
		h.scaleX = h.scaleY = .75;
		var p = h.getBounds();
		n.addChild(this.scoreText);
		var d = createSpriteFromSpritesheet("dirt", 0);
		d.x = c.x;
		d.y = c.y;
		n.addChild(d);
		this.targetIcon = d;
		for (var v = 0; v < 3; ++v) {
			d = createSpriteFromSpritesheet("star1");
			d.regX = d.getBounds().width / 2;
			d.regY = d.getBounds().height / 2;
			var m = o.x;
			var g = o.x + o.getBounds().width;
			d.y = 787 - 8 + i;
			n.addChild(d);
			d.x = lerp(m, g, this.starScales[v]);
			this.stars.push(d)
		}
		this.pauseButton = createSpriteFromSpritesheet("pause button");
		this.pauseButton.x = 602;
		this.pauseButton.y = 797 + i;
		this.pauseButton.regX = this.pauseButton.getBounds().width / 2;
		this.pauseButton.regY = this.pauseButton.getBounds().height / 2;
		n.addChild(this.pauseButton);
		var y = new ClickableObject(this.pauseButton);
		y.setRect(0, 0, 62 + 10, 62 + 10);
		y.callback = function() {
			if(pstatus){
				t.pauseLevel();
			}
		};
		this.clickables.push(y);
		this.logo = new LogoObject(n, 60, 830 + 5, .7);
		this.clickables.push(this.logo);
		this.shuffleText = createSpriteFromSpritesheet("moves_text");
		this.shuffleText.x = App.SCREEN_W / 2;
		this.shuffleText.regX = this.shuffleText.getBounds().width / 2;
		this.shuffleText.regY = this.shuffleText.getBounds().height / 2;
		this.update(0)
	}
	__extends(t, e);
	t.prototype.playShuffleAnimation = function() {
		var e = this;
		this.sprite.addChild(this.shuffleText);
		this.shuffleText.x = App.SCREEN_W / 2;
		this.shuffleText.y = App.SHIFT_H + 400;
		this.shuffleText.alpha = 0;
		createjs.Tween.get(this.shuffleText, {
			loop: false
		}).to({
			alpha: 1,
			y: this.shuffleText.y - 200
		},
		400, createjs.Ease.quadInOut).wait(300).to({
			alpha: 0,
			y: this.shuffleText.y - 400
		},
		400, createjs.Ease.quadIn).call(function() {
			return e.stopShuffle()
		});
		SoundsManager.instance.playSound("gui_move")
	};
	t.prototype.onDown = function(e, t) {
		var n = this.clickables.length;
		for (var r = 0; r < n; ++r) {
			var i = this.clickables[r];
			if (i && i.checkClick(e, t)) {
				i.onClick();
				break
			}
		}
	};
	t.prototype.stopShuffle = function() {
		removeClip(this.shuffleText)
	};
	t.prototype.isShuffleActive = function() {
		return this.shuffleText.parent != null
	};
	t.prototype.show = function() {
		this.currentMoves = -1;
		this.currentTarget = "";
		this.currentScore = -1;
		this.currentPercent = 0;
		this.bar.sourceRect = new createjs.Rectangle(0, 0, limit(this.barRect.width * 0, 1, this.barRect.width), this.barRect.height);
		this.bar2.sourceRect = new createjs.Rectangle(0, 0, limit(this.bar2Rect.width * 0, 1, this.bar2Rect.width), this.bar2Rect.height);
		for (var e = 0; e < 3; ++e) this.starsEarned[e] = false;
		this.scores = Match3Level.instance.target.scores;
		var t = Match3Level.instance.target.getText();
		var n = Match3Level.instance.target.getHudIconData();
		this.targetIcon.spriteSheet = App.game.atlases[n[5]];
		this.targetIcon.gotoAndStop(n[0]);
		this.targetIcon.regX = this.targetIcon.getBounds().width / 2 - n[3];
		this.targetIcon.regY = this.targetIcon.getBounds().height / 2 - n[4];
		this.targetIcon.scaleX = n[1];
		this.targetIcon.scaleY = n[2];
		removeClip(this.shuffleText);
		this.logo.setVisible(true);
		this.update(0)
	};
	t.prototype.pauseLevel = function() {
		if (MenuManager.instance.target.sprite.parent || Match3Level.instance.isWaitingForTarget && !Match3Level.instance.isHardLocked) return;
		this.level.pause();
		SoundsManager.instance.playSound("pause")
	};
	t.prototype.updateBar = function(e) {
		var t = Match3Level.instance.score / this.scores[2];
		t = limit(t, 0, 1);
		var n = t - this.currentPercent;
		var r = .005 * 60 * e;
		if (Math.abs(n) <= r) this.currentPercent = t;
		else this.currentPercent += r * n / Math.abs(n);
		var i = this.scores.length;
		var s = 1;
		for (var o = 0; o < i; ++o) {
			var u = o == 0 ? 0 : this.scores[o - 1] / this.scores[2];
			var a = this.scores[o] / this.scores[2];
			if (this.currentPercent >= u && this.currentPercent <= a) {
				s = lerp(o == 0 ? 0 : this.starScales[o - 1], this.starScales[o], (this.currentPercent - u) / (a - u));
				break
			}
		}
		if (!this.bar.sourceRect) this.bar.sourceRect = new createjs.Rectangle;
		this.bar.sourceRect.initialize(0, 0, limit(this.barRect.width * s, 1, this.barRect.width), this.barRect.height);
		var f = this.currentPercent == 1 ? 2 : o - 1;
		if (f >= 0 && !this.starsEarned[f]) {
			this.starsEarned[f] = true;
			this.stars[f].scaleY = 2.5;
			this.stars[f].scaleX = 2;
			this.stars[f].gotoAndStop("star2");
			createjs.Tween.get(this.stars[f], {
				loop: false
			}).wait(0).to({
				scaleY: 1,
				scaleX: 1
			},
			400, createjs.Ease.quadOut);
			SoundsManager.instance.playSound("star_hud")
		}
		var t = Match3Level.instance.target.progress;
		if (isNaN(t)) t = 0;
		t = limit(t, 0, 1);
		var n = t - this.currentPercent2;
		var r = .005 * 60 * e;
		if (Math.abs(n) <= r) this.currentPercent2 = t;
		else this.currentPercent2 += r * n / Math.abs(n);
		var s = .23 + .77 * this.currentPercent2;
		if (!this.bar2.sourceRect) this.bar2.sourceRect = new createjs.Rectangle;
		this.bar2.sourceRect.initialize(0, 0, limit(this.bar2Rect.width * s, 1, this.bar2Rect.width), this.bar2Rect.height)
	};
	t.prototype.forceFullUpdate = function() {
		this.updateBar(10);
		this.scoreText.text = "p: " + Match3Level.instance.score.toString()
	};
	Object.defineProperty(t.prototype, "starEarnedAmount", {
		get: function() {
			var e = 0;
			for (var t = 0; t < 3; ++t) if (this.starsEarned[t]) e++;
			return e
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.timeIcon.visible = Match3Level.instance && Match3Level.instance.isTimeLevel;
		if (Match3Level.instance && this.scores) this.updateBar(t);
		if (this.level.target && this.level.target.isCompleted && (!this.level.target.isScoreTarget || this.starEarnedAmount == 3 || this.level.limitLeft <= 0 || this.level.isTimeLevel)) this.level.startAwardMode();
		var n = Math.round(limit(this.level.limitLeft, 0, 1e10));
		if (this.currentMoves != n) {
			createjs.Tween.removeTweens(this.movesText);
			this.currentMoves = n;
			this.movesText.text = (this.level.isTimeLevel ? "s: ": "q: ") + n;
			this.movesText.scaleX = this.movesText.scaleY = .9;
			var r = getTextSize(this.movesText);
			this.movesText.regX = 0;
			this.movesText.regY = r.y / 2;
			this.movesText.x = 265 - 3;
			this.movesText.y = 818 - 1;
			if (!this.level.isTimeLevel || n < 10) {
				this.movesText.scaleY = 1.5;
				createjs.Tween.get(this.movesText, {
					loop: false
				}).wait(0).to({
					scaleY: .9
				},
				200, createjs.Ease.quadOut)
			}
		}
		if (Match3Level.instance && Match3Level.instance.target) {
			var i = Match3Level.instance.target.getTargetText();
			if (i != this.currentTarget) {
				createjs.Tween.removeTweens(this.targetText);
				this.currentTarget = i;
				this.targetText.text = "r: " + i;
				var r = getTextSize(this.targetText);
				this.targetText.regX = 0;
				this.targetText.regY = r.y / 2;
				this.targetText.x = 440;
				this.targetText.y = 818;
				this.targetText.scaleY = 1.5;
				createjs.Tween.get(this.targetText, {
					loop: false
				}).wait(0).to({
					scaleY: .75
				},
				200, createjs.Ease.quadOut)
			}
		}
		var s = Match3Level.instance.score;
		if (this.currentScore != s) {
			createjs.Tween.removeTweens(this.scoreText);
			this.currentScore = s;
			this.scoreText.text = "p: " + s.toString();
			var r = getTextSize(this.scoreText);
			this.scoreText.regX = 0;
			this.scoreText.regY = r.y / 2;
			this.scoreText.x = 85;
			this.scoreText.y = 818;
			this.scoreText.scaleY = .75 * 2;
			createjs.Tween.get(this.scoreText, {
				loop: false
			}).wait(0).to({
				scaleY: .75
			},
			200, createjs.Ease.quadOut)
		}
	};
	t.prototype.destroy = function() {
		e.prototype.destroy.call(this)
	};
	t.prototype.reset = function() {
		this.currentPercent = 0;
		this.currentPercent2 = 0;
		this.currentMoves = -1;
		this.currentScore = -1;
		this.currentTarget = "xxx";
		removeClip(this.sprite);
		addChild(this.sprite, this.level.hudLayer);
		for (var e = 0; e < 3; ++e) this.stars[e].gotoAndStop("star1")
	};
	return t
} (GameObject);
var Menu = function(e) {
	function t() {
		e.call(this);
		this.animatedButtons = [];
		this.clickables = [];
		this.isMenuActive = false;
		this.lastClickCount = 0
	}
	__extends(t, e);
	t.prototype.show = function() {
		if (this.sprite) this.stage.addChild(this.sprite);
		for (var e = 0; e < this.animatedButtons.length; ++e) if (this.animatedButtons[e]) this.animatedButtons[e].onShow();
		this.isMenuActive = true;
		this.onResize()
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		var n = this.animatedButtons.length;
		for (var r = 0; r < n; ++r) if (this.animatedButtons[r]) this.animatedButtons[r].update(t)
	};
	t.prototype.hide = function() {
		removeClip(this.sprite);
		this.isMenuActive = false;
		for (var e = 0; e < this.animatedButtons.length; ++e) if (this.animatedButtons[e]) this.animatedButtons[e].onHide()
	};
	t.prototype.checkClick = function(e, t) {
		this.lastClickCount = 0;
		var n = this.clickables.length;
		for (var r = 0; r < n; ++r) {
			var i = this.clickables[r];
			if (i && i.checkClick(e, t)) {
				i.onClick(); ++this.lastClickCount;
				break
			}
		}
	};
	t.prototype.onResize = function() {};
	t.prototype.onDown = function(e, t) {};
	t.prototype.onUp = function(e, t) {
		this.checkClick(e, t)
	};
	t.prototype.restartLevel = function(e) {
		if (typeof e === "undefined") {
			e = null
		}
		LevelManager.instance.restartLevel();
		if (e) e.nativeEvent && e.preventDefault && e.preventDefault()
	};
	t.prototype.loadMainMenu = function(e) {
		if (typeof e === "undefined") {
			e = null
		}
		MenuManager.instance.show(MenuManager.instance.map);
		if (e) e.preventDefault()
	};
	return t
} (GameObject);
var MenuManager = function() {
	function e() {
		this.menus = [];
		this.map = new MapMenu;
		this.mainMenu = new MainMenu;
		this.transition = new TransitionMenu;
		this.winMenu = new WinMenu;
		this.loseMenu = new LoseMenu;
		this.target = new TargetMenu;
		this.pause = new PauseMenu;
		this.result = new ResultMenu;
		this.tutorial = new Tutorial;
		this.credits = new CreditsMenu;
		this.splashMenu = new SplashScreen;
		this.menus.push(this.map, this.mainMenu, this.transition, this.winMenu, this.loseMenu, this.target, this.pause, this.result, this.credits, this.splashMenu);
		e.instance = this
	}
	e.prototype.isOnTutorial = function() {
		return this.current == this.tutorial
	};
	e.prototype.traceActive = function() {
		var e = "";
		for (var t = 0; t < this.menus.length; ++t) e += " " + (this.menus[t].sprite.parent && this.menus[t].sprite.visible);
		console.log(e)
	};
	e.prototype.show = function(e, t) {
		if (typeof t === "undefined") {
			t = true
		}
		try {
			if (t) this.transition.play(e);
			else {
				this.closeCurrent();
				this.current = e;
				this.current.show();
				this.current.update(0)
			}
		} catch(n) {
			alert("Menu manger show error " + n);
			this.closeCurrent();
			this.current = e;
			this.current.show();
			this.transition.stopMove();
			alert("Error in menu show: " + n)
		}
	};
	e.prototype.update = function(e) {
		if (this.credits.isMenuActive) this.credits.update(e);
		else if (this.current && !(this.current == this.map && this.transition.isActive && this.transition.menuToShow == null && !this.transition.hasDoneAction)) this.current.update(e);
		if (this.transition.isActive) this.transition.update(e)
	};
	e.prototype.closeCurrent = function() {
		if (this.current) this.current.hide();
		this.current = null
	};
	e.prototype.onResize = function() {
		if (this.current) this.current.onResize()
	};
	return e
} ();
var MapMenu = function(e) {
	function t() {
		var n = this;
		e.call(this);
		this.firstShow = false;
		this.isMoving = false;
		this.height = 0;
		this.pointerIsMoving = false;
		this.pointerScaleSpeed = 1;
		this.currentLevel = 0;
		this.downPos = new createjs.Point;
		this.downGPos = new createjs.Point;
		this.speed = 0;
		this.isDown = false;
		this.dragSpeed = 0;
		this.lastSpeed = 0;
		this.mainSprites = [];
		this.buttons = [];
		this.levelToUnlock = -1;
		this.isLevelUnlocking = false;
		this.isPlayPressed = false;
		this.isScrolling = false;
		this.pointerSprites = [];
		this.timeSinceScroll = 0;
		this.lastMovePoint = cjp(0, 0);
		t.BUTTON_RADIUS = App.episode == 2 ? 25 : 30;
		this.sprite = new createjs.Container;
		this.scrollSprite = new createjs.Container;
		this.sprite.addChild(this.scrollSprite);
		var r = 0;
		var i = [["map1", "map2", "map3", "map4", "map21", "map22", "map23", "map24"].reverse(), ["map1", "map2", "map3", "map4"].reverse(), ["map1", "map2", "map3", "map4"].reverse()][App.episode];
		var s = App.episode == 0 ? 8 : 4;
		var o = App.episode <= 1 ? 0 : 4;
		for (var u = 0; u < s; ++u) {
			var a = o + u;
			var f = i[u];
			var l = new createjs.Bitmap(App.game.preloader.loader.getResult(f));
			var c = App.episode == 0 && f == "map14" ? -175 : u == 0 ? 0 : -10;
			l.y = r + c;
			this.height += l.getBounds().height + c;
			this.scrollSprite.addChild(l);
			r += l.getBounds().height + c;
			this.mainSprites.push(l)
		}
		this.rect = this.scrollSprite.getBounds();
		var h = createSpriteFromSpritesheet("level_marker");
		h.regX = h.getBounds().width / 2;
		h.regY = h.getBounds().height / 2;
		this.scrollSprite.addChild(h);
		h.mouseEnabled = true;
		this.pointer = h;
		for (u = 0; u < LevelManager.LEVEL_AMOUNT; ++u) {
			var p = mapButtons[App.episode][u];
			var d = App.episode == 2 || App.episode == 0 && u >= 30;
			var v = cjp(0, 0);
			v.x = p[0] - 5;
			v.y = p[1];
			if (App.episode == 1) v.y += 2290;
			else if (App.episode == 2) v.y += 2800;
			else if (App.episode == 0) v.y += 2800 + (u < 30 ? 2290 - 112 : 0);
			this.buttons.push(new MapButton(u, v.x, v.y, this.scrollSprite))
		}
		h.x = this.buttons[0].sprite.x;
		h.y = this.buttons[0].sprite.y;
		var m = new createjs.BitmapText("99", App.game.atlases[1]);
		m.letterSpacing = -10;
		m.y = -75 - 6;
		this.pointerSprites.push(m);
		for (var u = 0; u < 3; ++u) {
			var g = createSpriteFromSpritesheet("star");
			g.regX = g.getBounds().width / 2;
			g.regY = g.getBounds().height / 2;
			g.scaleX = g.scaleY = .36 + u * .08;
			g.x = u == 0 ? -47 : u == 1 ? 0 : 52;
			g.y = -110 + (u == 1 ? -11 : u == 0 ? 5 : 0);
			g.rotation = (u - 1) * 25;
			this.pointerSprites.push(g)
		}
		g = createSpriteFromSpritesheet("dirt", 0);
		this.pointerSprites.push(g);
		g.y = -11;
		this.scrollSprite.y = 0;
		for (var u = 0; u < this.pointerSprites.length; ++u) this.pointerSprites[u].mouseEnabled = false;
		var y = new SoundButton(true, this.sprite, 570, 115 - 50);
		this.animatedButtons.push(y);
		this.clickables.push(y);
		var y = new SoundButton(false, this.sprite, 570, 215 - 50);
		this.animatedButtons.push(y);
		this.clickables.push(y);
		var y = new ScaleButton(createSpriteFromSpritesheet("home_button"),
		function(e) {
			n.loadMain(e)
		},
		this.sprite, 350 + 35, 115 - 10);
		this.animatedButtons.push(y);
		this.clickables.push(y);
		this.brandLogo = new LogoObject(this.sprite, App.SCREEN_W / 2, 0, 1);
		this.clickables.push(this.brandLogo);
		this.onResize()
	}
	__extends(t, e);
	t.prototype.onResize = function() {
		e.prototype.onResize.call(this);
		for (var t = 1; t <= 3; ++t) {
			this.clickables[t - 1].sprite.x = 530 + (t - 2) * 70;
			this.clickables[t - 1].sprite.y = 40 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2 + (t == 3 ? -2 : 0);
			this.animatedButtons[t - 1].baseScale = t == 3 ? .75 : .95;
			this.clickables[t - 1].updateRectScale()
		}
		if (this.brandLogo.sprite) this.brandLogo.sprite.y = App.ACTUAL_H - 25 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2
	};
	t.prototype.loadMain = function(e) {
		MenuManager.instance.show(MenuManager.instance.mainMenu)
	};
	t.prototype.show = function() {
		var t = this;
		e.prototype.show.call(this);
		this.isLevelUnlocking = this.levelToUnlock > 0;
		this.isPlayPressed = false;
		this.isMoving = false;
		this.pointerIsMoving = false;
		this.speed = 0;
		this.isDown = false;
		this.isScrolling = false;
		this.update(0);
		this.sprite.addEventListener("mousedown",
		function(e) {
			t.onMouseDown(e)
		});
		this.sprite.addEventListener("pressup",
		function(e) {
			t.onPressUp(e)
		});
		this.sprite.addEventListener("click",
		function(e) {
			t.onClick(e)
		});
		this.sprite.addEventListener("pressmove",
		function(e) {
			t.onPressMove(e)
		});
		this.firstShow = LevelManager.instance.isFirstLoad && !isEditorVersion;
		if (this.firstShow) {
			LevelManager.instance.isFirstLoad = false;
			this.firstShow = false;
			this.scrollSprite.y = App.episode == 1 ? 100 : 0;
			var n = 1;
			this.scroll(App.ACTUAL_H - this.rect.height, (App.episode == 0 ? 1 : .4) * 7e3 / n, (App.episode == 1 ? .8 : 1) * 1500 / n);
			this.movePoinPointerToButton(0)
		} else if (this.isLevelUnlocking) {
			var r = this.buttons[this.levelToUnlock].mainSprite;
			r.alpha = 0;
			createjs.Tween.get(r, {
				loop: false
			}).wait(650).call(function() {
				return t.onButtonHide()
			}).to({
				alpha: 1
			},
			500, createjs.Ease.cubicOut)
		} else {
			this.movePoinPointerToButton(LevelManager.instance.lastOpened)
		}
	};
	t.prototype.fastUnlock = function(e) {
		this.levelToUnlock = -1
	};
	t.prototype.onButtonHide = function() {
		this.movePoinPointerToButton(this.levelToUnlock)
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this);
		this.sprite.removeAllEventListeners();
		this.pointer.removeAllEventListeners()
	};
	t.prototype.destroy = function() {
		e.prototype.destroy.call(this)
	};
	t.prototype.onMouseDown = function(e) {
		if (this.isLevelUnlocking) return;
		this.isScrolling = false;
		this.downGPos.x = e.stageX;
		this.downGPos.y = e.stageY;
		this.downPos = this.scrollSprite.globalToLocal(e.stageX, e.stageY);
		this.lastMovePoint.x = this.downGPos.x;
		this.lastMovePoint.y = this.downGPos.y;
		this.isDown = true;
		this.dragSpeed = 0;
		e.nativeEvent && e.preventDefault && e.preventDefault()
	};
	t.prototype.onPressUp = function(e) {
		if (this.isLevelUnlocking) return;
		this.isDown = false;
		this.speed = this.lastSpeed;
		var t = sign(this.speed);
		this.speed = t * limit(Math.abs(this.speed), 0, 15);
		createjs.Tween.get(this, {
			loop: false
		}).wait(0).to({
			speed: 0
		},
		600, createjs.Ease.cubicOut);
		this.isScrolling = false;
		e.nativeEvent && e.preventDefault && e.preventDefault()
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		if (!this.isDown) this.scrollSprite.y = this.limitY(this.scrollSprite.y + this.speed);
		if (this.isScrolling && Math.abs(this.downGPos.x - this.lastMovePoint.x) + Math.abs(this.downGPos.y - this.lastMovePoint.y) > 5) this.timeSinceScroll = 0;
		else this.timeSinceScroll += t;
		var n = this.mainSprites.length;
		for (var r = 0; r < n; ++r) {
			var i = this.mainSprites[r]
		}
		for (var r = 0; r < LevelManager.LEVEL_AMOUNT; ++r) {
			this.buttons[r].updateState(LevelManager.instance.data[r].state, r == this.levelToUnlock, LevelManager.instance.data[r].stars)
		}
		if (!this.pointerIsMoving) {
			var s = this.pointer.scaleX + t * .1 * this.pointerScaleSpeed;
			if (s > 1.02 && this.pointerScaleSpeed > 0 || s < .98 && this.pointerScaleSpeed < 0) this.pointerScaleSpeed *= -1;
			this.pointer.scaleX = this.pointer.scaleY = limit(s, .98, 1.02)
		}
	};
	t.prototype.onClick = function(e) {
		if (this.isLevelUnlocking || this.isPlayPressed || this.timeSinceScroll < .15) return;
		var t = this.clickables.length;
		for (var n = 0; n < t; ++n) if (this.clickables[n].checkClick(e.stageX, e.stageY)) {
			return
		}
		if (!this.isMoving && !this.pointerIsMoving && !MenuManager.instance.transition.isActive) {
			var r = this.scrollSprite.globalToLocal(e.stageX, e.stageY);
			var t = this.buttons.length;
			for (var n = 0; n < t; ++n) {
				var i = this.buttons[n].sprite;
				if (i.visible && r.x >= i.x - 55 - 5 && r.x <= i.x + 96 + 5 && r.y >= i.y - 95 - 5 && r.y <= i.y + 38 + 5) {
					if (LevelManager.instance.data[n].state == LevelData.CLOSED_STATE && needLockLevels) return;
					LevelManager.instance.prepareToLoadLevel(n);
					break
				}
			}
		}
		e.nativeEvent && e.preventDefault && e.preventDefault()
	};
	t.prototype.movePoinPointerToButton = function(e) {
		var t = this;
		var n = this.buttons[e].sprite;
		this.pointerIsMoving = true;
		this.currentLevel = e;
		createjs.Tween.get(this.pointer, {
			loop: false
		}).wait(0).to({
			alpha: .5,
			scaleX: .5,
			scaleY: .5
		},
		150, createjs.Ease.cubicOut).wait(0).to({
			x: n.x + 22,
			y: n.y - 5
		},
		0).to({
			alpha: 1,
			scaleX: 1,
			scaleY: 1
		},
		250, createjs.Ease.cubicIn).call(function() {
			return t.stopPointerMove()
		});
		var r = n.y - (275 + 50);
		var i = n.y + 50;
		if (this.scrollSprite.y + r < 0) this.scroll( - r + 100, 300, 0);
		else if (this.scrollSprite.y + i > App.SCREEN_H + App.SHIFT_H) this.scroll(App.SCREEN_H + App.SHIFT_H - i - 100, 300, 0);
		SoundsManager.instance.playSound("pointer_sound")
	};
	t.prototype.scroll = function(e, t, n) {
		if (typeof n === "undefined") {
			n = 0
		}
		var r = this;
		if (this.isMoving) return;
		this.isMoving = true;
		createjs.Tween.removeTweens(this.scrollSprite);
		this.speed = 0;
		createjs.Tween.get(this.scrollSprite, {
			loop: false
		}).wait(n).to({
			x: 0,
			y: this.limitY(e)
		},
		t, createjs.Ease.quadInOut).call(function() {
			return r.stopMove()
		});
	};
	t.prototype.onPressMove = function(e) {
		if (this.isLevelUnlocking) return;
		if (this.isMoving) return;
		this.lastMovePoint.x = e.stageX;
		this.lastMovePoint.y = e.stageY;
		var t = this.scrollSprite.localToGlobal(this.downPos.x, this.downPos.y);
		this.isScrolling = true;
		var n = this.scrollSprite.y;
		this.scrollSprite.y = this.limitY(this.scrollSprite.y + e.stageY - t.y);
		this.lastSpeed = this.scrollSprite.y - n;
		e.nativeEvent && e.preventDefault && e.preventDefault()
	};
	t.prototype.limitY = function(e) {
		var t = this.rect;
		var n = (App.ACTUAL_H - App.FULL_SCREEN_H) / 2;
		var r = -n;
		var i = -n + App.ACTUAL_H + (App.episode == 2 ? 200 : 0);
		if (e + t.height < i) e = i - t.height;
		else if (e > r) e = r;
		return e
	};
	t.prototype.onPointerDown = function() {
		return;
		if (!this.pointerIsMoving) {
			var e = this.pointer.localToGlobal(this.pointer.getBounds().width / 2, 88);
			LevelManager.instance.prepareToLoadLevel(this.currentLevel);
			this.isPlayPressed = true;
			return
		}
	};
	t.prototype.stopPointerMove = function() {
		this.pointerIsMoving = false;
		this.isLevelUnlocking = false;
		this.levelToUnlock = -1
	};
	t.prototype.stopMove = function() {
		this.isMoving = false
	};
	t.BUTTON_RADIUS = 30;
	return t
} (Menu);
var MainMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.heroPositions = [[129, 983, 0], [665, 698, -44], [659, 239, -119], [165, -16, -180], [ - 17, 389, 118], [ - 17, 735, 69]];
		this.prevHeroId = -1;
		this.playHeroIn = 0;
		this.crossButtons = [];
		this.playCrossIn = 0;
		var n = new createjs.Container;
		this.sprite = n;
		this.back = new createjs.Bitmap(App.game.preloader.loader.getResult("main menu"));
		n.addChild(this.back);
		this.heroAnimation = new AnimatedNode(AnimationManager.instance.getAnimation("MenuAnim"), 1 / 24, null, 2);
		n.addChild(this.heroAnimation);
		this.heroAnimation.addAction(this.heroAnimation.totalFrames - 1, 1, 83);
		this.animatedButtons.push(null);
		this.button = new AnimatedNode(App.game.animationManager.getAnimation("button"), 1 / 30, null);
		n.addChild(this.button);
		this.button.addAction(97, 0, 0);
		this.button.addAction(106, 0, -1);
		this.button.addAction(this.button.totalFrames - 1, 1, 0);
		this.button.scaleX = this.button.scaleY = .8;
		var r = new ClickableObject(this.button);
		r.setCircle(120, 120, 120);
		r.callback = function() {
			t.onPlayDown()
		};
		this.clickables.push(r);
		var i = new SoundButton(true, n, 570, 115 - 50);
		this.animatedButtons.push(i);
		this.clickables.push(i);
		var i = new SoundButton(false, n, 570, 215 - 50);
		this.animatedButtons.push(i);
		this.clickables.push(i);
		var i = new ScaleButton(createSpriteFromSpritesheet("credits_button"),
		function(e) {
			t.loadCredits(e)
		},
		n, -105 + App.SCREEN_W / 2, 95);
		this.animatedButtons.push(i);
		this.clickables.push(i);
		this.brandLogo = new LogoObject(n, App.SCREEN_W / 2, 0, 1);
		this.clickables.push(this.brandLogo);
		this.moreGames = new MoreGamesButton(n, App.SCREEN_W / 2, 0, 1);
		this.clickables.push(this.moreGames);
		for (var s = 0; s < (needCross ? 1 : 0); ++s) {
			var o = createBitmap("cross_link" + (s + 1));
			if (o) {
				n.addChild(o);
				o.regX = 80;
				o.regY = 90
			}
			this.crossButtons.push(o)
		}
		if (this.crossButtons) {
			for (var s = 0; s < this.crossButtons.length; ++s) {
				var r = new ClickableObject(this.crossButtons[s]);
				r.setRect(0, 0, 160, 180);
				if (s == 0) {
					r.callback = function() {
						t.onCrossButtonDown1()
					}
				}
				this.clickables.push(r)
			}
		}
		this.onResize()
	}
	__extends(t, e);
	t.getCrossTokenById = function(e) {
		return t.crossLinks[t.episodeCross[App.episode - 1][e]]
	};
	t.prototype.onCrossButtonDown1 = function() {
		this.onCrossButtonDown(0)
	};
	t.prototype.onCrossButtonDown = function(e) {
		if (this.crossButtons && !MenuManager.instance.credits.isMenuActive) {
			var n = this.crossButtons[e];
			createjs.Tween.get(n, {
				loop: false
			}).wait(0).to({
				scaleX: 1.15,
				scaleY: 1.15
			},
			150, createjs.Ease.quadOut).to({
				scaleX: 1,
				scaleY: 1
			},
			150, createjs.Ease.quadIn);
			var r = t.getCrossTokenById(e);
			try {
				apiInstance.Branding.getLink(r).action()
			} catch(i) {
				console.log("error click", i)
			}
		}
	};
	t.prototype.onUp = function(t, n) {
		if (MenuManager.instance.credits.isMenuActive) return;
		e.prototype.onUp.call(this, t, n)
	};
	t.prototype.loadCredits = function(e) {
		MenuManager.instance.credits.show()
	};
	t.prototype.getCharY = function(e) {
		if (e < 650) e = e + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
		else e = e - 978 + App.ACTUAL_H + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
		return e
	};
	t.prototype.getHeroPosData = function(e) {
		var t = this.prevHeroId;
		if (e) t = 0;
		else {
			while (t == this.prevHeroId) t = getInt(this.heroPositions.length)
		}
		this.prevHeroId = t;
		var n = this.heroPositions[t];
		return n
	};
	t.prototype.getBlinkDelay = function(e) {
		if (typeof e === "undefined") {
			e = false
		}
		return lerp(e ? 0 : 6, 16, Math.random())
	};
	t.prototype.onPlayDown = function() {
		try {
			this.button.gotoAndPlay(99);
			MenuManager.instance.show(MenuManager.instance.map)
		} catch(e) {
			alert("play down " + e)
		}
	};
	t.prototype.onResize = function() {
		e.prototype.onResize.call(this);
		this.button.x = 440;
		this.button.y = App.ACTUAL_H - 220 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
		for (var t = 1; t <= 3; ++t) {
			if (!this.animatedButtons[t]) continue;
			this.clickables[t].sprite.x = t == 3 ? 35 : 610 + (t - 2) * 65;
			this.clickables[t].sprite.y = 40 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
			this.animatedButtons[t].baseScale = t == 3 ? .75 : .9;
			this.clickables[t].updateRectScale()
		}
		if (this.brandLogo.sprite) this.brandLogo.sprite.y = App.ACTUAL_H - 30 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
		if (this.moreGames.sprite) {
			this.moreGames.sprite.x = this.button.x + 115 - 470 + 6;
			this.moreGames.sprite.y = this.button.y + 170 - 11
		}
		if (this.crossButtons) {
			for (var t = 0; t < this.crossButtons.length; ++t) {
				this.crossButtons[t].x = 500;
				this.crossButtons[t].y = 500
			}
		}
	};
	t.prototype.show = function() {
		e.prototype.show.call(this);
		this.heroAnimation.gotoAndStop(0);
		this.playHeroIn = .6;
		this.button.gotoAndPlay(0);
		this.setPlayButtonTime(true);
		this.playCrossIn = 1
	};
	t.prototype.setCrossTime = function() {
		this.playCrossIn = lerp(3, 9, Math.random());
		var e = this.crossButtons[getInt(this.crossButtons.length)];
		var t = e.y;
		var n = 6;
		createjs.Tween.get(e, {
			loop: false
		}).to({
			y: t + n
		},
		100).to({
			y: t
		},
		100).to({
			y: t + n
		},
		100).to({
			y: t
		},
		100).to({
			y: t + n
		},
		100).to({
			y: t
		},
		100)
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this)
	};
	t.prototype.setPlayButtonTime = function(e) {
		if (typeof e === "undefined") {
			e = false
		}
		if (this.button.currentFrame != 106) this.button.gotoAndPlay(e ? 130 : 0);
		this.playButtonIn = lerp(5, 12, Math.random())
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.button.update(t);
		this.heroAnimation.update(t);
		if (this.playHeroIn > 0) {
			this.playHeroIn -= t;
			if (this.playHeroIn <= 0) this.heroAnimation.play()
		}
		this.playButtonIn -= t;
		if (this.playButtonIn <= 0 && !this.button.isPlaying) this.setPlayButtonTime();
		this.playCrossIn -= t;
		if (this.playCrossIn < 0 && needCross && this.crossButtons.length > 0) this.setCrossTime()
	};
	t.episodeCross = [[1], [0]];
	t.crossLinks = ["cross_promo_TTC_episode_1", "cross_promo_TTC_episode_2"];
	return t
} (Menu);
var TransitionMenu = function(e) {
	function t() {
		e.call(this);
		this.isActive = false;
		this.moveProgress = -1;
		this.levelToLoad = -1;
		this.hasDoneAction = false;
		this.firstUpdate = false;
		this.parts = [];
		for (var t = 0; t < 2; ++t) {
			var n = createBitmap("transition");
			n.regX = n.getBounds().width;
			n.regY = 0;
			n.y = 0;
			n.scaleX = t == 0 ? 1 : -1;
			this.parts.push(n)
		}
	}
	__extends(t, e);
	t.prototype.onResize = function() {};
	t.prototype.play = function(e, t) {
		if (typeof e === "undefined") {
			e = null
		}
		if (typeof t === "undefined") {
			t = -1
		}
		this.hasDoneAction = false;
		this.menuToShow = e;
		this.levelToLoad = t;
		this.isActive = true;
		this.stage.addChild(this.parts[0]);
		this.stage.addChild(this.parts[1]);
		this.moveProgress = 0;
		createjs.Tween.removeTweens(this);
		createjs.Tween.get(this, {
			loop: false
		}).wait(0).to({
			moveProgress: .5
		},
		400, createjs.Ease.cubicIn).wait(250).to({
			moveProgress: 1
		},
		400, createjs.Ease.cubicIn);
		this.parts[0].x = 0;
		this.parts[1].x = App.SCREEN_W;
		this.update(0);
		this.firstUpdate = true;
		SoundsManager.instance.playSound("transition_sound")
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		if (!this.isActive) return;
		if (this.firstUpdate) {
			this.firstUpdate = false;
			t = 1 / 60
		}
		var n = this.moveProgress >= 1;
		if (this.moveProgress >= .5 && (this.menuToShow || this.levelToLoad >= 0) && !this.hasDoneAction) {
			this.doAction()
		}
		var r = this.moveProgress <= .5 ? this.moveProgress / .5 : (1 - this.moveProgress) / .5;
		this.parts[0].x = lerp(0, App.SCREEN_W / 2, r);
		this.parts[1].x = lerp(App.SCREEN_W, App.SCREEN_W / 2, r);
		var i = this.stage.getNumChildren() - 1;
		this.stage.setChildIndex(this.parts[0], i);
		this.stage.setChildIndex(this.parts[1], i);
		if (n) this.stopMove()
	};
	t.prototype.doAction = function() {
		if (!this.hasDoneAction) {
			this.hasDoneAction = true;
			if (App.game.preloader.isActive()) App.game.preloader.disable();
			if (this.menuToShow) {
				if ((this.menuToShow == MenuManager.instance.map || this.menuToShow == MenuManager.instance.mainMenu) && Match3Level.instance.isActive) Match3Level.instance.reset();
				MenuManager.instance.show(this.menuToShow, false)
			} else {
				MenuManager.instance.closeCurrent();
				LevelManager.instance.loadLevel(this.levelToLoad)
			}
			this.levelToLoad = -1;
			this.menuToShow = null
		}
	};
	t.prototype.stopMove = function() {
		if (!this.hasDoneAction) this.doAction();
		createjs.Tween.removeTweens(this);
		removeClip(this.parts[0]);
		removeClip(this.parts[1]);
		this.isActive = false
	};
	return t
} (Menu);
var WinMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.stars = [];
		this.starAmount = 3;
		this.starsShowedAmount = 0;
		this.starShowLeft = 0;
		this.backSprite = new createjs.Container;
		this.shines = [];
		this.playHeroIn = 0;
		var n = new createjs.Container;
		this.sprite = n;
		n.y = 300;
		var r = createSpriteFromSpritesheet("window_back2", 1);
		var i = r.getBounds();
		r.scaleX = (100 + App.SCREEN_W) / i.width;
		r.scaleY = (80 + App.FULL_SCREEN_H) / i.height;
		r.y = -n.y - 40;
		r.x = -50;
		this.grayBack = r;
		n.addChild(r);
		n.addChild(this.backSprite);
		r = createSpriteFromSpritesheet("menu_back");
		r.x = r.y = 0;
		r.x = App.SCREEN_W / 2;
		this.backSprite.addChild(r);
		r.regX = r.getBounds().width / 2;
		this.heroAnimation = new AnimatedNode(AnimationManager.instance.getAnimation("MenuAnim"), 1 / 24, null, 2);
		n.addChildAt(this.heroAnimation, 1);
		this.heroAnimation.getPartByFlashName("Layer 4").removeAllChildren();
		r = createSpriteFromSpritesheet("well");
		r.scaleX = r.scaleY = 2;
		r.x = -30;
		setReg(r, .5, .5);
		this.heroAnimation.getPartByFlashName("Layer 4").addChild(r);
		this.heroAnimation.scaleX = this.heroAnimation.scaleY = .5;
		this.heroAnimation.addAction(this.heroAnimation.totalFrames - 1, 1, 83);
		var s = createSpriteFromSpritesheet("victory_text");
		s.regX = s.getBounds().width / 2;
		s.regY = s.getBounds().height / 2;
		s.x = App.SCREEN_W / 2;
		s.y = 50;
		this.backSprite.addChild(s);
		r = createSpriteFromSpritesheet("victory_score");
		r.regX = r.getBounds().width / 2;
		r.x = App.SCREEN_W / 2;
		r.y = 150;
		this.backSprite.addChild(r);
		for (var o = 0; o < 3; ++o) {
			r = createSpriteFromSpritesheet("star glow");
			r.x = -60 + o * 60 + App.SCREEN_W / 2;
			r.y = 125;
			r.scaleX = r.scaleY = 1;
			var i = r.getBounds();
			r.regX = i.width / 2;
			r.regY = i.height / 2;
			this.backSprite.addChild(r);
			this.shines.push(r)
		}
		for (var o = 0; o < 3; ++o) {
			r = createSpriteFromSpritesheet("star1");
			r.x = -60 + o * 60 + App.SCREEN_W / 2;
			r.y = 125;
			r.regX = r.getBounds().width / 2;
			r.regY = r.getBounds().height / 2;
			this.backSprite.addChild(r);
			r = createSpriteFromSpritesheet("star2");
			r.x = -60 + o * 60 + App.SCREEN_W / 2;
			r.y = 125;
			r.regX = r.getBounds().width / 2;
			r.regY = r.getBounds().height / 2;
			this.backSprite.addChild(r);
			this.stars.push(r)
		}
		var u = new ScaleButton(createSpriteFromSpritesheet("home_button"),
		function(e) {
			t.homeAndUnlock(e)
		},
		this.backSprite, 320 - 107, 255);
		this.animatedButtons.push(u);
		this.clickables.push(u);
		var u = new ScaleButton(createSpriteFromSpritesheet("restart_button"),
		function(e) {
			t.restarAndUnlock(e)
		},
		this.backSprite, 320, 255);
		this.animatedButtons.push(u);
		this.clickables.push(u);
		var u = new ScaleButton(createSpriteFromSpritesheet("play_button"),
		function(e) {
			t.onPlayDown()
		},
		this.backSprite, 320 + 107, 255);
		this.animatedButtons.push(u);
		this.clickables.push(u);
		this.clickables.push(new LogoObject(n, 495, 480, 1));
		this.onResize()
	}
	__extends(t, e);
	t.prototype.onResize = function() {
		e.prototype.onResize.call(this);
		var t = lerp(.5, .65, (App.ACTUAL_H - App.SCREEN_H) / (App.FULL_SCREEN_H - App.SCREEN_H));
		this.heroAnimation.y = App.ACTUAL_H - 200 - App.FULL_SCREEN_H * t + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2;
		this.heroAnimation.scaleX = this.heroAnimation.scaleY = t
	};
	t.prototype.loadMain = function(e) {
		MenuManager.instance.show(MenuManager.instance.mainMenu)
	};
	t.prototype.restarAndUnlock = function(e) {
		LevelManager.instance.restartLoadNextLevel();
		this.restartLevel(e)
	};
	t.prototype.homeAndUnlock = function(e) {
		LevelManager.instance.restartLoadNextLevel();
		this.loadMain(e)
	};
	t.prototype.onPlayDown = function() {
		try {
			if (!MenuManager.instance) new MenuManager;
			LevelManager.instance.loadNextLevel();
			SoundsManager.instance.playSound("pause")
		} catch(e) {
			alert("play down2 " + e)
		}
	};
	t.prototype.setStarData = function(e) {
		this.starAmount = e
	};
	t.prototype.getHeroPosData = function(e) {
		return [100, 300, 0]
	};
	t.prototype.show = function() {
		var t = this;
		this.onResize();
		e.prototype.show.call(this);
		this.starsShowedAmount = 0;
		this.starShowLeft = this.starAmount;
		this.grayBack.alpha = 0;
		createjs.Tween.get(this.grayBack, {
			loop: false
		}).wait(0).to({
			alpha: 1
		},
		300, createjs.Ease.none);
		for (var n = 0; n < this.stars.length; ++n) {
			var r = this.stars[n];
			r.visible = false;
			createjs.Tween.removeTweens(r);
			this.shines[n].visible = false;
			createjs.Tween.removeTweens(this.shines[n])
		}
		for (var n = 0; n < this.starAmount; ++n) {
			r = this.stars[n];
			r.visible = true;
			r.alpha = 0;
			r.scaleX = r.scaleY = 3;
			var i = 1e3 + n * 600;
			createjs.Tween.get(r, {
				loop: false
			}).wait(i).to({
				alpha: 1,
				scaleX: 1,
				scaleY: 1
			},
			250, createjs.Ease.none).call(function() {
				return t.stopStarMove()
			});
			if (r.visible) {
				SoundsManager.instance.playSound("star" + (n + 1), i)
			}
		}
		removeClip(this.scoreText);
		var s = new createjs.BitmapText("p: " + Math.floor(this.level.score), App.game.atlases[1]);
		s.letterSpacing = -5;
		s.regX = s.getBounds().width / 2;
		s.x = App.SCREEN_W / 2;
		s.y = 156;
		this.backSprite.addChild(s);
		this.scoreText = s;
		this.backSprite.y = -App.SCREEN_W * .5;
		createjs.Tween.get(this.backSprite, {
			loop: false
		}).wait(0).to({
			y: -120
		},
		1e3 * 1.3, createjs.Ease.elasticOut);
		SoundsManager.instance.pauseMusic();
		SoundsManager.instance.playSound("win");
		this.heroAnimation.gotoAndStop(0);
		this.playHeroIn = .6
	};
	t.prototype.stopStarMove = function() {
		var e = this.shines[this.starsShowedAmount];
		e.visible = true;
		e.rotation = 0;
		e.alpha = 1;
		createjs.Tween.get(e, {
			loop: false
		}).wait(0).to({
			alpha: 0,
			rotation: 90
		},
		600, createjs.Ease.none);
		this.starsShowedAmount++;
		this.starShowLeft--;
		if (this.starShowLeft <= 0) App.game.showAds()
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this);
		SoundsManager.instance.resumeMusic()
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.heroAnimation.update(t);
		if (this.playHeroIn > 0) {
			this.playHeroIn -= t;
			if (this.playHeroIn <= 0) this.heroAnimation.play()
		}
	};
	return t
} (Menu);
var PauseLikeMenu = function(e) {
	function t(t, n) {
		if (typeof t === "undefined") {
			t = "menu_back"
		}
		if (typeof n === "undefined") {
			n = 0
		}
		e.call(this);
		this.showDelay = 0;
		this.targetPos = 420;
		var r = new createjs.Container;
		this.sprite = r;
		r.y = 0;
		var i = new createjs.Container;
		var s = createSpriteFromSpritesheet("window_back", 1);
		var o = s.getBounds();
		s.scaleX = (100 + App.SCREEN_W) / o.width;
		s.scaleY = (80 + App.FULL_SCREEN_H) / o.height;
		s.y = -r.y - 40;
		s.x = -50;
		this.grayBack = s;
		r.addChild(s);
		var u = createSpriteFromSpritesheet(t);
		u.regX = u.getBounds().width / 2;
		u.x = App.SCREEN_W / 2;
		u.regY = u.getBounds().height / 2;
		i.addChild(u);
		this.backSprite = u;
		r.addChild(i);
		this.baseSprite = i;
		this.brandLogo = new LogoObject(r, App.SCREEN_W - 90, App.CURRENT_SHIFT + App.SCREEN_H - 30 + n, 1);
		if (this.brandLogo.sprite) {
			this.brandLogo.sprite.y = App.ACTUAL_H - 40 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2 + n;
			this.clickables.push(this.brandLogo)
		}
		this.moreGames = new MoreGamesButton(r, 90, App.CURRENT_SHIFT + App.SCREEN_H - 30 + n, 1);
		if (this.moreGames.sprite) {
			this.moreGames.sprite.y = App.ACTUAL_H - 60 + (App.FULL_SCREEN_H - App.ACTUAL_H) / 2 + n;
			this.clickables.push(this.moreGames)
		}
	}
	__extends(t, e);
	t.prototype.show = function() {
		e.prototype.show.call(this);
		createjs.Tween.removeTweens(this.baseSprite);
		createjs.Tween.removeTweens(this.grayBack);
		this.grayBack.alpha = 0;
		this.baseSprite.y = -250;
		createjs.Tween.get(this.grayBack, {
			loop: false
		}).wait(this.showDelay).to({
			alpha: 1
		},
		200 * 1.3, createjs.Ease.cubicInOut);
		createjs.Tween.get(this.baseSprite, {
			loop: false
		}).wait(this.showDelay).to({
			y: this.targetPos
		},
		1e3 * 1.3, createjs.Ease.elasticOut);
		SoundsManager.instance.playSound("gui_move")
	};
	t.prototype.hide = function() {
		var t = this;
		if (this.needToHideInstantly()) {
			e.prototype.hide.call(this);
			return
		}
		createjs.Tween.removeTweens(this.baseSprite);
		createjs.Tween.removeTweens(this.grayBack);
		this.grayBack.alpha = 1;
		createjs.Tween.get(this.grayBack, {
			loop: false
		}).wait(0).to({
			alpha: 0
		},
		750, createjs.Ease.cubicInOut);
		createjs.Tween.get(this.baseSprite, {
			loop: false
		}).wait(0).to({
			y: -550
		},
		750, createjs.Ease.elasticInOut).call(function() {
			return e.prototype.hide.call(t)
		})
	};
	t.prototype.needToHideInstantly = function() {
		return MenuManager.instance.transition.menuToShow == null && MenuManager.instance.transition.isActive
	};
	return t
} (Menu);
var TargetMenu = function(e) {
	function t() {
		e.call(this, "tutorial");
		this.targetTexts = [];
		this.targetSprites = [];
		this.backSprite.regX = this.backSprite.regY = 0;
		this.backSprite.x -= 258;
		this.backSprite.y -= 98;
		this.showDelay = 150;
		var t = this.sprite;
		var n;
		var r = new createjs.BitmapText("t...", App.game.atlases[1]);
		r.letterSpacing = -5;
		r.scaleX = r.scaleY = .9;
		r.regX = r.getBounds().width / 2;
		r.x = App.SCREEN_W / 2;
		r.y = App.FULL_SCREEN_H - 185 - t.y;
		t.addChild(r);
		this.continueText = r;
		for (var i = 2; i >= 0; --i) {
			n = createSpriteFromSpritesheet("dirt", 0);
			n.y = 300 + i * 30 - 210 - 130;
			n.rotation = i * -30;
			this.baseSprite.addChild(n);
			this.targetSprites.push(n)
		}
		for (var i = 0; i < 2; ++i) {
			var r = new createjs.BitmapText(" ", App.game.atlases[1]);
			r.letterSpacing = -6;
			r.spaceWidth = 15;
			r.scaleX = r.scaleY = 1;
			this.baseSprite.addChild(r);
			this.targetTexts.push(r)
		}
		this.heroAnim = new AnimatedNode(AnimationManager.instance.getAnimation("TutorialWizard_Animation"), 1 / 24, null, 0);
		this.heroAnim.x = this.backSprite.x + 171 + 258;
		this.heroAnim.y = this.backSprite.y + 0 + 98;
		this.baseSprite.addChild(this.heroAnim);
		this.heroAnim.play()
	}
	__extends(t, e);
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.heroAnim.update(t)
	};
	t.prototype.show = function() {
		e.prototype.show.call(this);
		var t = Match3Level.instance.target.getText();
		var n = -1;
		var r = t[3];
		for (var i = 0; i < this.targetTexts.length; ++i) {
			var s = this.targetTexts[i];
			s.text = t[i];
			s.x = App.SCREEN_W / 2 - s.getTransformedBounds().width / 2 - 70 - 70 + (t.length >= 5 ? t[4] : 0);
			s.y = -80 + 85 + i * 33 - 50;
			var o = s.getTransformedBounds();
			n = App.SCREEN_W - 150
		}
		for (var i = 0; i < 3; ++i) {
			var u = this.targetSprites[i];
			var a = t[2];
			u.spriteSheet = App.game.atlases[Match3Level.instance.target instanceof ColorTarget ? 1 : 0];
			u.gotoAndStop(a);
			u.scaleX = u.scaleY = r;
			u.x = n + 15 - (i == 2 ? 0 : i == 1 ? 25 : 19) + 45 + 10 - 220 + (t.length >= 6 ? t[5] : 0);
			u.regX = u.getBounds().width / 2;
			u.regY = u.getBounds().height / 2
		}
		this.continueText.visible = true
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this);
		this.continueText.visible = false
	};
	t.prototype.onUp = function(t, n) {
		e.prototype.onUp.call(this, t, n);
		if (this == MenuManager.instance.current && this.lastClickCount == 0) {
			MenuManager.instance.closeCurrent();
			if (Match3Level.instance.isPaused) Match3Level.instance.unpause()
		}
	};
	return t
} (PauseLikeMenu);
var PauseMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		var n = this.sprite;
		var r;
		var i = createSpriteFromSpritesheet("pause_text");
		i.regX = i.getBounds().width / 2;
		i.regY = i.getBounds().height / 2;
		i.x = App.SCREEN_W / 2;
		i.y = -110;
		this.baseSprite.addChild(i);
		var s = new ScaleButton(createSpriteFromSpritesheet("home_button"),
		function(e) {
			t.loadMainMenu(e)
		},
		this.baseSprite, -105 + App.SCREEN_W / 2, 95);
		this.animatedButtons.push(s);
		this.clickables.push(s);
		var s = new ScaleButton(createSpriteFromSpritesheet("restart_button"),
		function(e) {
			t.restartLevel(e)
		},
		this.baseSprite, 0 + App.SCREEN_W / 2, 95);
		this.animatedButtons.push(s);
		this.clickables.push(s);
		var s = new ScaleButton(createSpriteFromSpritesheet("play_button"),
		function(e) {
			t.onPlayDown()
		},
		this.baseSprite, 109 + App.SCREEN_W / 2, 95);
		this.animatedButtons.push(s);
		this.clickables.push(s);
		var s = new SoundButton(true, this.baseSprite, -37 + App.SCREEN_W / 2, -4);
		this.animatedButtons.push(s);
		this.clickables.push(s);
		var s = new SoundButton(false, this.baseSprite, 37 + App.SCREEN_W / 2, -4);
		this.animatedButtons.push(s);
		this.clickables.push(s)
	}
	__extends(t, e);
	t.prototype.show = function() {
		e.prototype.show.call(this)
	};
	t.prototype.onPlayDown = function() {
		try {
			Match3Level.instance.unpause();
			SoundsManager.instance.playSound("pause")
		} catch(e) {
			alert("play downXX " + e)
		}
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t)
	};
	return t
} (PauseLikeMenu);
var LoseMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.showDelay = 0;
		var n = createSpriteFromSpritesheet("lose_text");
		var r = n.getBounds();
		n.regX = r.width / 2;
		n.regY = r.height / 2;
		n.x = App.SCREEN_W / 2;
		n.y = -110;
		this.baseSprite.addChild(n);
		var i = new ScaleButton(createSpriteFromSpritesheet("home_button"),
		function(e) {
			t.loadMainMenu(e)
		},
		this.baseSprite, App.SCREEN_W / 2 - 85, 70);
		this.animatedButtons.push(i);
		this.clickables.push(i);
		var i = new ScaleButton(createSpriteFromSpritesheet("restart_button"),
		function(e) {
			t.restartLevel(e)
		},
		this.baseSprite, App.SCREEN_W / 2 + 85, 70);
		this.animatedButtons.push(i);
		this.clickables.push(i)
	}
	__extends(t, e);
	t.prototype.show = function() {
		e.prototype.show.call(this);
		SoundsManager.instance.playSound("fail");
		SoundsManager.instance.pauseMusic()
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this);
		SoundsManager.instance.resumeMusic()
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t)
	};
	return t
} (PauseLikeMenu);
var ResultMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.dataTexts = [];
		s = new createjs.BitmapText("game complete!", App.game.atlases[1]);
		s.letterSpacing = -3;
		s.spaceWidth = 25;
		s.regX = s.getBounds().width / 2;
		s.x = App.SCREEN_W / 2;
		s.y = -45 - 120;
		this.baseSprite.addChild(s);
		this.backSprite.scaleY = 1.3;
		this.backSprite.scaleX = 1.2;
		var n = ["stars earned:", "total moves:", "total score:", "bonuses used:"];
		for (var r = 0; r < n.length; ++r) {
			for (var i = 0; i < 2; i++) {
				if (i == 1) continue;
				var s = new createjs.BitmapText(i == 0 ? n[r] : getInt(1e6).toString(), App.game.atlases[1]);
				s.letterSpacing = -5;
				s.spaceWidth = 25;
				s.regX = i == 0 ? 0 : s.getBounds().width / 2;
				s.x = i == 0 ? 120 : 520;
				s.y = -95 + 60 + r * 48 + (i == 0 ? 0 : -20);
				s.scaleX = 1;
				this.baseSprite.addChild(s)
			}
		}
		var o = createSpriteFromSpritesheet("main_play_button");
		o.scaleX = o.scaleY = .9;
		this.baseSprite.addChild(o);
		o.regX = o.getBounds().width / 2;
		o.regY = o.getBounds().height / 2;
		var u = new ScaleButton(o,
		function() {
			t.onPlayDown()
		},
		this.baseSprite, App.SCREEN_W / 2, 310 - 95);
		this.animatedButtons.push(u);
		this.clickables.push(u);
		this.targetPos -= 60
	}
	__extends(t, e);
	t.prototype.show = function() {
		e.prototype.show.call(this);
		for (var t = 0; t < this.dataTexts.length; ++t) removeClip(this.dataTexts[t]);
		this.dataTexts = [];
		var n = [LevelManager.instance.totalStars + "/" + 90, LevelManager.instance.moves.toString(), LevelManager.instance.totalScores.toString(), LevelManager.instance.bonuses.toString()];
		for (var t = 0; t < n.length; ++t) {
			for (var r = 0; r < 2; r++) {
				if (r == 0) continue;
				var i = new createjs.BitmapText(n[t], App.game.atlases[1]);
				i.letterSpacing = -5;
				i.spaceWidth = 25;
				i.regX = r == 0 ? 0 : i.getBounds().width / 2;
				i.x = r == 0 ? 30 : 440;
				i.y = -95 + 60 + t * 48 + (r == 0 ? 0 : 0);
				i.scaleX = i.scaleY = r == 0 ? .7 : 1;
				this.dataTexts.push(i);
				this.baseSprite.addChild(i)
			}
		}
		SoundsManager.instance.pauseMusic();
		SoundsManager.instance.playSound("win")
	};
	t.prototype.hide = function() {
		e.prototype.hide.call(this);
		SoundsManager.instance.resumeMusic()
	};
	t.prototype.onPlayDown = function() {
		try {
			this.loadMainMenu()
		} catch(e) {
			alert("play downXXt " + e)
		}
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t)
	};
	return t
} (PauseLikeMenu);
var CreditsMenu = function(e) {
	function t() {
		var t = this;
		e.call(this);
		this.dataTexts = [];
		var n = createSpriteFromSpritesheet("credits_text");
		n.regX = n.getBounds().width / 2;
		n.x = App.SCREEN_W / 2;
		n.y = -142 - 20;
		this.baseSprite.addChild(n);
		this.backSprite.scaleX = 1.1;
		this.backSprite.scaleY = 1.3;
		var r = ["code:", "art:", "sound:", "levels:", "thanks\nto:"];
		for (var i = 0; i < r.length; ++i) {
			for (var s = 0; s < 2; s++) {
				if (s == 1) continue;
				var o = new createjs.BitmapText(s == 0 ? r[i] : getInt(1e6).toString(), App.game.atlases[1]);
				o.letterSpacing = -5;
				o.spaceWidth = 15;
				o.regX = s == 0 ? 0 : o.getBounds().width / 2;
				o.x = 150 + (s == 0 ? -15 : 0);
				o.y = -20 + i * 25 + (s == 0 ? 0 : -20) - 10;
				o.scaleX = o.scaleY = .75;
				this.baseSprite.addChild(o)
			}
		}
		this.dataTexts = [];
		var r = ["Andriy Vinchkovskiy", "Vladimir Makarov", "alexander ahura", "Gerasimov Vladimir", "              alexey testov\n           sergey batishchev\n         konstantin boronenkov\n     all flashgamedev.ru testers!"];
		for (var i = 0; i < r.length; ++i) {
			for (var s = 0; s < 2; s++) {
				if (s == 0) continue;
				var o = new createjs.BitmapText(r[i], App.game.atlases[1]);
				o.letterSpacing = -5;
				o.spaceWidth = 15;
				o.regX = s == 0 ? 0 : o.getBounds().width / 2;
				o.x = 360 + (i == 4 ? -50 : 0);
				o.y = -20 + i * 25 + (s == 0 ? 0 : 0) + (i == 4 ? 5 : 0) - 3 - 10;
				o.scaleX = o.scaleY = i == 4 ? .7 : .85;
				this.dataTexts.push(o);
				this.baseSprite.addChild(o)
			}
		}
		var u = new ScaleButton(createSpriteFromSpritesheet("home_button"),
		function(e) {
			t.onPlayDown()
		},
		this.baseSprite, App.SCREEN_W / 2, 215);
		this.animatedButtons.push(u);
		this.clickables.push(u)
	}
	__extends(t, e);
	t.prototype.show = function() {
		e.prototype.show.call(this)
	};
	t.prototype.hide = function() {
		this.isMenuActive = false;
		e.prototype.hide.call(this)
	};
	t.prototype.onPlayDown = function() {
		try {
			this.hide()
		} catch(e) {
			alert("play downXXt " + e)
		}
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t)
	};
	return t
} (PauseLikeMenu);
var SplashScreen = function(e) {
	function t() {
		e.call(this);
		var t = new createjs.Container;
		var n = createSpriteFromSpritesheet("white");
		n.scaleX = (100 + App.SCREEN_W) / 50;
		n.scaleY = (100 + App.FULL_SCREEN_H) / 50;
		n.x = n.y = -50;
		n.regX = 0;
		n.regY = 0;
		t.addChild(n);
		this.sprite = t;
		var r = createBitmap("zibbo_logo");
		r.regX = r.getBounds().width / 2;
		r.regY = r.getBounds().height / 2;
		t.addChild(r);
		r.x = App.SCREEN_W / 2;
		r.y = App.FULL_SCREEN_H / 2 - 60;
		this.logo = r
	}
	__extends(t, e);
	t.prototype.show = function() {
		var t = this;
		e.prototype.show.call(this);
		createjs.Tween.removeTweens(this.logo);
		this.logo.scaleX = this.logo.scaleY = .85;
		createjs.Tween.get(this.logo, {
			loop: false
		}).wait(100).to({
			scaleX: 1,
			scaleY: 1
		},
		300, createjs.Ease.circOut).wait(0).to({
			scaleX: this.logo.scaleX,
			scaleY: this.logo.scaleY
		},
		400, createjs.Ease.quadIn).wait(1200).call(function() {
			return t.onAnimEnd()
		})
	};
	t.prototype.onAnimEnd = function() {
		MenuManager.instance.show(MenuManager.instance.mainMenu, true)
	};
	t.prototype.onDown = function(t, n) {
		e.prototype.onDown.call(this, t, n);
		console.log("splash down");
		splashScreenData.action()
	};
	return t
} (Menu);
var LevelTarget = function() {
	function e() {
		this.scores = [500, 1500, 3e3];
		this.isScoreTarget = false
	}
	Object.defineProperty(e.prototype, "progress", {
		get: function() {
			return 0
		},
		enumerable: true,
		configurable: true
	});
	Object.defineProperty(e.prototype, "isCompleted", {
		get: function() {
			return this.progress >= 1 - 1e-10
		},
		enumerable: true,
		configurable: true
	});
	e.prototype.getExactType = function(e, t) {
		return - 1
	};
	e.prototype.getText = function() {
		return []
	};
	e.prototype.onLevelGenerated = function() {};
	e.prototype.onMarkRemoved = function() {};
	e.prototype.onBlockRemoved = function() {};
	e.prototype.onObjectRemove = function(e) {};
	e.prototype.getTargetText = function() {
		return ""
	};
	e.prototype.getHudIconData = function() {
		return null
	};
	return e
} ();
var PushDownTarget = function(e) {
	function t(t) {
		e.call(this);
		this.targetsToPush = 0;
		this.targetsPushed = 0;
		this.pushCakeIn = 0;
		this.pushLeft = 0;
		this.pushQueue = 0;
		this.targetsToPush = t;
		this.setPushTime()
	}
	__extends(t, e);
	t.prototype.setPushTime = function() {
		this.pushCakeIn = Match3Level.instance.currentMove;
		if (this.needToPush) {
			return
		}
		this.pushLeft = Math.random() < .02 && this.pushQueue + 2 <= this.targetsToPush ? 2 : 1;
		this.pushQueue += this.pushLeft;
		if (this.pushQueue > this.targetsToPush) this.pushLeft = -1
	};
	Object.defineProperty(t.prototype, "needToPush", {
		get: function() {
			return this.pushLeft > 0
		},
		enumerable: true,
		configurable: true
	});
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return this.targetsPushed / this.targetsToPush
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.onTargetPush = function() {++this.targetsPushed;
		if (!this.isCompleted) this.setPushTime()
	};
	t.prototype.getTargetText = function() {
		return limit(this.targetsPushed, 0, this.targetsToPush) + "/" + this.targetsToPush
	};
	t.prototype.getExactType = function(e, t) {
		if (t == 0 && !this.isCompleted && this.needToPush && Match3Level.instance.currentMove >= this.pushCakeIn && Match3Level.instance.levelData.pushPositions.indexOf(e) != -1) {
			this.pushLeft--;
			if (this.needToPush) this.setPushTime();
			return Match3Level.instance.assetNumber
		}
		return - 1
	};
	t.prototype.getText = function() {
		return ["m " + this.targetsToPush + " n", "o!", "chest", .7, 15, 35]
	};
	t.prototype.getHudIconData = function() {
		return ["chest_icon", 1, 1, 0, 0, 0]
	};
	return t
} (LevelTarget);
var ClearMarkTarget = function(e) {
	function t() {
		e.call(this);
		this.marksToRemove = 1;
		this.marksRemoved = 0
	}
	__extends(t, e);
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return this.marksRemoved / this.marksToRemove
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.getTargetText = function() {
		return limit(this.marksRemoved, 0, this.marksToRemove) + "/" + this.marksToRemove
	};
	t.prototype.onLevelGenerated = function() {
		this.marksToRemove = 0;
		for (var e = 0; e < App.level.fieldWidth; ++e) for (var t = 0; t < App.level.fieldHeight; ++t) {
			var n = App.level.cells[e][t];
			if (n.isMarked)++this.marksToRemove
		}
	};
	t.prototype.getText = function() {
		return ["c j", "l!", "dirt", .75]
	};
	t.prototype.onMarkRemoved = function() {
		this.marksRemoved++
	};
	t.prototype.getHudIconData = function() {
		return ["dirt", .47, .47, 0, 0, 0]
	};
	return t
} (LevelTarget);
var BlockClearTarget = function(e) {
	function t() {
		e.call(this);
		this.blocksToRemove = 1;
		this.blocksRemoved = 0
	}
	__extends(t, e);
	t.prototype.getTargetText = function() {
		return limit(this.blocksRemoved, 0, this.blocksToRemove) + "/" + this.blocksToRemove
	};
	t.prototype.getText = function() {
		var e = Match3Level.instance.levelData;
		return ["c j", "k!", "block1", .9]
	};
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return this.blocksRemoved / this.blocksToRemove
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.onLevelGenerated = function() {
		this.blocksToRemove = 0;
		for (var e = 0; e < App.level.fieldWidth; ++e) for (var t = 0; t < App.level.fieldHeight; ++t) {
			var n = App.level.cells[e][t];
			if (n.isBreakable)++this.blocksToRemove
		}
	};
	t.prototype.onBlockRemoved = function() {
		this.blocksRemoved++
	};
	t.prototype.getHudIconData = function() {
		return ["crystal_icon", 1, 1, 0, 0, 0]
	};
	return t
} (LevelTarget);
var ColorTarget = function(e) {
	function t(t, n) {
		e.call(this);
		this.colorsToRemove = 0;
		this.colorsRemoved = 0;
		this.colorType = 0;
		this.colorsToRemove = t;
		this.colorType = n
	}
	__extends(t, e);
	t.prototype.getTargetText = function() {
		return limit(this.colorsRemoved, 0, this.colorsToRemove) + "/" + this.colorsToRemove
	};
	t.prototype.getText = function() {
            var moterColor="e";
                if(FieldObject.assetNames[this.colorType]=="red"){
                  moterColor="f"; 
                }else if(FieldObject.assetNames[this.colorType]=="yellow"){
                   moterColor="g"; 
                }else if(FieldObject.assetNames[this.colorType]=="green"){
                   moterColor="h"; 
                }else if(FieldObject.assetNames[this.colorType]=="purple"){
                   moterColor="i"; 
                }
		return ["c " + this.colorsToRemove + " " + moterColor, "d!", FieldObject.assetNames[this.colorType], .8, 20, 35]
	};
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return this.colorsRemoved / this.colorsToRemove
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.onObjectRemove = function(e) {
		if (e.colorType == this.colorType) this.colorsRemoved++
	};
	t.prototype.getHudIconData = function() {
		return [FieldObject.assetNames[this.colorType], .5, .5, 0, 5, 1]
	};
	return t
} (LevelTarget);
var ScoreTarget = function(e) {
	function t(t) {
		e.call(this);
		this.targetScore = 0;
		this.targetScore = t;
		this.isScoreTarget = true
	}
	__extends(t, e);
	t.prototype.getTargetText = function() {
		var e = Math.floor(100 * limit(Match3Level.instance.score / this.targetScore, 0, 1));
		return e + "%"
	};
	t.prototype.getText = function() {
		return [ "a " + this.targetScore, "b!", "star2", 1.3, 15, 25 ];
	};
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return Match3Level.instance.score / this.targetScore
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.getHudIconData = function() {
		return ["star2", .8, .8, 0, 0, 0]
	};
	return t
} (LevelTarget);
var InfiniteTarget = function(e) {
	function t() {
		e.call(this)
	}
	__extends(t, e);
	t.prototype.getTargetText = function() {
		return "xxx%"
	};
	t.prototype.getText = function() {
		return ["reach xxx", "points!", "star", 1]
	};
	Object.defineProperty(t.prototype, "progress", {
		get: function() {
			return 0
		},
		enumerable: true,
		configurable: true
	});
	return t
} (LevelTarget);
var BonusIndicator = function(e) {
	function t(t, n, r, i) {
		e.call(this);
		this.isMovingToTarget = false;
		this.isHiding = false;
		this.horizontal = false;
		this.currentFrame = 0;
		this.target = r;
		this.bonusType = i;
		var s = createSpriteFromSpritesheet("bonus_particle");
		s.regX = 43;
		s.regY = 41;
		s.x = n.pos.x;
		s.y = n.pos.y;
		this.sprite = s;
		addChild(this.sprite, this.level.bonusIndicatorLayer);
		r.setTempBlock(true, .05);
		SoundsManager.instance.playSound("bonus_show");
		this.moveToTarget()
	}
	__extends(t, e);
	t.prototype.moveToTarget = function() {
		var e = this;
		this.isMovingToTarget = true;
		createjs.Tween.get(this.sprite).wait(700).to({
			x: this.target.pos.x,
			y: this.target.pos.y
		},
		500, createjs.Ease.cubicIn).call(function() {
			return e.hide()
		});
		this.isHiding = true
	};
	t.prototype.hide = function() {
		var e = this;
		if (this.isDestroyed) return;
		if (this.target && this.target.object) {
			this.target.object.setBonusType(this.bonusType);
			this.target.setTempBlock(false, -1);
			SoundsManager.instance.playSound("bonus_set")
		}
		createjs.Tween.get(this.sprite).to({
			alpha: 0,
			scaleX: 0,
			scaleY: 0
		},
		300, createjs.Ease.cubicOut).call(function() {
			return e.destroy()
		})
	};
	t.prototype.updateTarget = function(e) {
		this.target = e;
		createjs.Tween.removeTweens(this.sprite);
		this.moveToTarget()
	};
	t.prototype.checkTargetObject = function() {
		if (this.isMovingToTarget && (!this.target.object || this.target.object.isMoving || this.target.isWaitingForClear)) {
			this.target = null;
			this.level.spawnBonus(this.bonusType, null, null, this)
		}
	};
	t.prototype.update = function(e) {
		this.checkTargetObject();
		if (!this.isDestroyed) {
			this.target.setTempBlock(true, .05);
			this.currentFrame += e / (1 / 24);
			var n = 4;
			while (this.currentFrame > 3) this.currentFrame -= 3;
			var r = ~~this.currentFrame;
			var i = t.frames[r];
			var s = r == n - 1 ? t.frames[0] : t.frames[r + 1];
			var o = this.currentFrame - r;
			this.sprite.scaleX = 1.3 * (1 + (i[0] + o * (s[0] - i[0]) - 1));
			this.sprite.scaleY = 1.3 * (1 + (i[1] + o * (s[1] - i[1]) - 1))
		}
	};
	t.prototype.destroy = function() {
		if (this.isDestroyed) return;
		createjs.Tween.removeTweens(this.sprite);
		this.isMovingToTarget = true;
		e.prototype.destroy.call(this)
	};
	t.frames = [[1.24, 1], [.76, 1.05], [1.35, 1.05], [.7, .95]];
	return t
} (GameObject);
var GemDestroyAnimation = function(e) {
	function t() {
		e.call(this);
		this.totalFrames = 0;
		this.playedScore = false;
		this.totalFrames = 9;
		this.fileName = "explosion";
		this.sprite = new createjs.Sprite(App.game.atlases[0], this.fileName);
		this.sprite.framerate = 20;
		this.sprite.regX = 155 / 2;
		this.sprite.regY = 166 / 2;
		this.sprite.rotation = Math.random() * 360
	}
	__extends(t, e);
	t.prototype.destroy = function() {
		if (!this.isDestroyed) {
			Match3Level.pool.returnGemDestroy(this)
		}
	};
	t.prototype.update = function(e) {
		if (this.isDestroyed) return;
		var t = this.sprite.currentAnimationFrame;
		if (!this.playedScore && t > this.totalFrames / 2) {
			this.cell.tryPlayScoreAnimation();
			this.playedScore = true
		}
		if (t > this.totalFrames) {
			Match3Level.pool.returnGemDestroy(this)
		}
	};
	t.prototype.init = function(e, t, n) {
		this.cell = n;
		this.level = Match3Level.instance;
		addChild(this.sprite, this.level.gemDestroyLayer);
		this.sprite.gotoAndPlay(this.fileName);
		this.sprite.x = e;
		this.sprite.y = t;
		this.level.objects.push(this);
		this.isDestroyed = false;
		this.playedScore = false;
		this.sprite.rotation = Math.random() * 360;
		if (Match3Level.instance) {
			var r = limit(n.clearId + 1, 1, 6);
			SoundsManager.instance.playSound("monster_pop" + r)
		}
	};
	t.prototype.release = function() {
		this.sprite.stop();
		removeClip(this.sprite);
		this.isDestroyed = true
	};
	t.animLen = [16, 13, 16, 17];
	t.animSizes = [cjp(98, 135), cjp(133, 96), cjp(110, 114), cjp(83, 118)];
	t.regPoints = [cjp(54, 74), cjp(66, 62), cjp(52, 60), cjp(42, 38)];
	return t
} (GameObject);
var BonusLineSprite = function(e) {
	function t(t, n, r) {
		e.call(this);
		this.sprites = [];
		this.speeds = [];
		this.type = t;
		var i;
		var s;
		var o = [];
		var u;
		var a = 0;
		var f = 0;
		switch (t) {
		case 1:
			i = 2;
			s = [cjp(1, 1), cjp( - 1, 1)];
			o = [cjp(1, 0), cjp( - 1, 0)];
			u = "destroy_horizontal";
			a = 95;
			f = 41;
			break;
		case 2:
			i = 2;
			s = [cjp(1, 1), cjp(1, -1)];
			o = [cjp(0, 1), cjp(0, -1)];
			u = "destroy_vertical";
			a = 42;
			f = 79;
			break
		}
		var l = Match3Level.TILE_SIZE / FieldObject.GEM_KILL_DELAY;
		for (var c = 0; c < i; ++c) {
			var h = createSpriteFromSpritesheet(u);
			h.x = n;
			h.y = r;
			this.sprites.push(h);
			addChild(h, this.level.bonusLayer);
			h.regX = a;
			h.regY = f;
			h.scaleX = s[c].x;
			h.scaleY = s[c].y;
			o[c].x *= l;
			o[c].y *= l;
			this.speeds.push(o[c])
		}
		this.level.objects.push(this)
	}
	__extends(t, e);
	t.prototype.update = function(e) {
		var t = 0;
		var n = this.sprites.length;
		for (var r = 0; r < n; ++r) {
			var i = this.sprites[r];
			if (i.visible) {
				t++;
				i.x += this.speeds[r].x * e;
				i.y += this.speeds[r].y * e;
				var s = i.getBounds();
				if (s.x + i.x > App.SCREEN_W + 100 || s.y + i.y > App.ACTUAL_H + 100 || s.x + s.width + i.x < -100 || s.y + s.height + i.y < -100) {
					i.visible = false;
					removeClip(i)
				}
			}
		}
		if (t == 0) this.destroy()
	};
	t.prototype.destroy = function() {
		if (this.isDestroyed || !this.sprites) return;
		e.prototype.destroy.call(this);
		var t = this.sprites.length;
		for (var n = 0; n < t; ++n) removeClip(this.sprites[n]);
		this.sprites = null;
		this.speeds = null
	};
	return t
} (GameObject);
var BonusBombSprite = function(e) {
	function t(t, n, r) {
		var i = this;
		e.call(this);
		this.progress = 0;
		this.maxScale = 0;
		var s = 4;
		this.maxScale = 1.75 * s * FieldObject.TILE_SIZE / 65;
		createjs.Tween.get(this).wait(100).to({
			progress: 1
		},
		1.6 * s * 1e3 * FieldObject.GEM_KILL_DELAY, createjs.Ease.cubicOut).call(function() {
			return i.destroy()
		});
		this.sprite = createSpriteFromSpritesheet("explosion bomb");
		this.sprite.x = n;
		this.sprite.y = r;
		this.sprite.regX = this.sprite.regY = 135 / 2;
		addChild(this.sprite, this.level.bonusLayer);
		this.level.objects.push(this)
	}
	__extends(t, e);
	t.prototype.update = function(e) {
		this.sprite.scaleX = this.sprite.scaleY = lerp(.1, this.maxScale, this.progress);
		this.sprite.alpha = this.progress < .6 ? lerp(.3, 1, this.progress / .6) : lerp(1, 0, (this.progress - .6) / .4)
	};
	return t
} (GameObject);
var LevelManager = function() {
	function e() {
		this.data = [];
		this.currentLevel = 0;
		this.version = .9392;
		this.isFirstLoad = true;
		this.lastOpened = 0;
		this.moves = 0;
		this.bonuses = 0;
		this.version += App.episode * 10;
		e.LEVEL_AMOUNT = App.episode == 0 ? 60 : 30;
		e.instance = this;
		var t = e.levelDatas[App.episode];
		for (var n = 0; n < e.LEVEL_AMOUNT; ++n) {
			var r = n < t.length ? "=" + t[n] : null;
			this.data.push(new LevelData(n, r, n == 0 ? LevelData.OPENED_STATE: LevelData.CLOSED_STATE))
		}
		this.load()
	}
	Object.defineProperty(e.prototype, "totalScores", {
		get: function() {
			var e = this.data.length;
			var t = 0;
			for (var n = 0; n < e; ++n) t += this.data[n].score;
			return t
		},
		enumerable: true,
		configurable: true
	});
	Object.defineProperty(e.prototype, "totalStars", {
		get: function() {
			var e = this.data.length;
			var t = 0;
			for (var n = 0; n < e; ++n) t += this.data[n].stars;
			return t
		},
		enumerable: true,
		configurable: true
	});
	e.prototype.loadLevel = function(e) {
		MenuManager.instance.closeCurrent();
		this.currentLevel = e;
		App.level.init(e)
	};
	e.prototype.loadNextLevel = function() {
		this.data[this.currentLevel].state = LevelData.COMPLETED_STATE;
		if (this.currentLevel < e.LEVEL_AMOUNT - 1) {
			this.currentLevel++;
			var t = this.data[this.currentLevel].state;
			this.data[this.currentLevel].state = Math.max(LevelData.OPENED_STATE, this.data[this.currentLevel].state);
			this.lastOpened = Math.max(this.lastOpened, this.currentLevel);
			if (t == LevelData.CLOSED_STATE) MenuManager.instance.map.levelToUnlock = this.currentLevel;
			MenuManager.instance.show(MenuManager.instance.map)
		}
		this.save()
	};
	e.prototype.restartLoadNextLevel = function() {
		this.data[this.currentLevel].state = LevelData.COMPLETED_STATE;
		if (this.currentLevel < e.LEVEL_AMOUNT - 1) {
			var t = this.data[this.currentLevel + 1].state;
			this.data[this.currentLevel + 1].state = Math.max(LevelData.OPENED_STATE, this.data[this.currentLevel + 1].state);
			this.lastOpened = Math.max(this.lastOpened, this.currentLevel + 1);
			if (t == LevelData.CLOSED_STATE) MenuManager.instance.map.fastUnlock(this.currentLevel + 1)
		}
		this.save()
	};
	e.prototype.onLevelComplete = function(e, t) {
		MenuManager.instance.winMenu.setStarData(e);
		this.data[this.currentLevel].state = LevelData.COMPLETED_STATE;
		this.data[this.currentLevel].stars = Math.max(e, this.data[this.currentLevel].stars);
		this.data[this.currentLevel].score = Math.max(t, this.data[this.currentLevel].score);
		this.save();
		var n = {
			levelNumber: (this.currentLevel + 1).toString(),
			stars: this.data[this.currentLevel].stars.toString(),
			score: this.data[this.currentLevel].score.toString(),
			time: Match3Level.instance.levelTime
		};
		safeTrackEvent("level_complete", n)
	};
	e.prototype.prepareToLoadLevel = function(e) {
		MenuManager.instance.transition.play(null, e)
	};
	e.prototype.restartLevel = function() {
		this.prepareToLoadLevel(this.currentLevel)
	};
	e.prototype.save = function() {
		if (!this.isLocalStorageAvailable) return;
		var e = {
			version: this.version,
			moves: this.moves,
			bonuses: this.bonuses
		};
		var t = [];
		for (var n = 0; n < this.data.length; ++n) {
			var r = this.data[n];
			t.push({
				c: r.state,
				s: r.stars,
				p: r.score
			})
		}
		e.levels = t;
		localStorage.setItem("save", JSON.stringify(e));
		saveUserInfo(JSON.stringify(e));
	};
	e.prototype.load = function() {
		if (!this.isLocalStorageAvailable) return;
		getUserInfoFromServer();
        //var e = localStorage.getItem("save");

		var e = userload;
		if (!e) return;
		e = JSON.parse(e);
		var t = e.levels;
		if (!t) return;
		if (this.version != e.version) {
			localStorage.clear();
			return
		}
		this.moves = Math.max(this.moves, e.moves);
		this.bonuses = Math.max(this.bonuses, e.bonuses);
		for (var n = 0; n < t.length; ++n) {
			this.data[n].state = t[n].c;
			this.data[n].stars = t[n].s;
			this.data[n].score = t[n].p;
			if (this.data[n].state >= LevelData.OPENED_STATE) this.lastOpened = Math.max(this.lastOpened, n)
		}
		this.isFirstLoad = false
	};
	Object.defineProperty(e.prototype, "isLocalStorageAvailable", {
		get: function() {
			try {
				localStorage.setItem("test", "test");
				localStorage.removeItem("test");
				return "localStorage" in window && window["localStorage"] !== null
			} catch(e) {
				return false
			}
		},
		enumerable: true,
		configurable: true
	});
	e.LEVEL_AMOUNT = App.episode == 0 ? 60 : 30;
	e.levelDatas = [["00000000000000000000000000000000000000008100000000000000810000000000000081000000000000008100000000000000000000000000000000000000-4-100000-1-1-1-1-33-11111111-11111-0.000-0", "00000000200000000000000030000000000000002000400000000000000000000000000000000000000000006000400000000000500000000000000060000000-2-4-1-1-1-1-33-00001111-11111-0.000-0", "70707000707010007070000000707070700060606060707000006050506070000000605050607000700060606060707070700000007070707070700070707010-1-1-1-1000-2000-3000-20-11111111", "00000000000000000000707070000000007070000000707000000000000000700000707070700070000000000070000000707070000000000000007070700000-4-3000-1-500-1000-1500-10-11111111", "00002000002000002000000020000020000020000000200000200000200000032000002000002000000320000020000020000003200000200000200000032000002000002000000020000020000020000000200000200000200000002000002000002000-4-1500-0-1500-1700-1900-25-1111111111", "00000000000000002020000000000000000000200000200000000020000000000020202020000000000000200404200000000000002004042000000000000020202020000000000020000000002000000000000000000000002000000000000000002020-0-1500-1-1500-2500-3500-35-1111111111", "00000000000000000000000000002010101010000000000020202020100000000000202020200000000000002020202000000000000020202020000000000000202020200000000000002020202010000000000020101010100000000000000000000000-0-1500-1-1400-2000-3200-38-1111111111", "00030220000000000000000204200000000000000004032000000000000000030220000000000000202020202020202020202020202020202020202000000000020120000000000000000403200000000000000002012000000000000000010420000000-3-35-1-1500-1800-2100-30-1111111111", "00002000200020002010000010200020002000200000200020002000201000001020002000200020000020002000200020100000102000200020002000002000200020002010000010200020002000200000200020002000201000001020002000200020-0-1500-1-2500-3000-3900-65-1111111111", "10202020202020202010001020202020202010000000002020202000000000000000202000000000000000000000000000000000000000000000000000000000202000000000000000202020200000000010202020202020100010202020202020202010-3-70-0-2000-2500-3200-40-1111111111", "00000010001000000000000000001000000000000000001000100000000000000000100000000000000000100010000000000000000010000000000000000010001000000000000000001000000000000000001000100000000000000000100000000000-2-2-1-1600-2400-3000-35-0101010101", "00000000202020000000000000000020202000000000000000002020200000000000002020200000000000002020200000000000000000202020000000000000000020202000000000000000002020200000000000000000202000000000000000202020-2-2-1-2700-3800-4900-60-1111111111", "00000000000000000000002020000000200000000020201000000020000000001020200000002000000000202010000000202000000010202000000000200000002020100000000020000000102020000000002000000020200000000000000000000000-0-2500-1-2500-3100-3700-45-1111111111", "00000000202000000000000000002020000000000000000020200000000000000000202000000000101010102020202020201010101020202020202000000000202000000000000000002020000000000000000020200000000000000000202000000000-2-2-1-2200-3200-4100-55-0110000110", "00000000000000000000000000002020000000000000001020201000000000000000202000002020000000000000001020200000000000000010202000000000202000002020000000102020100000000000000020200000000000000000000000000000-3-70-3-2000-2800-3400-48-1111111111", "00000000000000000000000000000000000000001010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000-2-2-1-3500-4500-5500-62-1100000000", "00000000000000000000000000000000000000000000201010101010101000002020505050505051000020205000000000510000202050000000005100002020505050505051000020101010101010100000000000000000000000000000000000000000-1-1-1-1800-2500-3300-30-1100000000", "20200000000020205050202000000000202050500000000000002020202000000000000020202020000000000000000000002020202020000000000020202020200000000000505050202000002020205050502020000020202050505020200000202050-1-1-1-1400-2700-3500-35-1111111111", "10511052105310541051105110521053105410512020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020201051105210531054105110511052105310541051-1-1-1-3000-3900-4700-50-1111111111", "10101010101010101010101020202020202020201020000000000000000000200020002000200020200020002000200020000020002000200020002020002000200020002000102000000000000000001010202020202020202010101010101010101010-2-3-1-3500-4500-5900-55-0001111000", "00000000000000000000000000105020001050200000001050200010502000105020001050200000001050200010502000000000001050200010502000000010502000105020001050200010502000000010502000105020000000000000000000000000-1-1-1-2300-3200-4500-55-0001111000", "00000000000000001054000000000000000010530000000000000000105100000000000000001052000000000000000010140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000-1-1-1-2700-3600-4900-50-1111111111", "00105010501050105010005050505050505050500000000000000000501000000000000000005050000000000000000050100000000000000000501000000000000000005050000000000000000050100050505050505050505000105010501050105010-1-1-1-2500-3000-3500-40", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010501010505050501010505050505050505050505050505050101050505050-1-1-1-2500-3200-3800-40-1111111111", "00202010000000000020002020102000000000200020202020200000002000202010202020002020002020202020200020200020202020202000202000202010202020002020002020202020000000200020201020000000002000202010000000000020-0-2500-1-2300-3100-3800-40-1111111111", "04042050202020502020100420202050202020501010205020202050202010001020205020202050100000102020205020201000000010502020205010000000001020502020100000000000102020501000000000000010202010101010101010101050-1-1-1-2900-3500-4300-45-1111111111", "10000010505050500000100010505050505000001010505050505050000010202010101010100000000000000000000000000000000000000000000010202010101010100000101050505050505000001000105050505050000010000010505050500000-1-1-1-2500-3400-4300-45-1111111111", "00000000000000000000000000000000000000000000000000303030303000000000002020202030000000000020202020300000000000202020203000000000002020202030000000000030303030300000000000000000000000000000000000000000-0-1-1-2200-2800-4000-48-1111111111", "00000000000000302050000000000000003020500000000000000030205000003030303030303050000000000000000000500000000000000000005000003030303030303050000000000000003020500000000000000030205000000000000000302050-1-1-1-2000-3100-4100-42-1111111111", "50505020000020205050505020200000205050505050502000002020505050502020000020505050505050200000202050505050202000002050505050505020000020205050505020200000205050505050502000002020505050502020000020505050-1-1-1-2500-3300-4200-40-0110000110", "00000000000000000000000000005555555500000000000055606030000000000000556060300000000000005555555500000000000000000000000000555555550055555555005560603000556060300055606030005560603000555555550055555555-1-1-1-2500-3300-4500-60-1111111111", "30303020000020300000000030200000203000000000302000002030000030303020202020303030202020303030302020200000203000003020000000002030000030200000202020303030302020203030302020202030303000003020000020300000-2-1-1-2600-3600-4400-58-0110011000", "00003053300000000000000030303000000000000000000000000000000000000000000000101010000000000000001051100000000000000010101000000020202000000000000000205220000000000000002020200000000000000000000000000000-1-1-1-1600-2000-2600-25-1111111111", "00000000000000000000000000000000000000000000000000000000000020302030203020302030501050501050501050505010505010505010505030203020302030203020000000000000000000000000000000000000000000000000000000000000-1-2000-1-2800-3600-4500-52-1111111111", "00000000000000000401000000303030303030040000300303030303300100300303030303300104003003033003030330010030030303030330010400300303300303033001000030030303033001040000003030303030300100000000000000000104-3-50-3-2000-2800-3600-26-1111111111", "30300201040304010230003030020402010330300000303030033030300000000000303030000000000000000000000000000000000000000000002020200000000000202020042020200020202003040302042020200103020101020301020402040301-4-2000-1-2000-2600-3400-30-1111111111", "00000000000000000000000030303000202020000000305050002050500000003030300020505000000000000000202020000000202020000000000000002050500030303000000020505000305050000000202020003030300000000000000000000000-1-1-1-2000-3000-3500-35", "00300000300000300000200030000030000030000020003000003000003000002000300000300000200000200030000030000020000020003000003000002000002000300000200000200000200030000020000020000020003000002000002000002000-0-1-1-2000-3000-3600-35-1111111111", "00000000000000000000000000000000000000300000000000000000301000000000000000301050000000000000301050500000000000303050505000000000000030105050000000000000003010500000000000000000301000000000000000000030-1-2000-1-3500-4200-5500-45-1111111111", "00000000000000000000000030303010303030000000305050005050300000003050500050503000000010000000000010000000100000000000100000003050500050503000000030505000505030000000303030103030300000000000000000000000-1-1-1-2400-3000-3800-40-1111111111", "00200000000505000000200020000005050000000020000000050500000020002000000505000000002000000005050000002000200000050500000000200000000505000000200020000005050000000020000000050500000020002000000505000000-2-3-1-2700-4100-5400-60-1111111111", "00000040000000400050000000400000004000500000004000000040005000000040000000400050000000101010101000501010101000000010101000000040000000400050000000400000004000500000004000000040005000000040000000400050-1-3-1-2800-3400-4200-55-1111111111", "00000000301055105510000000003020505050550000000030200000501000000000302000005055000000003020000050100000000030200000501000000000302000005055000000003020000050100000000030205050505500000000301055105510-1-1-1-3100-3800-5300-55-1100000000", "00000020550000000000000000205500000000000000002055000000100000000020550000101010000000205500005555550000002055000055555500000020550000101010000000205500000010000000002055000000000000000020550000000000-1-1-1-3000-3800-4500-45-1100000000", "00000000000000000000000000000000000000000005050505050505050020002010200000000000102010201020000000202010200020102000201000000000002010201020000000000000201020000005050505050505050000000000000000000000-3-50-0-1800-2500-3000-45-1111111111", "00000020050000000000000000200505000000000000000020050000000000000000200500000000000000002005050000000000000000200500000000000000002005000000000000000020050500000000000000002005000000000000000020050000-2-3-1-3000-3700-4600-45-1111111111", "00000000000000000000000000000000000000000000050500000505000000400555505055050000004000505555500000000040005055555000000000400555505055050000000005050000050500000000000000000000000000000000000000000000-1-1-1-1400-2100-2600-20-1100000000", "00002020202020205030000055555555555550300000553030303030503000005555555555555030000020202020202050300000202020202020503000005555555555555030000055303030303050300000555555555555503000002020202020205030-1-1-1-3300-4000-4800-55-1100000000", "00004000000000200040002000300000000030000000000000000000000000000030003000000030000020000000400020000000004000200000004040000000000000000000002000002000000030003000004000300020000000000000000000004000-4-3400-1-3300-3800-4200-35-1111111111", "00000060000000000030000000500000000000306050000050000000003000500000005050000030000050500000005050306050005000505050503000000050505050500030505050000050000000306000000050600000003000000060000000000030-1-3400-1-2500-3100-3800-35-1111111111", "00000000000010101010000000000000100060500000000000004000005000000000000010101010000000000000100000500000000000004000605000000000000010000050000000000000101010100000000000004000005000000000000010006050-1-3400-1-4000-4800-5600-65-1111111111", "00000000202060505050000000000020206050500000000000002020605000000000000000202060000000000000000020200000000000000000002000000000000000000030000000000000000030300000000000000030305000000000000030305050-1-3400-1-3000-3500-4000-45-1111111111", "00000000000000000010000000000000000010600000000000000010605000000000000010605050000000000000001050500000000000001060505000000000000000106050000000000000000010600000000000000000001000000000000000000010-1-3400-1-3900-4800-5900-50-1111111111", "00000000002020300040000000000020200030000000000000202030004000000000002020003000000000000020203000400000000000202000300000000000002020300040000000000020200030000000000000202030004000000000002020003000-2-3-1-3500-4500-5500-55-1111111111", "00000000000020100000000000000000203010000000000000002030501000000000000020305060000000000000203050600000000000002030506000000000000020305060000000000000203050100000000000002030100000000000000020100000-1-3400-1-4100-5600-6300-50-1111111111", "10101010101010101010005050505050505050100050606060606060501000506050505050605010005060506060506050100050605060605060501000506050505050605010005060606060606050100050505050505050501010101010101010101010-1-1-1-2500-4000-5000-40-1111111111", "00000000000000000000004040404040404040000040303030303030400000404040404040304000000000002020403040000000000020204030400000202020000040304000002020200000403040000020202000004040400000000000000000000000-3-65-2-3000-4500-5600-40-1111111111", "50501010101010105050505050503030505050500050502020202050501000502020303020205010003020303030302030100030203030303020301000502020303020205010005050202020205050105050505030305050505050501010101010105050-1-1-1-2200-3300-4000-45-1111111111", "30302020200000000000003030202020000000000000303020202000000000000030302020200000000000003020202000000000000030202020000000000030302020200000000030302020200000000030302020200000000030302020200000000000-0-1-1-2500-3800-4500-45-1111111111", "00000000000000000000030201020304101010100104032020203030303003020201020330405050010401202020304050500402032020203040505002010402030430405050040103202020303030300102020401031010101000000000000000000000-1-2000-1-2200-2700-3500-40-1111111111", "00000000000000203010000000000000203010500000000000203010505000000000203010505000000000203010505000100000203010505000101000203010505000101000203010505000101000003010505000101000000010505000101000000000-1-1-1-1500-2700-3300-50"], ["10707070021070700170700204017070027005050402707001020201050270700505020105047070017005010504707005707004050470701070707001107070-4-6000-1-6000-8000-11000-12-11111111-11011-0.000-0", "70000000000000700000000000000000000010000010000000000000000000000000000000000000000010000010000000000000000000007000000000000070-4-8000-1-8000-10000-14000-16-11111111-11111-0.000-0", "00000000000000000000007070000000000000000000000000000000000000000000000000000000000000000000000000000070700000000000000000000000-4-13000-1-10000-13000-25000-100-11111111-11110-0.000-1", "70707070707070700000707070001070700000000000007000000000000070700000000000007070700000000000007000007070700010707070707070707070-3-30-3-12000-18000-25000-25-11111111-01111-0.000-0", "10000010100000100000000000000000007070000070700000000000000000000000000000000000007070000070700000000000000000001000001010000010-3-48-2-22000-30000-40000-28-11111111-11110-0.000-0", "70707070707070700000000000001070000050505050007000005050505000700000505050500070000050505050007000000000000010707070707070707070-1-16-1-5000-8000-10000-15-11111111-11111-0.000-0", "70000000000000700050505050505000005070505070500000505070705050000050507070505000005070505070500000505050505050007000000000000070-1-28-1-7000-13000-18000-25-11111111-11111-0.000-0", "50505000005050505000505050500050505050000050505070707070707070707070707070707070505050000050505050005050505000505050500000505050-1-36-1-8000-12000-15000-90-11111111-11110-0.000-1", "00000000000000007070707000000000000000000000000070707070000000007070707000000000000000000000000070707070000000000000000000000000-2-3-1-10000-14000-18000-30-10100101-11111-0.000-0", "70700000000070707000505050500070005050507050500000507070707050000050707070705000005050705050500070005050505000707070000000007070-1-22-1-7000-13000-20000-20-11111111-11101-0.000-0", "70107070707010707000000000000070000070000070000000000070700000000000007070000000000070000070000070000000000000707010707070701070-3-40-0-10000-16000-23000-25-11111111-11011-0.000-0", "50505070705050505050100000105050505050000050505070707000007070707070700000707070505050000050505050501000001050505050507070505050-1-32-0-9000-14000-20000-30-11111111-11110-0.000-0", "70707070707070707070505070705050505050505050505050700070700070005070007070007000505050505050505070705050707050507070707070707070-1-30-0-8000-12000-27000-44-00100100-01111-0.000-0", "10000070700000100000700000700000007000000000700070000070700000707000007070000070007000000000700000007000007000001000007070000010-4-20000-0-12000-20000-30000-120-11111111-11011-0.000-1", "00707000000000700000000000202070000000001020207000707000002020700070700000202070000000001020207000000000002020700070700000000070-0-12-1-3000-5000-10000-15-11111111-11111-0.000-0", "70707070707050500070700020205050000000002020505000000000202050000000000020205000000000002020505000707000202050507070707070705050-1-14-1-10000-13000-17000-20-11111111-11111-0.000-0", "70707070707070707070700000202020707000000020202000000000002020000000000000202000707000000020202070707000002020207070707070707070-2-5-1-14000-20000-27000-40-00011000-11111-0.000-0", "00200020002000702000200020002070002000200020007020002000200020700020002000200070200020002000207000200020002000702000200020002070-0-28-1-9000-12000-17000-15-11111111-11111-0.000-0", "00000000000000000000007070000000002020202020200000207020207020000020702020702000002020202020200000000070700000000000000000000000-3-30-3-12000-18000-24000-30-11111111-11111-0.000-0", "00000000007070700000000000707070000000000070207000000000007020700000000000702070000000000070207000000000007070700000000000707070-0-4-3-10000-30000-40000-35-11111111-10111-0.000-0", "70707070000000007070707020200000707070002020000000000000202000000000000020200000707070002020000070707070202000007070707000000000-4-15000-3-10000-15000-22000-60-11111111-01111-0.000-1", "50505070707050500000507070000050000050702000005000007000200000000000700020000000000050702000005000005070700000505050507070705050-1-18-1-10000-14000-25000-25-11111111-11111-0.000-0", "00000070700000000000000000000000000000707000000070707000007070707070700000707070000000707000000000000000000000000000007070000000-3-30-1-10000-20000-30000-120-11111111-11111-0.000-1", "00202020202020200000000000000020007070707070002000000020200000000000002020000000007070707070002000000000000000200020202020202020-0-22-1-15000-20000-25000-30-11111111-11110-0.000-0", "00000000000000000070700000707000007000000000700000000070700000000000007070000000007000000000700000707000007070000000000000000000-4-35000-1-30000-40000-50000-270-11111111-11111-0.000-1", "10505050705050105050705050507050505050505050505050705070507050705070507050705070505050505050505050507050505070501050505070505010-1-44-1-16000-22000-30000-40-11111111-11111-0.000-0", "00000000707070000000000070700000000000207020000000000020202000000000002020200000000000207020000000000000707000000000000070707000-2-3-1-15000-20000-26000-150-00011000-11111-0.000-1", "00000000000000000000000000000000000070707070000000007020207002000000702020700300000070707070000000000000000000000000000000000000-0-4-1-12000-20000-25000-30-11111111-11110-0.000-0", "00100070700010000000000000000000007000101000700000000000000000000000000000000000007000101000700000000000000000000010007070001000-3-30-0-14000-18000-23000-30-11111111-11111-0.000-0", "00000000060600000000000006060000000000000606000000000000060600000000000006060000000000000606000000000000060600000000000006060000-2-10-0-25000-40000-50000-60-11111111-11111-0.000-0"], ["10707010707070100504030104030370030202020502017005030302050303700504030405040170020301040503047004010404010101701070701070707010-4-7000-1-7000-8000-12000-15-11111111-11111-0.000-0", "10000000000000100000707070700000000000707000000000000000000000000000000000000000000000707000000000007070707000001000000000000010-3-15-2-4000-7000-12000-20-11111111-11111-0.000-0", "00707070707070700000707070700000000000707000000000100000000010000010000000001000000000707000000000007070707000000070707070707070-3-30-0-8000-15000-25000-150-11111111-11111-0.000-1", "00005070705050500050505050505050007070707070705000000050505050000000005050505000007070707070705000505050505050500000507070505050-1-32-0-8000-12000-20000-30-11111111-11101-0.000-0", "70707000701070000070707070707070000000000000000000000000000000000000000000000000000000000000000000707070707070707070700070107000-2-5-0-8000-12000-18000-30-00011000-11110-0.000-0", "00000020205050500010000020205050000000000020205000100000000020000010000000002000000000000020205000100000202050500000002020505050-1-12-0-8000-12000-18000-20-11111111-11111-0.000-0", "00000000707070520000000070707051000000007053707000000000705270700000000070527070000000007053707000000000707070510000000070707052-1-8-0-10000-15000-30000-35-11111111-11110-0.000-0", "00000010701070100000000070707070000000000070701010000000000070707070000000000010107070000000000070707070000000001070107010000000-4-25000-0-15000-25000-30000-120-11111111-11111-0.000-1", "00000070707070700010000020207070000000002020207000000000202020000000000020202000000000002020207000100000202070700000007070707070-0-16-0-4000-8000-12000-20-11111111-11111-0.000", "00000006565650501010000656565050000000065656505070700006707070707070000670707070000000065656505010100006565650500000000656565050-1-24-0-7000-12000-17000-30-11111111-11111-0.000-0", "10100000000010101000007070000010000000000000000000700070700070000070007070007000000000000000000010000070700000101010000000001010-4-20000-0-12000-20000-24000-200-11111111-11111-0.000-1", "40404000202020204040400020202020404040002020202040404000202020004040400020202000404040002020202040404000202020204040400020202020-0-30-0-10000-20000-30000-30-11111111-11111-0.000-0", "00000000606060600070700060606060006060007070707000606070707070700060607070707070006060007070707000707000606060600000000060606060-1-24-0-10000-18000-25000-35-11111111-11110-0.000-0", "60606040406060606060604040606060606060404060606040404040404040404040404040404040606060404060606060606040406060606060604040606060-1-36-0-12000-20000-27000-40-11111111-11111-0.000-0", "70707070707070700000000080808000000000008080800000000000808080000000000080808000000000008080800000000000808080007070707070707070-2-5-0-9000-17000-23000-35-01111110-11111-0.000-0", "00000040400000000000004040000000707010707010707000000040400000000000004040000000707010707010707000000040400000000000004040000000-3-35-4-11000-18000-29000-34-11111111-11101-0.000-0", "60604060404060400000404040404040000040404040404000004060404060400000406040406040000040404040404000004040404040406060406040406040-1-12-4-8000-14000-20000-120-11111111-11111-0.000-1", "70007070000070700000000000000070000000000000707070007070700000007000707070000000000000000000707000000000000000707000707000007070-4-25000-4-15000-25000-30000-40-11111111-11111-0.000-0", "00007070700000000070000000700000700000700000700000700000000000700070000000000070700000700000700000700000007000000000707070000000-3-20-0-5000-9000-14000-80-11111111-11111-0.000-1", "00003030303000000000303030300000000000000000303000001000100030000000100010003000000000000000303000003030303000000000303030300000-0-22-0-12000-23000-28000-45-11111111-11111-0.000-0", "00000030303030300000003030606060000000303060606000000030707070700000003070707070000000303060606000000030306060600000003030303030-1-12-0-11000-19000-25000-50-11111111-11111-0.000-0", "70707070707070707070707070707070000080803030303000008080303030000000808030303000000080803030303070707070707070707070707070707070-2-1-1-5000-10000-21000-90-00111100-11111-0.000-1", "40604060406040606040604060406040406040604060406060406040604060704060406040604070604060406040604040604060406040606040604060406040-1-31-1-15000-26000-33000-40-11111111-11111-0.000-0", "00000000707030700000000070703070000000007070307000000000707030700000000070703070000000007070307000000000707030700000000070703070-0-8-1-20000-35000-50000-50-11111111-11110-0.000-0", "70707070707070706060707070706666606080707066666660608080806666006060808080666600606080707066666660607070707066667070707070707070-1-26-1-15000-25000-35000-45-11111111-11111-0.000-0", "80808080606060708070708060607070807070806070707080808080606060008080808060606000807070806070707080707080606070708080808060606070-1-18-1-10000-18000-25000-40-11111111-11111-0.000-0", "00008000008000000080807070808000808080708080808080808080807080008080808080708000808080708080808000808070708080000000800000800000-4-25000-1-20000-30000-40000-40-11111111-11111-0.000-0", "10000000307070100040400030303070004040003070701000000000303030700000000030303070004040003070701000404000303030701000000030707010-0-16-1-12000-19000-25000-30-11111111-11111-0.000-0", "70701000001070707030303030303070303030303030303000000000000000000000000000000000303030303030303070303030303030707070100000107070-3-50-1-13000-25000-33000-40-11111111-11111-0.000-0", "70003030306060600000307030606060000070303060606000700030303030300070003030303030000070303060606000003070306060607000303030606060-1-18-1-10000-20000-30000-40-11111111-11111-0.000-0"]];
	return e
} ();
var LevelData = function() {
	function e(t, n, r) {
		if (typeof r === "undefined") {
			r = 0
		}
		this.state = 0;
		this.levelNumber = 0;
		this.stars = 0;
		this.score = 0;
		this.pushPositions = [];
		this.typeEnable = [true, true, true, true, true, true, true];
		this.tileData = [];
		this.hasWhiteChoco = false;
		this.hasBlackChoco = false;
		this.isTimeLevel = false;
		this.shieldProbability = 0;
		this.data = n;
		if (!this.data) this.data = e.defaultData;
		this.state = r;
		this.levelNumber = t;
		this.stars = 0;
		for (var i = 0; i < Match3Level.LEVEL_W; ++i) this.pushPositions.push(i);
		var s = this.data.split("-");
		this.cellData = s[0];
		this.targetData = parseInt(s[1]);
		this.customData = parseInt(s[2]);
		this.customData2 = parseInt(s[3]);
		this.limitLeft = parseInt(s[7]);
		this.starValues = [parseInt(s[4]), parseInt(s[5]), parseInt(s[6])];
		if (s.length > 8) {
			this.pushPositions = [];
			var o = s[8];
			for (var u = 0; u < o.length && u < Match3Level.LEVEL_W; ++u) if (parseInt(o.charAt(u)) == 1) this.pushPositions.push(u)
		}
		if (s.length > 9) {
			var a = s[9];
			for (var u = 0; u < a.length; ++u) this.typeEnable[u] = parseInt(a.charAt(u)) == 1
		}
		if (s.length > 10) {
			this.shieldProbability = parseFloat(s[10])
		}
		if (s.length > 11) {
			this.isTimeLevel = s[11].charAt(0) == "1"
		}
		var f = [];
		for (var i = 0; i < Match3Level.LEVEL_W; ++i) {
			var l = [];
			for (var c = 0; c < Match3Level.LEVEL_H; ++c) {
				var h = Match3Level.getCellDataType(this.cellData, i, c);
				if (h == 2) this.hasWhiteChoco = true;
				if (h == 3) this.hasBlackChoco = true;
				l.push(h)
			}
			f.push(l)
		}
		this.generateTiles(f);
		switch (this.targetData) {
		case 0:
			this.targetSpriteName = "block2";
			break;
		case 1:
			this.targetSpriteName = "dirt";
			break;
		case 2:
			this.targetSpriteName = "cupcake";
			break;
		case 3:
			this.targetSpriteName = FieldObject.assetNames[this.customData2];
			break;
		case 4:
			this.targetSpriteName = "star";
			break;
		case - 1 : this.targetSpriteName = "star";
			break
		}
	}
	e.prototype.getCakeSpawnPos = function() {
		var e = getInt(this.pushPositions.length);
		return this.pushPositions[e]
	};
	e.prototype.generateTiles = function(t) {
		var n = e.tileSignatures.length;
		for (var r = -1; r < Match3Level.LEVEL_H + 1; ++r) {
			for (var i = 0; i < Match3Level.LEVEL_W; ++i) {
				for (var s = 0; s < n; ++s) {
					var o = e.tileSignatures[s];
					var u = true;
					for (var a = -1; a <= 1; ++a) {
						if (!u) break;
						for (var f = -1; f <= 1; ++f) {
							var l = i + a;
							var c = r + f;
							var h = l < 0 || l >= Match3Level.LEVEL_W;
							var p = c < 0 || c >= Match3Level.LEVEL_H;
							var d = h || p;
							var v = d ? !h && p ? 1 : -1 : t[l][c] == 7 ? 0 : 1;
							var m = a + 1 + (f + 1) * 3;
							u = u && (o[m] == -1 || v == o[m]);
							if (!u) break
						}
					}
					if (u) {
						var g = Match3Level.gridToStage(i, r);
						var y = e.tileLayers[s];
						this.tileData.push([s, g.x - 78 / 2 + e.tileShifts[s].x, g.y - 78 / 2 + e.tileShifts[s].y, y])
					}
				}
			}
		}
	};
	e.CLOSED_STATE = 0;
	e.OPENED_STATE = 1;
	e.COMPLETED_STATE = 2;
	e.defaultData = "=00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000-4-99999-1-500-1500-3000-99";
	e.tileShifts = [cjp( - 1, -1), cjp(39, -4), cjp( - 4, -4), cjp(39, 39), cjp( - 4, 39), cjp( - 39, 0), cjp(0, 74), cjp(39, -4 + 78), cjp( - 5, -4 + 78), cjp(0, -78 + 39), cjp(78 - 4, -1), cjp(0 + 39, -78 + 39), cjp(0 - 4, -78 + 39)];
	e.tileLayers = [0, 4, 4, 3, 3, 1, 2, 3, 3, 1, 1, 1, 1];
	e.tileSignatures = [[ - 1, -1, -1, -1, 0, -1, -1, -1, -1], [ - 1, 0, -1, -1, 1, 0, -1, -1, -1], [ - 1, 0, -1, 0, 1, -1, -1, -1, -1], [ - 1, -1, -1, -1, 1, 0, -1, 0, -1], [ - 1, -1, -1, 0, 1, -1, -1, 0, -1], [ - 1, -1, -1, 0, 1, -1, -1, -1, -1], [ - 1, -1, -1, -1, 1, -1, -1, 0, -1], [ - 1, -1, -1, -1, 1, 1, -1, 0, 1], [ - 1, -1, -1, 1, 1, -1, 1, 0, -1], [ - 1, 0, -1, -1, 1, -1, -1, -1, -1], [ - 1, -1, -1, -1, 1, 0, -1, -1, -1], [ - 1, 0, 1, -1, 1, 1, -1, -1, -1], [1, 0, -1, 1, 1, -1, -1, -1, -1]];
	return e
} ();
var SinglePlayObject = function(e) {
	function t(t, n, r, i, s, o, u, a) {
		if (typeof a === "undefined") {
			a = 1
		}
		e.call(this);
		var f = createSpriteFromSpritesheet(r);
		f.play();
		f.scaleX = f.scaleY = a;
		f.regX = o / a;
		f.regY = u / a;
		f.x = t;
		f.y = n;
		this.lastFrame = i;
		this.sprite = f;
		addChild(this.sprite, s)
	}
	__extends(t, e);
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		var n = this.sprite;
		if (n.currentAnimationFrame >= this.lastFrame) {
			n.stop();
			this.destroy()
		}
	};
	return t
} (GameObject);
var CellObject = function(e) {
	function t(n, r) {
		e.call(this);
		this._isBlock = false;
		this.isTempBlock = false;
		this.tempBlockTime = -1;
		this.breakCountLeft = 0;
		this.marksLeft = 0;
		this.mark = null;
		this.blockSprite = null;
		this.blockTop = null;
		this.colorBlock = -1;
		this.isClearedByClickOrColor = false;
		this.bonusComboCount = -1;
		this.scoreToAdd = -1;
		this.breakMatchId = -1;
		this.changeTypeIn = -1;
		this.typeToChange = -1;
		this.clearIn = -1;
		this.clearId = 0;
		this.removeBlockIn = -1;
		this.timeSinceBlockRemove = 100;
		this.lastBlockSet = -1;
		this.isHoleBlock = false;
		this.cacheUpdateState = t.CACHE_NONE;
		this.timeSinceLastTypeChange = 0;
		this.x = n;
		this.y = r;
		this.pos = Match3Level.instance.gridToStage(n, r);
		var i = this.level.tileSize;
		this.rect = new createjs.Rectangle(this.pos.x - i / 2, this.pos.y - i / 2, i, i)
	}
	__extends(t, e);
	t.prototype.setTutorialLight = function(e) {
		if (this.tutorialLight) createjs.Tween.removeTweens(this.tutorialLight);
		else {
			this.tutorialLight = createSpriteFromSpritesheet("tutorial_effect");
			this.tutorialLight.play();
			this.tutorialLight.currentAnimationFrame = e * 3 % 20;
			this.tutorialLight.alpha = 0;
			this.level.underGemLayer.addChild(this.tutorialLight);
			setReg(this.tutorialLight, .5, .5);
			this.tutorialLight.x = this.pos.x;
			this.tutorialLight.y = this.pos.y
		}
		createjs.Tween.get(this.tutorialLight, {
			loop: false
		}).to({
			alpha: 1
		},
		300, createjs.Ease.none)
	};
	t.prototype.removeTutorialLight = function() {
		var e = this;
		if (this.tutorialLight) {
			createjs.Tween.get(this.tutorialLight, {
				loop: false
			}).to({
				alpha: 0
			},
			200, createjs.Ease.none).call(function() {
				return e.killTutorialLight()
			})
		}
	};
	t.prototype.killTutorialLight = function() {
		removeClip(this.tutorialLight);
		this.tutorialLight = null
	};
	Object.defineProperty(t.prototype, "isChangingType", {
		get: function() {
			return this.changeTypeIn >= 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.prepareToChangeType = function(e, t) {
		if (typeof t === "undefined") {
			t = -1
		}
		while (t < 0) {
			t = getInt(this.level.assetNumber)
		}
		this.changeTypeIn = e;
		this.typeToChange = t;
		this.level.mustSort = true
	};
	t.prototype.setCacheState = function(e) {
		this.cacheUpdateState = Math.max(e, this.cacheUpdateState)
	};
	t.prototype.resetCacheState = function() {
		this.cacheUpdateState = t.CACHE_NONE
	};
	t.prototype.setMark = function(e) {
		if (typeof e === "undefined") {
			e = 1
		}
		if (e == this.marksLeft) return;
		this.level.needToUpdateBack = true;
		var t = this.marksLeft;
		this.marksLeft = e;
		if (this.marksLeft <= 0) {
			removeClip(this.mark);
			this.mark = null;
			this.level.target.onMarkRemoved();
			return
		}
		var n = e == 1 ? "dirt": "dirt2";
		var r = this.mark ? this.mark: createSpriteFromSpritesheet(n, e == 1 ? 0 : 1);
		r.regX = r.getBounds().width / 2;
		r.regY = r.getBounds().height / 2;
		r.spriteSheet = App.game.atlases[e == 1 ? 0 : 1];
		r.gotoAndStop(n);
		r.x = App.level.offsetX + (this.x + .5) * App.level.tileSize;
		r.y = App.level.offsetY + (this.y + .5) * App.level.tileSize + 1.5;
		if (r.parent == null) App.level.markLayer.addChild(r);
		this.mark = r
	};
	t.prototype.reset = function() {
		removeClip(this.blockSprite);
		removeClip(this.mark);
		removeClip(this.blockTop);
		this.blockTop = null;
		this.blockSprite = null;
		this.mark = null;
		if (this.object) {
			Match3Level.pool.returnObject(this.object);
			this.object = null
		}
		this.clearId = 0;
		this._isBlock = false;
		this.isTempBlock = false;
		this.tempBlockTime = -1;
		this.breakCountLeft = 0;
		this.marksLeft = 0;
		this.colorBlock = -1;
		this.isClearedByClickOrColor = false;
		this.breakMatchId = -1;
		this.clearIn = -1;
		this.removeBlockIn = -1;
		this.timeSinceBlockRemove = 100;
		this.lastBlockSet = -1;
		this.scoreToAdd = -1;
		this.bonusComboCount = -1;
		this.isHoleBlock = false
	};
	Object.defineProperty(t.prototype, "isMarked", {
		get: function() {
			return this.marksLeft > 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.getStagePos = function() {
		return App.level.gridToStage(this.x, this.y)
	};
	Object.defineProperty(t.prototype, "isColorBlocked", {
		get: function() {
			return this.colorBlock >= 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.setBlock = function(e, t, n) {
		if (typeof e === "undefined") {
			e = 0
		}
		if (typeof t === "undefined") {
			t = false
		}
		if (typeof n === "undefined") {
			n = false
		}
		this.lastBlockSet = e;
		this.breakCountLeft = t ? 0 : e;
		this._isBlock = true;
		this.colorBlock = t ? getInt(this.level.assetNumber) : -1;
		while (t && !this.level.levelData.typeEnable[this.colorBlock]) this.colorBlock = getInt(this.level.assetNumber);
		this.isHoleBlock = false;
		if (t) {
			this.setObject(Match3Level.pool.getObject(this, this.level.gridToStage(this.x, this.y), this.level.assetNumber, this.colorBlock, this.level.levelData.typeEnable));
			this.object.isMoving = false
		}
		this.level.mustSort = true;
		if (!n) {
			if (!t) {
				var r = createSpriteFromSpritesheet(t ? "cage": e == 0 ? "column": e == 1 ? "block1": "block2", !t && e == 0 ? 1 : 0);
				r.regX = r.getBounds().width * (e == 2 ? .54 : .5);
				r.regY = r.getBounds().height * (t ? .58 : e == 0 ? .58 : e == 1 ? .56 : .58);
				r.x = App.level.offsetX + (this.x + .5) * App.level.tileSize;
				r.y = App.level.offsetY + (this.y + .5) * App.level.tileSize;
				addChild(r, t ? this.level.blockLayer: this.level.gemLayer);
				this.blockSprite = r
			}
		} else this.isHoleBlock = !((this.x == 3 || this.x == 4) && this.y == this.level.fieldHeight - 1);
		if (this.isColorBlocked && this.object) this.object.updateMainSprite()
	};
	t.prototype.changeObjectType = function(e) {
		if (e != this.getType()) {
			var t = this.object.hasShield();
			var n = this.object.isBonus;
			var r = this.object.bonusType;
			this.timeSinceLastTypeChange = 0;
			Match3Level.pool.returnObject(this.object);
			var i = this.level.gridToStage(this.x, this.y);
			this.setObject(Match3Level.pool.getObject(this, i, 3, e, this.level.levelData.typeEnable, t ? 1 : 0));
			this.object.playJellyAnimation(2, 1, 1);
			if (n) this.object.setBonusType(r);
			this.level.mustSort = true
		}
	};
	t.prototype.removeBlock = function() {
		if (!this.isColorBlocked && (!this.isBreakable || this.breakMatchId == App.level.currentMove)) return;
		var e = this.blockSprite != null;
		this.breakMatchId = App.level.currentMove;
		this.breakCountLeft--;
		this.timeSinceBlockRemove = 0;
		var t = this.isColorBlocked;
		if (this.isColorBlocked) {
			this.colorBlock = -1;
			this.setTempBlock(true, .15);
			removeClip(this.blockTop);
			this.blockTop = null
		}
		if (this.level.isActive) SoundsManager.instance.playSound(t ? "color_crash": "choco_crash");
		if (this.breakCountLeft <= 0) {
			if (t) {
				if (this.object) {
					this.object.updateMainSprite();
					var n = Match3Level.pool.getCage(this.pos.x, this.pos.y, this.object.colorType);
					if (n) this.level.objects.push(n)
				}
			} else {
				this.level.objects.push(new BlockDestroyAnimation(this.blockSprite.x, this.blockSprite.y));
				this.killBlockSprite()
			}
			this._isBlock = false
		} else if (this.breakCountLeft == 1) {
			this.blockSprite.gotoAndStop("block1");
			this.blockSprite.regX = this.blockSprite.getBounds().width * .5;
			this.blockSprite.regY = this.blockSprite.getBounds().height * .56
		}
		if (e && this.blockSprite == null) this.level.target.onBlockRemoved()
	};
	t.prototype.killBlockSprite = function() {
		removeClip(this.blockSprite);
		this.blockSprite = null
	};
	t.prototype.setTempBlock = function(e, t) {
		if (typeof t === "undefined") {
			t = -1
		}
		this.isTempBlock = e;
		this.tempBlockTime = t
	};
	t.prototype.isBlock = function() {
		return this._isBlock || this.isTempBlock
	};
	Object.defineProperty(t.prototype, "isBreakable", {
		get: function() {
			return this._isBlock && this.breakCountLeft > 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.setObject = function(e) {
		this.object = e;
		if (this.object) this.object.cell = this
	};
	t.prototype.getSprite = function() {
		return this.object ? this.object.sprite: null
	};
	t.prototype.getType = function() {
		return this.object == null ? -1 : this.object.colorType
	};
	t.prototype.getBonusType = function() {
		return this.object == null ? 0 : this.object.bonusType
	};
	t.prototype.getComboBonusType = function() {
		return this.object == null ? 0 : this.object.comboSelectBonus
	};
	t.prototype.clearCell = function(e) {
		if (typeof e === "undefined") {
			e = true
		}
		var t = false;
		if (this.object && (!this.object.isPushable || !this.level.isActive) && !this.isColorBlocked && !this.object.hasShield()) {
			if (this.level.isActive) {
				this.tryPlayScoreAnimation();
				if (this.object.isComboOnlyBonus) {
					var n = this.object.comboSelectBonus;
					if (n == 1 || n == 2) {
						SoundsManager.instance.playSound("bonus_line");
						new BonusLineSprite(n, this.object.sprite.x, this.object.sprite.y)
					}
					LevelManager.instance.bonuses++
				}
				Match3Level.pool.getDestroyAnimation(this.object.colorType, this.object.sprite.x, this.object.sprite.y, this)
			}
			this.level.target.onObjectRemove(this.object);
			Match3Level.pool.returnObject(this.object);
			this.object = null;
			t = true
		} else if (this.object && (this.isColorBlocked || this.object.hasShield)) Match3Level.pool.getDestroyAnimation(this.object.colorType, this.object.sprite.x, this.object.sprite.y, this);
		var r = false;
		if (this.object && this.object.hasShield()) {
			this.object.setShield( - 1);
			r = true
		}
		if (this.marksLeft > 0 && t) {
			this.setMark(this.marksLeft - 1);
			SoundsManager.instance.playSound("cookie_crash")
		}
		this.isClearedByClickOrColor = false;
		var i = this.isBreakable;
		if (!r && (this.isBreakable || this.isColorBlocked)) {
			this.removeBlock()
		}
		if (e && !i) {
			for (var s = 0; s < 4; ++s) {
				var o = this.x + (s == 0 ? 1 : s == 1 ? -1 : 0);
				var u = this.y + (s == 2 ? 1 : s == 3 ? -1 : 0);
				if (o >= 0 && u >= 0 && o < this.level.fieldWidth && u < this.level.fieldHeight) {
					var a = this.level.cells[o][u];
					if (a && a.isBreakable && (!a.isColorBlocked || a.colorBlock == this.getType())) {
						a.removeBlockIn = .01;
						var f = Math.max(this.tempBlockTime, a.tempBlockTime);
						if (f <= 0) f = FieldObject.GEM_KILL_DELAY * 1.1;
						if (f >= 0) a.setTempBlock(true, f)
					}
				}
			}
		}
	};
	Object.defineProperty(t.prototype, "blockWasRemovedRecently", {
		get: function() {
			return this.timeSinceBlockRemove < .5
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.isStable = function() {
		return this.object == null || !this.object.isMoving
	};
	t.prototype.isStatic = function() {
		return ! this.object.isMoving
	};
	t.prototype.tryPlayScoreAnimation = function() {
		if (this.scoreToAdd > 0) {
			var e = this.level.isEnded;
			if (e) this.scoreToAdd = 10 * Math.round(this.scoreToAdd * 1.25 / 10);
			this.level.objects.push(Match3Level.pool.getText(this.scoreToAdd.toString(), this, 0));
			this.scoreToAdd = -1;
			this.bonusComboCount = -1
		}
	};
	t.prototype.prepareToClear = function(e, t, n, r) {
		if (typeof e === "undefined") {
			e = -1
		}
		if (typeof t === "undefined") {
			t = 0
		}
		if (typeof n === "undefined") {
			n = -1
		}
		if (typeof r === "undefined") {
			r = false
		}
		var i = t == 0;
		this.isClearedByClickOrColor = this.isClearedByClickOrColor || i;
		if (this.isWaitingForClear && e >= this.clearIn) return;
		this.clearIn = .01 + e
	};
	Object.defineProperty(t.prototype, "isWaitingForClear", {
		get: function() {
			return this.clearIn > 0
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.update = function(e) {
		if (this.isTempBlock) {
			this.tempBlockTime -= e;
			if (this.tempBlockTime < 0) {
				this.setTempBlock(false);
				this.isTempBlock = false
			}
		}
		if (this.clearIn > 0) {
			this.clearIn -= e;
			if (this.clearIn <= 0) {
				this.clearCell(this.isClearedByClickOrColor)
			}
		}
		if (!this._isBlock || this.breakCountLeft <= 0) this.timeSinceBlockRemove += e;
		if (this.removeBlockIn > 0) {
			this.removeBlockIn -= e;
			if (this.removeBlockIn <= 0 && this.isBreakable) this.removeBlock()
		}
		this.timeSinceLastTypeChange += e;
		if (this.object) {
			this.object.update(e);
			this.object.cell = this
		}
		if (this.changeTypeIn > 0) {
			this.changeTypeIn -= e;
			if (this.changeTypeIn <= 0 && this.object) {
				this.changeObjectType(this.typeToChange)
			}
		}
	};
	t.prototype.destroy = function() {
		this.clearCell(false);
		removeClip(this.mark);
		this.mark = null;
		removeClip(this.blockTop);
		this.blockTop = null;
		removeClip(this.blockSprite);
		this.blockSprite = null;
		e.prototype.destroy.call(this)
	};
	t.BASE_SCORE = 100;
	t.BONUS_CELL_SCORE_FACTOR = 5;
	t.BONUS_SCORE_FACTOR = 2;
	t.BONUS_COLOR_SCORE_FACTOR = 4;
	t.CACHE_NONE = 0;
	t.CACHE_CLEAR = 1;
	t.CACHE_DRAW = 2;
	return t
} (GameObject);
var Preloader = function() {
	function e() {
		this.sprites = [];
		this.mainLoadingStarted = false;
		this.hasBrandLogo = false;
		this.hasMoreGames = false;
		this.shownButton = false;
		this.loadedMain = false;
		e.instance = this;
		this.loadApi()
	}
	e.prototype.loadApi = function() {
		var e = this;
		var t = {
			id: App.episode == 1 ? "576742227280292161": "576742227280292163"
		};
		try {
			if (GameAPI && GameAPI != undefined && needApi) {
				var n = GameAPI.loadAPI(function(t) {
					return e.onApiLoaded(t)
				},
				t);
				console.log("res: " + n)
			} else this.onApiLoaded(null)
		} catch(r) {
			this.onApiLoaded(null)
		}
	};
	e.prototype.onApiLoaded = function(e) {
		var t = this;
		apiInstance = e;
		if (e) console.log("GameAPI version " + e.version + " loaded!");
		var n = new createjs.Container;
		App.game.stage.addChild(n);
		this.sprite = n;
		var r = [{
			src: "assets/preloader/preloader_back.jpg",
			id: "preloader back"
		},
		{
			src: "assets/preloader/circle.jpg",
			id: "preloader candy top"
		},
		{
			src: "assets/preloader/progressbar_top.jpg",
			id: "preloader progress top"
		},
		{
			src: "assets/preloader/play.jpg",
			id: "play button"
		}];
		var i = apiInstance ? apiInstance.Branding.getLogo() : null;
		var s = !i || i.error != undefined;
		if (i && i.image) {
			var o = s ? "2014-12-10": i.image;
			this.hasBrandLogo = true;
			console.log("logo: ", s, i.image, o);
			r.push({
				src: o,
				id: "brand logo"
			})
		}
		var u = apiInstance ? apiInstance.Branding.getLink("more_games") : null;
		var s = !i || i.error != undefined;
		if (u && u.action && !s) {
			this.hasMoreGames = true
		}
		this.preLoader = new createjs.LoadQueue(true);
		this.preLoader.addEventListener("complete",
		function() {
			return t.onPreLoadComplete()
		});
		this.preLoader.loadManifest(r)
	};
	e.prototype.onPreLoadComplete = function() {
		var e = this;
		if (this.mainLoadingStarted) return;
		this.mainLoadingStarted = true;
		var t = this.sprite;
		var n = new createjs.Bitmap(this.preLoader.getResult("preloader back"));
		t.addChild(n);
		this.sprites.push(n);
		n = new createjs.Bitmap(this.preLoader.getResult("preloader progress top"));
		t.addChild(n);
		n.regX = n.getBounds().width / 2;
		n.regY = n.getBounds().height / 2;
		this.barRect = n.getBounds().clone();
		this.sprites.push(n);
		n = new createjs.Bitmap(this.preLoader.getResult("preloader candy top"));
		t.addChild(n);
		n.regX = n.getBounds().width / 2;
		n.regY = n.getBounds().height / 2 + 3;
		this.sprites.push(n);
		n = new createjs.Bitmap(this.preLoader.getResult("play button"));
		t.addChild(n);
		n.regX = 78;
		n.regY = n.getBounds().height / 2 + 3;
		n.x = 430;
		n.y = 500;
		this.playButton = n;
		this.playButton.alpha = 0;
		this.playButton.visible = false;
		this.sprites.push(n);
		this.onResize();
		createjs.Sound.initializeDefaultPlugins();
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		var r = App.episode;
		var i = App.episode <= 1 ? "assets/tutorial/": "assets/tutorial/episode2/";
		var s = App.episode <= 1 ? "assets/episode1/": "assets/episode2/";
		var o = [{
			src: "assets/preloader/zibbo_logo.png",
			id: "zibbo_logo"
		},
		{
			src: "assets/bar12.png",
			id: "bar"
		},
		{
			src: "assets/bar21.png",
			id: "bar2"
		},
		{
			src: "assets/art.png",
			id: "art.png"
		},
		{
			src: s + "art.png",
			id: "artEpisode.png"
		},
		{
			src: "assets/art_linear.png",
			id: "art_linear.png"
		},
		{
			src: "assets/transition.jpg",
			id: "transition"
		},
		{
			src: "assets/art.json",
			id: "artJson",
			type: createjs.LoadQueue.JSON
		},
		{
			src: "assets/art_linear.json",
			id: "artLinearJson",
			type: createjs.LoadQueue.JSON
		},
		{
			src: s + "art.json",
			id: "artEpisodeJson",
			type: createjs.LoadQueue.JSON
		},
		{
			src: "assets/art_font.png",
			id: "artFont"
		},
		{
			src: "assets/art_font.json",
			id: "artFontJson",
			type: createjs.LoadQueue.JSON
		},
		{
			src: s + "MenuAnim.json",
			id: "MenuAnim",
			type: createjs.LoadQueue.JSON
		},
		{
			src: "assets/button.json",
			id: "buttonAnim",
			type: createjs.LoadQueue.JSON
		},
		{
			src: "assets/TutorialWizard_Animation.json",
			id: "TutorialWizard_Animation",
			type: createjs.LoadQueue.JSON
		},
		{
			src: App.episode == 2 ? "assets/back1.jpg": "assets/back1.jpg",
			id: "back1"
		},
		{
			src: "assets/Wizard.json",
			id: "wizard anim",
			type: createjs.LoadQueue.JSON
		},
		{
			src: s + "tutorial1.png",
			id: "tutorial1"
		},
		{
			src: s + "tutorial2.png",
			id: "tutorial2"
		},
		{
			src: s + "tutorial3.png",
			id: "tutorial3"
		},
		{
			src: s + "tutorial4.png",
			id: "tutorial4"
		},
		{
			src: s + "main_menu.jpg",
			id: "main menu"
		},
		{
			src: "assets/sound/music/ttc_main.ogg",
			id: "main_music",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/win.ogg",
			id: "win",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/fail.ogg",
			id: "fail",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/button.ogg",
			id: "button",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/pause.ogg",
			id: "pause",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/transition.ogg",
			id: "transition_sound",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/remove1.ogg",
			id: "remove1",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/score_sound.ogg",
			id: "score_sound",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/star_hud.ogg",
			id: "star_hud",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/gui_move.ogg",
			id: "gui_move",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/star1.ogg",
			id: "star1",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/star2.ogg",
			id: "star2",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/star3.ogg",
			id: "star3",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop1.ogg",
			id: "monster_pop1",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop2.ogg",
			id: "monster_pop2",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop3.ogg",
			id: "monster_pop3",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop4.ogg",
			id: "monster_pop4",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop5.ogg",
			id: "monster_pop5",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_pop6.ogg",
			id: "monster_pop6",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/bonus_show.ogg",
			id: "bonus_show",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/bonus_set.ogg",
			id: "bonus_set",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/bonus_line.ogg",
			id: "bonus_line",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/pointer.ogg",
			id: "pointer_sound",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/cookie_crash.ogg",
			id: "cookie_crash",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/choco_crash.ogg",
			id: "choco_crash",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/color_crash.ogg",
			id: "color_crash",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/cake_down.ogg",
			id: "cake_down",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_defence.ogg",
			id: "monster_defence",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/stop_move.ogg",
			id: "stop_move",
			type: createjs.LoadQueue.SOUND
		},
		{
			src: "assets/sound/monster_select.ogg",
			id: "monster_select",
			type: createjs.LoadQueue.SOUND
		}];
		if (needApi && needCross && apiInstance && apiInstance.Branding) {
			for (var u = 0; u < 1; ++u) {
				var a = apiInstance.Branding.getLink(MainMenu.crossLinks[MainMenu.episodeCross[App.episode - 1][u]]).image;
				console.log("load", u, a, MainMenu.crossLinks[MainMenu.episodeCross[App.episode - 1][u]]);
				if (a) o.push({
					src: a,
					id: "cross_link" + (u + 1)
				})
			}
		}
		o.push({
			src: s + "map1.jpg",
			id: "map1"
		},
		{
			src: s + "map2.jpg",
			id: "map2"
		},
		{
			src: s + "map3.jpg",
			id: "map3"
		},
		{
			src: s + "map4.jpg",
			id: "map4"
		});
		this.loader = new createjs.LoadQueue(true);
		this.loader.installPlugin(createjs.Sound);
		createjs.Sound.initializeDefaultPlugins();
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		this.loader.addEventListener("complete",
		function() {
			return e.onLoadComplete()
		});
		this.loader.addEventListener("progress",
		function() {
			return e.onProgress()
		});
		this.loader.loadManifest(o)
	};
	e.prototype.onLoadComplete = function() {
		this.onResize();
		this.onProgress();
		this.showButton()
	};
	e.prototype.showButton = function() {
		if (!this.shownButton) {
			this.shownButton = true;
			this.playButton.scaleX = this.playButton.scaleY = .5;
			this.playButton.visible = true;
			this.sprites[2].visible = false;
			createjs.Tween.get(this.playButton, {
				loop: false
			}).wait(0).to({
				scaleX: 1.2,
				scaleY: 1.2,
				alpha: 1
			},
			150, createjs.Ease.circOut).wait(0).to({
				scaleX: 1,
				scaleY: 1
			},
			250, createjs.Ease.circIn)
		}
	};
	e.prototype.onDown = function(e, t) {
		if (!this.loadedMain && this.playButton && this.playButton.visible) {
			var n = this.playButton.getTransformedBounds();
			if (e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height) {
				this.loadedMain = true;
				App.game.loadApi();
				createjs.Tween.get(this.playButton, {
					loop: false
				}).wait(0).to({
					scaleX: 1.2,
					scaleY: 1.2,
					alpha: 1
				},
				200, createjs.Ease.circOut).wait(0).to({
					scaleX: 1,
					scaleY: 1
				},
				200, createjs.Ease.circIn)
			}
		}
	};
	e.prototype.isActive = function() {
		return this.sprite.parent != null
	};
	e.prototype.disable = function() {
		removeClip(this.sprite);
		for (var e = 0; e < this.sprites.length; ++e) removeClip(this.sprites[e])
	};
	e.prototype.onProgress = function() {
		if (this.sprites.length <= 0 || !this.barRect) return;
		var e = this.loader.progress;
		var t = new createjs.Rectangle(this.barRect.x, this.barRect.y, limit(this.barRect.width * e, 1, this.barRect.width), this.barRect.height);
		this.sprites[1].sourceRect = t
	};
	e.prototype.update = function(e) {
		if (this.sprite && this.sprite.parent && this.sprites.length > 0) {
			this.sprites[2].rotation -= 400 * e
		}
	};
	e.prototype.onResize = function() {
		if (!this.sprite || !this.sprite.parent || this.sprites.length <= 0) return;
		var e = App.ACTUAL_H - Math.min(App.CURRENT_SHIFT, 0);
		this.sprites[1].x = 280 + 13;
		this.sprites[2].x = 620 - 5;
		this.sprites[1].y = 620 - 1;
		this.sprites[2].y = 620 - 1
	};
	return e
} ();
var CookieTweenSprite = function(e) {
	function t(t, n, r) {
		var i = this;
		e.call(this);
		var s = createSpriteFromSpritesheet(r == 0 ? "dirt": "dirt2", r == 0 ? 0 : 1);
		s.regX = s.getBounds().width / 2;
		s.regY = s.getBounds().height / 2;
		this.sprite = s;
		this.level.underGemLayer.addChild(s);
		if (r == 0) createjs.Tween.get(s, {
			loop: false
		}).wait(0).to({
			scaleX: 1.3,
			scaleY: 1.3
		},
		110, createjs.Ease.quadOut);
		createjs.Tween.get(s, {
			loop: false
		}).wait(0).to({
			alpha: 0
		},
		110, createjs.Ease.quadIn).call(function() {
			return i.onComplete()
		})
	}
	__extends(t, e);
	t.prototype.onComplete = function() {
		this.destroy()
	};
	return t
} (GameObject);
var BonusDestroyAnimation = function(e) {
	function t(n, r, i, s) {
		var o = this;
		e.call(this);
		this.progress = 0;
		this.cell = s;
		var u = createSpriteFromSpritesheet(i);
		u.regX = u.getBounds().width / 2;
		u.regY = u.getBounds().height / 2;
		u.x = n;
		u.y = r;
		this.level.bonusLayer.addChild(u);
		this.sprite = u;
		var a = createSpriteFromSpritesheet("star glow");
		a.regX = a.getBounds().width / 2;
		a.regY = a.getBounds().height / 2;
		a.x = n;
		a.y = r;
		a.scaleX = a.scaleY = .15;
		a.alpha = 0;
		this.level.underGemLayer.addChild(a);
		this.glow = a;
		createjs.Tween.get(this, {
			loop: false
		}).to({
			progress: 1
		},
		t.TIME * 1e3, createjs.Ease.none).call(function() {
			return o.setLight()
		})
	}
	__extends(t, e);
	t.prototype.setLight = function() {
		this.sprite.visible = this.glow.visible = false;
		this.light = createSpriteFromSpritesheet("bonus blink");
		this.light.x = this.sprite.x;
		this.light.y = this.sprite.y;
		this.light.scaleX = this.light.scaleY = ANIM_SCALE * 1.5;
		this.light.regX = 67 / ANIM_SCALE;
		this.light.regY = 61 / ANIM_SCALE;
		this.level.blockLayer.addChild(this.light);
		this.light.play()
	};
	t.prototype.update = function(e) {
		if (this.sprite.visible) {
			this.sprite.scaleX = this.sprite.scaleY = lerp(1, 1.2, this.progress);
			this.glow.alpha = this.progress;
			this.glow.scaleX = this.glow.scaleY = lerp(.15, .95, this.progress)
		}
		if (this.light && this.light.currentAnimationFrame >= 8) {
			if (this.cell) this.cell.tryPlayScoreAnimation();
			this.destroy()
		}
	};
	t.prototype.destroy = function() {
		e.prototype.destroy.call(this);
		createjs.Tween.removeTweens(this);
		removeClip(this.glow);
		this.glow = null;
		removeClip(this.light);
		this.light = null
	};
	t.TIME = .5;
	return t
} (GameObject);
var JumpText = function(e) {
	function t(t, n) {
		e.call(this);
		this.speed = new createjs.Point;
		this.targetPos = new createjs.Point;
		this.diff = new createjs.Point;
		this.isHiding = false;
		this.isFinished = false;
		this.isScore = false;
		this.isBonusCombo = false;
		this.isEnding = false;
		this.score = 0;
		this.isScore = n == 0;
		this.isBonusCombo = n == 1;
		this.isEnding = n == 3;
		if (this.isScore) this.score = parseInt(t);
		var r = new createjs.BitmapText("+" + t, App.game.atlases[0]);
		r.letterSpacing = -10;
		var i = getTextSize(r);
		r.mouseEnabled = false;
		r.scaleX = r.scaleY = 1;
		var s = r.getTransformedBounds();
		r.regX = Math.ceil(i.x / 2);
		r.regY = Math.ceil(i.y);
		this.sprite = r;
		this.text = t
	}
	__extends(t, e);
	t.prototype.init = function(e, t, n) {
		this.speed.x = this.speed.y = this.targetPos.x = this.targetPos.y = this.diff.x = this.diff.y = 0;
		this.isHiding = this.isFinished = false;
		this.sprite.alpha = 1;
		this.level = Match3Level.instance;
		if (this.level) this.level.hudLayer.addChild(this.sprite);
		this.sprite.x = e;
		this.sprite.y = t;
		this.sprite.visible = true;
		this.isDestroyed = false;
		this.speedModulo = (this.isScore ? 11 : 15) * 60;
		this.speed.y = -this.speedModulo;
		var r = 0;
		if (this.isScore) r = n && n.x == 0 ? lerp(15, 30, Math.random()) : n && n.x == this.level.fieldWidth - 1 ? lerp( - 30, -15, Math.random()) : lerp( - 20, 20, Math.random());
		else if (this.isBonusCombo) {
			var i = n.y < 3 ? 110 : n.y > this.level.fieldHeight - 3 ? 70 : Math.random() > .5 ? 110 : 70;
			r = lerp( - 15, 15, Math.random()) + (n.x < 3 ? i: n.x > this.level.fieldWidth - 3 ? -i: Math.random() > .5 ? i: -i)
		} else r = 0;
		rotatePoint(this.speed, r);
		createjs.Tween.get(this, {
			loop: false
		}).to({
			speedModulo: 0
		},
		750, createjs.Ease.quadOut);
		this.targetPos.x = e;
		this.targetPos.y = t;
		return this
	};
	t.prototype.release = function() {
		createjs.Tween.removeTweens(this.sprite);
		createjs.Tween.removeTweens(this);
		removeClip(this.sprite);
		this.sprite.visible = false;
		this.isDestroyed = true
	};
	t.prototype.update = function(t) {
		var n = this;
		if (this.isFinished) {
			Match3Level.pool.returnText(this);
			return
		}
		e.prototype.update.call(this, t);
		if (!this.isHiding) {
			this.sprite.x += this.speed.x * t;
			this.sprite.y += this.speed.y * t;
			this.diff.x = this.targetPos.x - this.sprite.x;
			this.diff.y = this.targetPos.y - this.sprite.y;
			var r = distanceBetweenPoints(0, 0, this.diff.x, this.diff.y);
			this.diff.x /= r;
			this.diff.y /= r;
			var i = .8 * 60 * 60;
			this.diff.x *= i;
			this.diff.y *= i;
			if (this.speedModulo > 0) {
				this.speed.x += this.diff.x * t;
				this.speed.y += this.diff.y * t;
				var r = distanceBetweenPoints(0, 0, this.speed.x, this.speed.y);
				if (r > this.speedModulo) {
					var s = this.speedModulo / r;
					this.speed.x *= s;
					this.speed.y *= s
				}
			} else this.speed.x = this.speed.y = 0;
			if (Math.abs(this.speedModulo) < 1e-5 && !this.isHiding) {
				this.isHiding = true;
				if (this.isScore) createjs.Tween.get(this.sprite, {
					loop: false
				}).wait(0).to({
					x: this.level.hud.scoreText.x + 100,
					y: this.level.hud.scoreText.y - 45,
					alpha: .2
				},
				400, createjs.Ease.quartIn).call(function() {
					return n.finishMovement()
				});
				else createjs.Tween.get(this.sprite, {
					loop: false
				}).wait(0).to({
					alpha: .2
				},
				400, createjs.Ease.quartIn).call(function() {
					return n.finishMovement()
				})
			}
		}
	};
	t.prototype.finishMovement = function() {
		if (this.isFinished) return;
		if (this.isScore) {
			this.level.score += this.score;
			SoundsManager.instance.playSound("score_sound")
		}
		this.isFinished = true
	};
	t.prototype.destroy = function() {
		Match3Level.pool.returnText(this)
	};
	return t
} (GameObject);
var EndBonusIndicator = function(e) {
	function t(t, n, r, i, s) {
		e.call(this);
		this.delay = -1;
		this.currentFrame = 0;
		this.cell = r;
		this.bonusType = s;
		var o = createSpriteFromSpritesheet("bonus_particle");
		o.regX = 43;
		o.regY = 41;
		o.x = t;
		o.y = n;
		o.visible = false;
		this.delay = i;
		this.sprite = o;
		addChild(this.sprite, this.level.hudLayer)
	}
	__extends(t, e);
	Object.defineProperty(t.prototype, "totalTime", {
		get: function() {
			return this.delay + t.MOVE_TIME
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.update = function(n) {
		var r = this;
		e.prototype.update.call(this, n);
		this.delay -= n;
		if (this.delay <= 0 && !this.sprite.visible) {
			SoundsManager.instance.playSound("bonus_show");
			this.sprite.visible = true;
			this.sprite.alpha = .3;
			this.sprite.scaleX = this.sprite.scaleY = .3;
			createjs.Tween.get(this.sprite, {
				loop: false
			}).wait(0).to({
				alpha: 1,
				scaleX: 1,
				scaleY: 1,
				x: this.cell.pos.x,
				y: this.cell.pos.y
			},
			t.MOVE_TIME * 1e3, createjs.Ease.cubicIn).call(function() {
				return r.hide()
			});
			this.level.limitLeft = Math.max(0, this.level.limitLeft - 1)
		}
		if (this.sprite && this.sprite.visible) {
			this.currentFrame += n / (1 / 24);
			var i = 4;
			while (this.currentFrame > 3) this.currentFrame -= 3;
			var s = ~~this.currentFrame;
			var o = BonusIndicator.frames[s];
			var u = s == i - 1 ? BonusIndicator.frames[0] : BonusIndicator.frames[s + 1];
			var a = this.currentFrame - s;
			this.sprite.scaleX = 1.3 * (1 + (o[0] + a * (u[0] - o[0]) - 1));
			this.sprite.scaleY = 1.3 * (1 + (o[1] + a * (u[1] - o[1]) - 1))
		}
	};
	t.prototype.hide = function() {
		if (this.cell && this.cell.object) {
			this.cell.object.setBonusType(this.bonusType);
			this.cell.setTempBlock(false, -1)
		}
		this.destroy()
	};
	t.prototype.destroy = function() {
		e.prototype.destroy.call(this);
		this.cell = null
	};
	t.MOVE_TIME = .5;
	return t
} (GameObject);
var SoundsManager = function() {
	function e() {
		this.lastPlays = {};
		this.delays = {};
		this.shifts = {};
		this.musicPlayed = false;
		this.isSoundEnabled = !isEditorVersion;
		this.isMusicEnabled = !isEditorVersion;
		this.musicPaused = false;
		this.volumes = {};
		e.instance = this;
		this.delays["remove1"] = this.delays["remove2"] = this.delays["remove3"] = this.delays["remove4"] = FieldObject.GEM_KILL_DELAY * .5;
		this.delays["cookie_crash"] = this.delays["choco_crash"] = this.delays["color_crash"] = .05;
		this.delays["stop_move"] = .03;
		this.delays["bonus_show"] = .05;
		this.volumes["bonus_set"] = .78;
		this.volumes["choco_crash"] = 1.6;
		this.volumes["cookie_crash"] = 1.6;
		this.volumes["color_crash"] = 1
	}
	e.prototype.update = function(e) {
		this.time += e
	};
	e.prototype.playSound = function(e, t) {
		if (typeof t === "undefined") {
			t = 0
		}
		if (!this.isSoundEnabled) return;
		var n = this.delays[e];
		var r = this.lastPlays[e];
		var i = this.shifts[e];
		var s = 0;
		var o = this.volumes[e] ? this.volumes[e] : 1;
		if (n) {
			if (!i) {
				if (r && Math.abs(this.time - r) < n) return;
				else this.lastPlays[e] = this.time
			} else {
				if (!r || r < this.time) this.lastPlays[e] = this.time;
				else {
					if (r + i < this.time + n) {
						this.lastPlays[e] = r + i;
						s = (this.lastPlays[e] - this.time) * 1e3
					} else return
				}
			}
		}
		createjs.Sound.play(e, "none", s + t, 0, 0, o)
	};
	e.prototype.playMusic = function() {
		if (!this.musicPlayed) {
			var e = this.music != null;
			if (!this.music) this.music = createjs.Sound.play("main_music", {
				interrupt: createjs.Sound.INTERRUPT_ANY,
				loop: -1,
				volume: .55
			});
			else this.music.play(createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1);
			this.musicPlayed = this.music.playState == createjs.Sound.PLAY_SUCCEEDED;
			if (!this.isMusicEnabled) this.music.pause()
		}
	};
	e.prototype.pauseMusic = function() {
		this.musicPaused = true;
		if (this.musicPlayed && this.music) createjs.Tween.get(this.music, {
			loop: false
		}).wait(0).to({
			volume: 0
		},
		200, createjs.Ease.cubicIn)
	};
	e.prototype.resumeMusic = function() {
		this.musicPaused = false;
		if (this.musicPlayed && this.music) createjs.Tween.get(this.music, {
			loop: false
		}).wait(0).to({
			volume: .55
		},
		200, createjs.Ease.cubicIn)
	};
	e.prototype.setSound = function(e) {
		if (typeof e === "undefined") {
			e = true
		}
		this.isSoundEnabled = e
	};
	e.prototype.setMusic = function(e) {
		if (typeof e === "undefined") {
			e = true
		}
		this.isMusicEnabled = e;
		if (this.music) {
			if (e) this.music.resume();
			else this.music.pause()
		}
	};
	e.prototype.reset = function() {
		this.time = 0;
		this.lastPlays = {}
	};
	return e
} ();
var ClickableObject = function(e) {
	function t(t) {
		if (typeof t === "undefined") {
			t = null
		}
		e.call(this);
		this.shape = -1;
		this.radius = 0;
		this.shift = new createjs.Point;
		this.rect = new createjs.Rectangle;
		this.lastClickTime = -1;
		if (t) this.sprite = t
	}
	__extends(t, e);
	t.prototype.setCircle = function(e, n, r) {
		if (typeof n === "undefined") {
			n = 0
		}
		if (typeof r === "undefined") {
			r = 0
		}
		this.shape = t.CIRCLE_SHAPE;
		this.radius = e;
		this.shift.x = n;
		this.shift.y = r
	};
	t.prototype.setRect = function(e, n, r, i) {
		this.shape = t.RECT_SHAPE;
		this.rect.initialize(e, n, r, i)
	};
	t.prototype.checkClick = function(e, n) {
		if (this.sprite && this.shape >= 0 && this.sprite.visible && this.sprite.parent && this.sprite.parent.visible) {
			var r = this.sprite.localToGlobal(0, 0);
			switch (this.shape) {
			case t.CIRCLE_SHAPE:
				return distanceBetweenPoints(r.x + this.shift.x, r.y + this.shift.y, e, n) <= this.radius;
			case t.RECT_SHAPE:
				return e >= r.x + this.rect.x && n >= r.y + this.rect.y && e <= r.x + this.rect.x + this.rect.width && n <= r.y + this.rect.y + this.rect.height
			}
		}
		return false
	};
	t.prototype.onClick = function() {
		if (this.callback) {
			var e = App.game.gameTime;
			if (Math.abs(e - this.lastClickTime) > .3) {
				this.lastClickTime = e;
				this.callback()
			}
		}
	};
	t.prototype.updateRectScale = function() {
		var e = this.sprite.getBounds();
		this.setRect(e.x * this.sprite.scaleX, e.y * this.sprite.scaleY, e.width * this.sprite.scaleX, e.height * this.sprite.scaleY)
	};
	t.CIRCLE_SHAPE = 0;
	t.RECT_SHAPE = 1;
	return t
} (GameObject);
var ButtonObject = function(e) {
	function t(t, n, r, i, s) {
		if (typeof i === "undefined") {
			i = 0
		}
		if (typeof s === "undefined") {
			s = 0
		}
		e.call(this);
		this._baseScale = 1;
		this.callback = n;
		t.x = i;
		t.y = s;
		r.addChild(t);
		this.sprite = t;
		var o = this.sprite.getBounds();
		this.setRect(o.x, o.y, o.width, o.height)
	}
	__extends(t, e);
	Object.defineProperty(t.prototype, "baseScale", {
		set: function(e) {
			this._baseScale = e;
			this.sprite.scaleX = this.sprite.scaleY = e
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.onClick = function() {
		e.prototype.onClick.call(this);
		SoundsManager.instance.playSound("button")
	};
	t.prototype.onShow = function() {};
	t.prototype.onHide = function() {};
	return t
} (ClickableObject);
var AnimatedButtonObject = function(e) {
	function t(t, n, r, i, s) {
		if (typeof i === "undefined") {
			i = 0
		}
		if (typeof s === "undefined") {
			s = 0
		}
		e.call(this, getButtonAnimation(t), n, r, i, s);
		this.playAnimIn = -1;
		this.anim = this.sprite;
		this.anim.stop()
	}
	__extends(t, e);
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		if (this.playAnimIn > 0) {
			this.playAnimIn -= t;
			if (this.playAnimIn <= 0) this.playAnim()
		}
		this.anim.update(t)
	};
	t.prototype.playAnim = function() {
		var e = 30 * lerp(1.3, 1.6, Math.random());
		this.anim.setFrameDelay(1 / e);
		this.playAnimIn = -1;
		this.anim.gotoAndPlay(0)
	};
	t.prototype.onClick = function() {
		e.prototype.onClick.call(this);
		this.playAnim()
	};
	t.prototype.onShow = function() {
		this.playAnimIn = lerp(1 / 60, 6 / 60, Math.random())
	};
	t.prototype.onHide = function() {};
	return t
} (ButtonObject);
var ScaleButton = function(e) {
	function t(t, n, r, i, s) {
		if (typeof i === "undefined") {
			i = 0
		}
		if (typeof s === "undefined") {
			s = 0
		}
		e.call(this, t, n, r, i, s);
		t.regX = t.getBounds().width / 2;
		t.regY = t.getBounds().height / 2
	}
	__extends(t, e);
	t.prototype.onClick = function() {
		e.prototype.onClick.call(this);
		createjs.Tween.get(this.sprite, {
			loop: false
		}).wait(0).to({
			scaleX: this._baseScale * 1.3,
			scaleY: this._baseScale * 1.3
		},
		100, createjs.Ease.cubicOut).wait(0).to({
			scaleX: this._baseScale,
			scaleY: this._baseScale
		},
		100, createjs.Ease.cubicIn)
	};
	return t
} (ButtonObject);
var SoundButton = function(e) {
	function t(t, n, r, i) {
		var s = this;
		e.call(this, t ? createSpriteFromSpritesheet("music_on") : createSpriteFromSpritesheet("sound_on"),
		function(e) {
			s.changeState(e)
		},
		n, r, i);
		this.isMusic = t
	}
	__extends(t, e);
	t.prototype.changeState = function(e) {
		var t = !(this.isMusic ? SoundsManager.instance.isMusicEnabled: SoundsManager.instance.isSoundEnabled);
		this.sprite.gotoAndStop(this.isMusic ? t ? "music_on": "music_off": t ? "sound_on": "sound_off");
		this.isMusic ? SoundsManager.instance.setMusic(t) : SoundsManager.instance.setSound(t)
	};
	t.prototype.onShow = function() {
		e.prototype.onShow.call(this);
		var t = this.isMusic ? SoundsManager.instance.isMusicEnabled: SoundsManager.instance.isSoundEnabled;
		this.sprite.gotoAndStop(this.isMusic ? t ? "music_on": "music_off": t ? "sound_on": "sound_off")
	};
	return t
} (ScaleButton);
var MapButton = function(e) {
	function t(t, n, r, i) {
		e.call(this);
		this.stars = [];
		this.levelNumber = t;
		var s = new createjs.Container;
		i.addChild(s);
		s.x = n;
		s.y = r;
		this.sprite = s;
		var o = App.episode == 2 || App.episode == 0 && t >= 30;
		var u = createSpriteFromSpritesheet(o ? "lvl_button21": "lvl_button11", 2);
		u.regX = 86 - 30;
		u.regY = 95;
		s.addChild(u);
		this.mainSprite = u;
		this.text = new createjs.BitmapText((t + 1).toString(), App.game.atlases[2]);
		this.text.letterSpacing = -15;
		this.text.regX = this.text.getBounds().width / 2;
		this.text.regY = this.text.getBounds().height / 2;
		this.text.rotation = 7.5;
		this.text.x = 12;
		this.text.y = -78 + 27;
		s.addChild(this.text);
		for (var t = 0; t < 3; ++t) {
			u = createSpriteFromSpritesheet("star1");
			u.scaleX = u.scaleY = .61;
			s.addChild(u);
			u.x = t * 30 - 14;
			u.y = 10 - 12;
			this.stars.push(u)
		}
	}
	__extends(t, e);
	t.prototype.updateState = function(e, t, n) {
		var r = this.sprite.localToGlobal(0, 0);
		this.sprite.visible = allLevelsUnlocked || (t || e >= LevelData.OPENED_STATE) && !(r.y > App.ACTUAL_H + 250 || r.y < -250);
		if (this.sprite.visible) {
			var i = App.episode == 2 || App.episode == 0 && this.levelNumber >= 30;
			this.mainSprite.gotoAndStop(e == LevelData.COMPLETED_STATE ? i ? "lvl_button21": "lvl_button11": i ? "lvl_button22": "lvl_button12");
			for (var s = 0; s < 3; ++s) {
				var o = this.stars[s];
				o.gotoAndStop(s < n ? "star2": "star1");
				o.visible = e == LevelData.COMPLETED_STATE
			}
		}
	};
	return t
} (GameObject);
var LogoObject = function(e) {
	function t(t, n, r, i) {
		var s = this;
		e.call(this);
		this.initScale = i;
		var o = App.game.preloader.hasBrandLogo ? new createjs.Bitmap(App.game.preloader.preLoader.getResult("brand logo")) : null;
		if (o) {
			o.scaleX = o.scaleY = i;
			o.x = n;
			o.y = r;
			o.regX = o.getBounds().width / 2;
			o.regY = o.getBounds().height / 2;
			o.mouseEnabled = false;
			t.addChild(o);
			this.sprite = o;
			if (apiInstance && apiInstance.Branding.getLogo().action) this.callback = function() {
				return s.onLogoClick()
			}
		}
	}
	__extends(t, e);
	t.prototype.onLogoClick = function() {
		if (!this.sprite || !this.sprite.visible) return;
		if (apiInstance && apiInstance.Branding.getLogo().action) apiInstance.Branding.getLogo().action();
		createjs.Tween.get(this.sprite, {
			loop: false
		}).wait(0).to({
			scaleX: 1.2 * this.initScale,
			scaleY: 1.2 * this.initScale,
			alpha: 1
		},
		200, createjs.Ease.circOut).wait(0).to({
			scaleX: this.initScale,
			scaleY: this.initScale
		},
		250, createjs.Ease.circIn)
	};
	t.prototype.setVisible = function(e) {
		if (this.sprite) this.sprite.visible = e
	};
	t.prototype.checkClick = function(e, t) {
		if (this.sprite && this.sprite.visible) {
			var n = this.sprite.getBounds();
			var r = this.sprite.localToGlobal(0, 0);
			var i = this.initScale * n.width;
			var s = this.initScale * n.height;
			return e >= r.x && e <= r.x + i && t >= r.y && t <= r.y + s
		}
		return false
	};
	return t
} (ClickableObject);
var MoreGamesButton = function(e) {
	function t(t, n, r, i) {
		var s = this;
		e.call(this);
		this.initScale = i;
		var o = !needMoreGames ? null: App.game.preloader.hasMoreGames ? createSpriteFromSpritesheet("more") : null;
		if (o) {
			o.scaleX = o.scaleY = i;
			o.x = n;
			o.y = r;
			o.regX = o.getBounds().width / 2;
			o.regY = o.getBounds().height / 2;
			o.mouseEnabled = false;
			t.addChild(o);
			if (apiInstance && apiInstance.Branding.getLink("more_games").action) this.callback = function() {
				return s.onLogoClick()
			}
		}
		this.sprite = o
	}
	__extends(t, e);
	t.prototype.onLogoClick = function() {
		if (!this.sprite) return;
		if (apiInstance && apiInstance.Branding.getLink("more_games").action) apiInstance.Branding.getLink("more_games").action();
		createjs.Tween.get(this.sprite, {
			loop: false
		}).wait(0).to({
			scaleX: 1.2 * this.initScale,
			scaleY: 1.2 * this.initScale,
			alpha: 1
		},
		200, createjs.Ease.circOut).wait(0).to({
			scaleX: this.initScale,
			scaleY: this.initScale
		},
		250, createjs.Ease.circIn)
	};
	t.prototype.checkClick = function(e, t) {
		if (this.sprite) {
			var n = this.sprite.getBounds();
			var r = this.sprite.localToGlobal(0, 0);
			var i = this.initScale * n.width;
			var s = this.initScale * n.height;
			return e >= r.x && e <= r.x + i && t >= r.y && t <= r.y + s
		}
		return false
	};
	return t
} (ClickableObject);
var Tutorial = function(e) {
	function t() {
		e.call(this);
		this.pages = [];
		this.currentPage = 0;
		this.currentSequence = [];
		this.sequences = {
			0 : [0, 1, 2, 3],
			"-1": [6, 1, 4]
		};
		this.tapAllowed = false;
		t.instance = this;
		this.pages.push(new FirstGroupTapTutorial, new SecondGroupTapTutorial, new ThirdGroupTapTutorial, new ReachScoreTutorial)
	}
	__extends(t, e);
	t.prototype.hasTutorial = function(e) {
		return this.sequences[e.toString()]
	};
	t.prototype.show = function() {
		var e = this.sequences[Match3Level.instance.levelData.levelNumber.toString()];
		this.currentSequence = [];
		for (var t = 0; t < e.length; ++t) this.currentSequence.push(this.pages[e[t]]);
		this.currentPage = 0;
		this.currentSequence[this.currentPage].show();
		this.isMenuActive = true
	};
	t.prototype.hide = function() {
		this.isMenuActive = false
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.currentSequence[this.currentPage].update(t)
	};
	Object.defineProperty(t.prototype, "page", {
		get: function() {
			return this.currentSequence[this.currentPage]
		},
		enumerable: true,
		configurable: true
	});
	t.prototype.getBonusComboCell = function(e, t) {
		return this.currentPage == 1 && this.currentSequence[this.currentPage] == this.pages[1] && Match3Level.instance.currentMove == 1 ? App.episode <= 1 ? e.x < t.x ? e: t: e.x < t.x ? t: e: null
	};
	t.prototype.checkHighValueCell = function(e) {
		return this.currentPage == 1 && this.currentSequence[this.currentPage] == this.pages[1] && Match3Level.instance.currentMove == 1 && (App.episode <= 1 && e.x == 3 && e.y == 6 || App.episode == 2 && e.x == 6 && e.y == 8)
	};
	t.prototype.getBonusSpawnCell = function() {
		return this.currentPage == 2 && this.currentSequence[this.currentPage] == this.pages[2] ? App.episode <= 1 ? Match3Level.instance.cells[4][5] : Match3Level.instance.cells[2][5] : null
	};
	t.prototype.nextPage = function() {
		this.currentSequence[this.currentPage].hide();
		if (this.currentPage < this.currentSequence.length - 1) {++this.currentPage;
			this.currentSequence[this.currentPage].show()
		} else {
			if (this == MenuManager.instance.current) MenuManager.instance.closeCurrent()
		}
	};
	t.prototype.allowTap = function(e, t) {
		return this.currentSequence[this.currentPage].allowTap(e, t)
	};
	t.prototype.onDown = function(t, n) {
		e.prototype.onDown.call(this, t, n);
		this.tapAllowed = this.allowTap(t, n);
		this.currentSequence[this.currentPage].onDown(t, n)
	};
	return t
} (Menu);
var TutorialHand = function(e) {
	function t(t, n, r, i) {
		e.call(this);
		this.cells = [];
		this.speed = 350;
		this.currentCell = 0;
		this.waitLeft = -1;
		this.alphaFactor = 1;
		for (var s = -1; s <= r.length; ++s) {
			var o = s == -1 ? t: s == r.length ? n: r[s];
			o = Match3Level.gridToStage(o.x, o.y);
			o.y += 25;
			this.cells.push(o)
		}
		var u = createSpriteFromSpritesheet("hand");
		i.addChild(u);
		setReg(u, 5, 15, false);
		u.alpha = 0;
		this.sprite = u
	}
	__extends(t, e);
	t.prototype.startMove = function() {
		this.sprite.x = this.cells[0].x;
		this.sprite.y = this.cells[0].y;
		this.sprite.alpha = 0;
		this.currentCell = 0
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.alphaFactor = limit(this.alphaFactor + (Match3Level.instance && Match3Level.instance.isPressed ? -1 : 1) * t * 5, 0, 1);
		if (this.waitLeft > 0) {
			this.waitLeft -= t;
			return
		}
		var n = this.cells[this.currentCell];
		var r = this.cells[this.currentCell + 1];
		var i = distanceBetweenPointsP(n, r);
		var s = distanceBetweenPoints(this.sprite.x, this.sprite.y, r.x, r.y);
		var o = this.alphaFactor * this.speed * t;
		var u = false;
		if (o > s) {
			this.currentCell++;
			if (this.currentCell == this.cells.length - 1) {
				this.startMove();
				this.waitLeft = .5
			}
			u = true
		}
		if (!u) {
			this.sprite.x += o * (r.x - this.sprite.x) / s;
			this.sprite.y += o * (r.y - this.sprite.y) / s;
			var a = this.currentCell == 0 || this.currentCell == this.cells.length - 2 ? s / i: 1;
			if (this.currentCell == 0) a = 1 - a;
			a *= this.alphaFactor;
			this.sprite.alpha = lerp(0, 1, a)
		}
	};
	return t
} (GameObject);
var TutorialPage = function(e) {
	function t() {
		e.call(this);
		this.tapCells = [];
		this.isHiding = false;
		this.isShowing = false;
		this.showDelay = 0;
		this.hideDelay = 0;
		this.isMatchLocked = false;
		this.tutorial = Tutorial.instance;
		this.baseContainer = new createjs.Container;
		this.sprite = this.baseContainer
	}
	__extends(t, e);
	t.prototype.setInfo = function(e, t, n, r) {
		var i = createSpriteFromSpritesheet("tutorial");
		setReg(i, 0, 0, false);
		i.x = t - 258;
		i.y = n - 98;
		r.addChild(i);
		var s = e.length;
		for (var o = 0; o < s; ++o) {
			var u = new createjs.BitmapText(e[o], App.game.atlases[3]);
			u.letterSpacing = -7;
			u.spaceWidth = 15;
			u.scaleX = u.scaleY = .7;
			u.regX = u.getBounds().width / 2;
			u.x = -90 + t + 0;
			u.y = n - 33 + (o + (s == 2 ? 0 : -.5)) * 27;
			r.addChild(u)
		}
		this.heroAnim = new AnimatedNode(AnimationManager.instance.getAnimation("TutorialWizard_Animation"), 1 / 24, null, 0);
		this.heroAnim.x = t + 171;
		this.heroAnim.y = n + 0;
		r.addChild(this.heroAnim);
		this.heroAnim.play()
	};
	t.prototype.init = function(e) {
		this.heroAnim.x += this.heroAnim.parent.x;
		this.heroAnim.y += this.heroAnim.parent.y;
		removeClip(this.heroAnim);
		e.cache(0, 0, App.SCREEN_W, App.FULL_SCREEN_H);
		this.baseContainer.addChild(e);
		this.baseContainer.addChild(this.heroAnim)
	};
	t.prototype.checkMatch = function(e) {
		if (!this.isMatchLocked) return true;
		var t = 0;
		var n = e.length;
		var r = this.tapCells.length;
		if (n != r || this.isHiding) return false;
		for (var i = 0; i < n; ++i) {
			for (var s = 0; s < r; s++) {
				if (e[i].x == this.tapCells[s].x && e[i].y == this.tapCells[s].y) {++t;
					break
				}
			}
		}
		if (t == n) {
			this.isMatchLocked = true;
			this.tutorial.nextPage();
			return true
		}
		return false
	};
	t.prototype.onDown = function(e, t) {
		if (this.checkHide(e, t)) this.tutorial.nextPage()
	};
	t.prototype.allowTap = function(e, t) {
		if (this.sprite.alpha < .5) return false;
		var n = this.tapCells.length;
		var r = Match3Level.instance.stageToGrid(e, t);
		r.x = Math.floor(r.x);
		r.y = Math.floor(r.y);
		for (var i = 0; i < n; ++i) {
			var s = this.tapCells[i];
			if (s.x == r.x && s.y == r.y) return true
		}
		return false
	};
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		if (this.hand) this.hand.update(t);
		if (this.heroAnim) this.heroAnim.update(t)
	};
	t.prototype.setHand = function(e, t, n) {
		this.hand = new TutorialHand(e, t, n, this.baseContainer)
	};
	t.prototype.checkHide = function(e, t) {
		return ! this.isHiding && !this.isMatchLocked && this.allowTap(e, t)
	};
	t.prototype.hide = function() {
		var e = this;
		if (!this.isHiding) {
			this.isHiding = true;
			createjs.Tween.get(this.sprite, {
				loop: false
			}).wait(this.hideDelay * 1e3).to({
				alpha: 0
			},
			300).call(function() {
				return e.removeSprite()
			})
		}
		for (var t = 0; t < this.level.fieldWidth; ++t) for (var n = 0; n < this.level.fieldHeight; ++n) {
			this.level.cells[t][n].removeTutorialLight()
		}
	};
	t.prototype.show = function() {
		this.isShowing = true;
		this.isHiding = false;
		if (!this.sprite.parent) {
			App.game.stage.addChild(this.sprite);
			this.sprite.y = 0;
			this.sprite.alpha = 0;
			createjs.Tween.get(this.sprite, {
				loop: false
			}).wait(this.showDelay * 1e3).to({
				alpha: 1
			},
			300);
			SoundsManager.instance.playSound("gui_move")
		}
		var e = this.tapCells.length;
		for (var t = 0; t < e; ++t) {
			var n = this.tapCells[t];
			this.level.cells[n.x][n.y].setTutorialLight(t)
		}
		if (this.hand) this.hand.startMove()
	};
	t.prototype.removeSprite = function() {
		removeClip(this.sprite)
	};
	return t
} (GameObject);
var FirstGroupTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(3, 3), cjp(4, 3), cjp(5, 3));
		else this.tapCells.push(cjp(2, 4), cjp(3, 4), cjp(4, 4), cjp(5, 4));
		var t = new createjs.Container;
		var n = createBitmap("tutorial1");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 0;
		n.alpha = .8;
		t.addChild(n);
		this.hideDelay = .45;
		this.showDelay = .2;
		this.setInfo(["a", "b"], 380, App.episode <= 1 ? 260 : 340, t);
		this.init(t);
		if (App.episode <= 1) this.setHand(cjp(2, 3), cjp(6, 3), this.tapCells);
		else this.setHand(cjp(1, 4), cjp(6, 4), this.tapCells);
		this.isMatchLocked = true
	}
	__extends(t, e);
	t.prototype.checkHide = function(e, t) {
		return false
	};
	return t
} (TutorialPage);
var SecondGroupTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(2, 2), cjp(2, 3), cjp(3, 4), cjp(4, 4), cjp(5, 4), cjp(6, 4));
		else this.tapCells.push(cjp(5, 6), cjp(4, 5), cjp(4, 4), cjp(5, 4), cjp(6, 3), cjp(6, 2));
		var t = new createjs.Container;
		var n = createBitmap("tutorial2");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.alpha = .8;
		t.addChild(n);
		this.hideDelay = .15;
		this.showDelay = .9;
		this.setInfo(["c", "d"], App.episode <= 1 ? 350 : 400, App.episode <= 1 ? 630 : 765, t);
		this.init(t);
		if (App.episode <= 1) this.setHand(cjp(2, 1), cjp(7, 4), this.tapCells);
		else this.setHand(cjp(5, 6.5), cjp(6, 1), this.tapCells);
		this.isMatchLocked = true
	}
	__extends(t, e);
	return t
} (TutorialPage);
var ThirdGroupTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(4, 5), cjp(5, 5), cjp(6, 5), cjp(6, 4));
		else this.tapCells.push(cjp(2, 5), cjp(2, 4), cjp(3, 4), cjp(2, 3), cjp(2, 2));
		var t = new createjs.Container;
		var n = createBitmap("tutorial3");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.alpha = .8;
		t.addChild(n);
		this.hideDelay = .15;
		this.showDelay = 1;
		this.setInfo(["e", "c", "d!"], App.episode <= 1 ? 310 : 360, App.episode <= 1 ? 350 : 200, t);
		this.init(t);
		if (App.episode <= 1) this.setHand(cjp(3, 5), cjp(6, 3), this.tapCells);
		else this.setHand(cjp(2, 5.5), cjp(2, 1), this.tapCells);
		this.isMatchLocked = true
	}
	__extends(t, e);
	return t
} (TutorialPage);
var HighValueTapTutorial = function(e) {
	function t() {
		e.call(this);
		var t = new createjs.Container;
		var n = createBitmap("tutorial2");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .8;
		t.addChild(n);
		var r = new createjs.BitmapText("u\nv", App.game.atlases[1]);
		r.scaleX = r.scaleY = .8;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 99 + (App.episode <= 1 ? 0 : 90);
		r.y = 400 + (App.episode <= 1 ? 0 : 50);
		t.addChild(r);
		var r = new createjs.BitmapText("t", App.game.atlases[1]);
		r.scaleX = r.scaleY = .55;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 45;
		r.y = 660;
		t.addChild(r);
		this.hideDelay = 0;
		this.showDelay = 2.5;
		this.init(t)
	}
	__extends(t, e);
	t.prototype.allowTap = function(e, t) {
		return false
	};
	t.prototype.checkHide = function(t, n) {
		return e.prototype.checkHide.call(this, t, n) || this.sprite.alpha > .9
	};
	return t
} (TutorialPage);
var LineTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(3, 7), cjp(4, 7), cjp(5, 7), cjp(6, 7), cjp(7, 7));
		else this.tapCells.push(cjp(6, 2), cjp(6, 3), cjp(6, 4), cjp(6, 5), cjp(6, 6));
		var t = new createjs.Container;
		var n = createBitmap("tutorial3");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .8;
		t.addChild(n);
		var r = new createjs.BitmapText("   w\nx", App.game.atlases[1]);
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 130 + (App.episode <= 1 ? 0 : 55);
		r.y = 340 + 50 + (App.episode <= 1 ? 0 : 85);
		r.scaleX = r.scaleY = .85;
		t.addChild(r);
		this.hideDelay = .15;
		this.showDelay = 2;
		this.init(t)
	}
	__extends(t, e);
	return t
} (TutorialPage);
var BonusTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(0, 3), cjp(1, 3), cjp(2, 3), cjp(0, 2));
		else this.tapCells.push(cjp(0, 3), cjp(0, 4), cjp(0, 4), cjp(1, 3));
		var t = new createjs.Container;
		var n = createBitmap("tutorial4");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .8;
		t.addChild(n);
		var r = new createjs.BitmapText("y", App.game.atlases[1]);
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 35 + (App.episode <= 1 ? 0 : 45);
		r.y = 240 + 90;
		r.scaleX = r.scaleY = .7;
		t.addChild(r);
		this.hideDelay = .15;
		this.showDelay = 1.5;
		this.init(t)
	}
	__extends(t, e);
	return t
} (TutorialPage);
var BonusInfoTutorial = function(e) {
	function t() {
		e.call(this);
		var t = new createjs.Container;
		var n = createBitmap("tutorial5");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .85;
		t.addChild(n);
		var r = new createjs.BitmapText("z\n       #", App.game.atlases[1]);
		r.scaleX = r.scaleY = .85;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 25 - 20;
		r.y = 140 - 30 - 80;
		t.addChild(r);
		var i = -40;
		var s = 0;
		for (var o = 0; o < 3; ++o) {
			var u = .85;
			var a = 250 + o * 90 * u;
			for (var f = 0; f < 4 + o; ++f) {
				var l = createSpriteFromSpritesheet("orange");
				l.scaleX = l.scaleY = u;
				l.x = 100 + (f + (2 - o)) * 60 * l.scaleX + i;
				l.y = a + s;
				t.addChild(l)
			}
			var r = new createjs.BitmapText("-", App.game.atlases[1]);
			r.x = 340 + 100 - 15 - 5 + i;
			r.y = a - 30 + 5 + s;
			t.addChild(r);
			for (var f = 0; f < (o == 0 ? 2 : 1); ++f) {
				var l = createSpriteFromSpritesheet(o == 0 ? f == 0 ? "orange horizontal": "orange vertical": o == 1 ? "orange bomb": "bonus color");
				l.scaleX = l.scaleY = 1;
				l.regX = l.getBounds().width / 2;
				l.regY = l.getBounds().height / 2;
				l.x = 400 + f * 65 + 100 + i;
				l.y = a + 20 + s;
				t.addChild(l)
			}
		}
		var r = new createjs.BitmapText("t", App.game.atlases[1]);
		r.scaleX = r.scaleY = .55;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 45;
		r.y = 660;
		t.addChild(r);
		this.hideDelay = 0;
		this.showDelay = .5;
		this.init(t)
	}
	__extends(t, e);
	t.prototype.allowTap = function(e, t) {
		return false
	};
	t.prototype.checkHide = function(t, n) {
		return e.prototype.checkHide.call(this, t, n) || this.sprite.alpha > .9
	};
	return t
} (TutorialPage);
var ReachScoreTutorial = function(e) {
	function t() {
		e.call(this);
		var t = new createjs.Container;
		var n = createBitmap("tutorial4");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.alpha = .8;
		t.addChild(n);
		var r = LevelManager.instance.data[0].customData;
		var i = new createjs.BitmapText("t", App.game.atlases[1]);
		i.letterSpacing = -5;
		i.spaceWidth = 15;
		i.lineHeight = 60;
		i.x = 95;
		i.y = 760;
		t.addChild(i);
		this.hideDelay = 0;
		this.showDelay = 2.8;
		this.setInfo(["f", "g " + r + " h !", "i " + (LevelManager.instance.data[0].limitLeft - 3) + "j !"], 310, 350, t);
		this.init(t)
	}
	__extends(t, e);
	t.prototype.allowTap = function(e, t) {
		return false
	};
	t.prototype.checkHide = function(t, n) {
		return e.prototype.checkHide.call(this, t, n) || this.sprite.alpha > .9
	};
	return t
} (TutorialPage);
var BonusComboTapTutorial = function(e) {
	function t() {
		e.call(this);
		if (App.episode <= 1) this.tapCells.push(cjp(1, 4), cjp(1, 5), cjp(1, 6), cjp(2, 5), cjp(2, 6), cjp(2, 7), cjp(3, 4), cjp(3, 5), cjp(3, 7), cjp(3, 8), cjp(3, 9), cjp(4, 7), cjp(4, 8));
		else this.tapCells.push(cjp(2, 6), cjp(2, 7), cjp(3, 7), cjp(3, 8), cjp(4, 5), cjp(4, 6), cjp(4, 8), cjp(4, 9), cjp(5, 5), cjp(5, 7), cjp(5, 8), cjp(6, 5), cjp(6, 6), cjp(6, 7));
		var t = new createjs.Container;
		var n = createBitmap("tutorial7");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .8;
		t.addChild(n);
		var r = new createjs.BitmapText("  $\n&!", App.game.atlases[1]);
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 210 + (App.episode <= 1 ? 0 : -90);
		r.y = 340 + 67 + (App.episode <= 1 ? 0 : -110);
		r.scaleX = r.scaleY = .7;
		t.addChild(r);
		this.hideDelay = .15;
		this.showDelay = .5;
		this.init(t)
	}
	__extends(t, e);
	return t
} (TutorialPage);
var ComboInfoTutorial = function(e) {
	function t() {
		e.call(this);
		var t = new createjs.Container;
		var n = createBitmap("tutorial5");
		n.scaleX = n.scaleY = 4;
		n.regX = 0;
		n.x = 0;
		n.y = 3 - 9;
		n.alpha = .85;
		t.addChild(n);
		var r = new createjs.BitmapText(" $\n&!", App.game.atlases[1]);
		r.scaleX = r.scaleY = .95;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 40;
		r.y = 140 - 30 - 80;
		t.addChild(r);
		var i = -40;
		var s = 0;
		for (var o = 0; o < 4; ++o) {
			for (var u = 0; u < o + 4; ++u) {
				var a = Math.random() < .25;
				var f = getInt(3);
				var l = createSpriteFromSpritesheet(a ? f == 0 ? "blue horizontal": f == 1 ? "blue vertical": "blue bomb": "blue");
				l.x = 140 + u * 60;
				l.y = 250 + o * 60;
				t.addChild(l)
			}
		}
		var r = new createjs.BitmapText("t", App.game.atlases[1]);
		r.scaleX = r.scaleY = .55;
		r.letterSpacing = -10;
		r.spaceWidth = 25;
		r.lineHeight = 60;
		r.x = 45;
		r.y = 660;
		t.addChild(r);
		this.hideDelay = 0;
		this.showDelay = 2.5;
		this.init(t)
	}
	__extends(t, e);
	t.prototype.allowTap = function(e, t) {
		return false
	};
	t.prototype.checkHide = function(t, n) {
		return e.prototype.checkHide.call(this, t, n) || this.sprite.alpha > .9
	};
	return t
} (TutorialPage);
var GemNode = function() {
	function e() {}
	e.prototype.cut = function() {
		this.next = null;
		this.prev = null;
		this.cell = null
	};
	e.prototype.isEmpty = function() {
		return this.cell == null
	};
	return e
} ();
var GemList = function() {
	function e() {
		this.length = 0;
		this.head = new GemNode;
		this.tail = this.head
	}
	e.prototype.isEmpty = function() {
		return this.head.cell == null
	};
	e.prototype.cut = function() {
		this.head.cut();
		this.tail = this.head;
		this.length = 0
	};
	e.prototype.recalcLen = function() {
		this.length = 0;
		for (var e = this.head; e; e = e.next) {
			if (e.cell) this.length++
		}
	};
	e.prototype.add = function(e) {
		this.length++;
		if (this.head.isEmpty()) {
			this.head.cell = e
		} else {
			var t = new GemNode;
			t.cell = e;
			if (this.head == this.tail) {
				this.head.next = t;
				t.prev = this.head
			} else {
				this.tail.next = t;
				t.prev = this.tail
			}
			this.tail = t
		}
	};
	return e
} ();
var GemChain = function(e) {
	function t() {
		e.call(this);
		this.links = [];
		this.crosses = [];
		this.isLocked = false;
		this.list = new GemList;
		var t = "chain_" + FieldObject.assetNames[0];
		for (var n = 0; n < 50; n++) {
			var r = createSpriteFromSpritesheet(t);
			r.stop();
			r.framerate = 24;
			this.links.push(r)
		}
	}
	__extends(t, e);
	t.prototype.updateBonusChain = function() {
		var e = [];
		var t = [];
		var n = null;
		var r = null;
		for (var i = this.list.head; i != null; i = i.next) {
			if (i.cell && !i.cell.isDestroyed && i.cell.object) {
				if (i.cell.object.isBonus) {
					e.push(i.cell);
					n = i.cell
				}
				i.cell.object.comboSelectBonus = i.cell.object.bonusType;
				r = i.cell
			}
		}
		var s = e.length;
		for (var o = 0; o < s; ++o) {
			a = e[o];
			if (a == n && n != r) {
				n.object.comboSelectBonus = 0;
				r.object.comboSelectBonus = n.object.bonusType;
				t.push(e[o]);
				e[o] = r
			}
		}
		var u = 0;
		while (u < e.length) {
			var a = e[u];
			var f = a.object.comboSelectBonus == 1;
			for (var l = f ? 0 : a.x; l < (f ? this.level.fieldWidth: a.x + 1); ++l) for (var c = f ? a.y: 0; c < (f ? a.y + 1 : this.level.fieldHeight); ++c) {
				var h = this.level.cells[l][c];
				if (h && h.object && h.object.isBonus && e.indexOf(h) == -1 && t.indexOf(h) == -1) {
					e.push(h);
					var p = h.object.comboSelectBonus == 1;
					h.object.comboSelectBonus = f && p ? 2 : !f && !p ? 1 : h.object.comboSelectBonus;
					h.object.tempSelect()
				}
			}++u
		}
	};
	t.prototype.clearChain = function() {
		var e = this.getAvgPos();
		this.update(0);
		this.isLocked = true;
		this.lastEndPoint = this.list.tail.cell.pos;
		var t = false;
		var n = 1;
		var r = 0;
		var i = .01;
		this.list.recalcLen();
		var s = null;
		var o = [];
		for (var u = this.list.head; u != null; u = u.next) {
			if (u.cell && !u.cell.isDestroyed) {++r;
				n += 3;
				s = u.cell;
				o.push(u.cell)
			}
		}
		this.level.clearChain(o);
		this.reset()
	};
	t.prototype.reset = function() {
		for (var e = this.list.head; e != null; e = e.next) {
			if (e.cell && e.cell.object) e.cell.object.unselect()
		}
		this.list.cut();
		this.updateBonusChain();
		this.update(0)
	};
	t.prototype.type = function() {
		var e = this.list.head;
		while (e) {
			if (e.cell) return e.cell.object.colorType;
			e = e.next
		}
		return - 1
	};
	t.prototype.onRollOver = function(e) {
		var t = this.getNodeByCell(e);
		if (t) {
			if (t.next && !(t.next.next && t.next.next.next) && this.length() > 1) {
				for (var n = t.next; n != null; n = n.next) n.cell.object.unselect(true);
				t.next = null;
				this.list.tail = t;
				this.list.recalcLen()
			}
		} else {
			var r = this.type();
			if (this.list.isEmpty() || (this.type() == e.object.colorType || r == -2) && Math.abs(this.list.tail.cell.x - e.x) <= 1 && Math.abs(this.list.tail.cell.y - e.y) <= 1) {
				this.list.add(e);
				e.object.select()
			}
		}
	};
	t.prototype.length = function() {
		return this.list.length
	};
	t.prototype.getNodeByCell = function(e) {
		for (var t = this.list.head; t != null; t = t.next) {
			if (t.cell == e) return t
		}
		return null
	};
	t.prototype.getAvgPos = function() {
		var e = 0;
		var t = new createjs.Point;
		var n = this.list.head;
		while (n) {
			if (n.cell && !n.cell.isDestroyed) {
				e++
			}
			n = n.next
		}
		t.x = Math.floor(t.x / e);
		t.y = Math.floor(t.y / e);
		return t
	};
	t.prototype.update = function(n) {
		e.prototype.update.call(this, n);
		if (this.isLocked) return;
		var r = 0;
		var i = 0;
		var s = null;
		var o = 0;
		for (var u = this.list.head; u != null; u = u.next) {
			if (u.cell) {
				if (u.cell.isDestroyed) {
					this.reset();
					return
				}
				var a = "chain_" + FieldObject.assetNames[u.cell.object.colorType];
				this.lastAnimName = a;
				u.cell.object.select();
				if (s) {
					var f = this.links[r];
					if (!f.parent) {
						this.level.downChainLayer.addChild(f);
						f.gotoAndPlay(a)
					}
					f.x = (s.pos.x + u.cell.pos.x) / 2;
					f.y = (s.pos.y + u.cell.pos.y) / 2;
					f.regX = f.getBounds().width / 2;
					f.regY = f.getBounds().height / 2;
					f.rotation = angleBetween(s.object.sprite.x, s.object.sprite.y + o, u.cell.object.sprite.x, u.cell.object.sprite.y + o) / DEG_TO_RAD;
					var l = distanceBetweenPoints(s.pos.x, s.pos.y, u.cell.pos.x, u.cell.pos.y) / t.CHAIN_WIDTH;
					f.scaleX = l;
					r++;
					i++
				}
				if (u.next == null) {
					i++
				}
				s = u.cell
			}
		}
		var c = this.links.length;
		for (; r < c; r++) if (!this.links[r].parent) break;
		else removeClip(this.links[r]);
		c = this.crosses.length
	};
	t.prototype.destroy = function() {
		if (this.isDestroyed) return;
		this.list.cut();
		this.list = null;
		for (var t = 0; t < this.links.length; ++t) removeClip(this.links[t]);
		this.links = null;
		for (var t = 0; t < this.crosses.length; ++t) removeClip(this.crosses[t]);
		this.crosses = null;
		e.prototype.destroy.call(this)
	};
	t.CHAIN_WIDTH = 100;
	return t
} (GameObject);
var Hero = function(e) {
	function t() {
		e.call(this);
		this.needToPlayLight = false;
		this.removeLinksIn = -1;
		this.anim = new AnimatedNode(App.game.animationManager.getAnimation("wizard"), 1 / 24, null, 1);
		Match3Level.instance.hud.sprite.addChild(this.anim);
		this.anim.addAction(59, 1, 0);
		this.anim.addAction(72, 1, 0);
		this.anim.addAction(61, 0, 0);
		this.anim.x = App.SCREEN_W / 2;
		this.anim.y = 712 + 20;
		this.sprite = this.anim
	}
	__extends(t, e);
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		this.anim.update(t);
		if (this.needToPlayLight) {
			var n = this.anim.currentFrame;
			if (n < 60 || n >= 61) {
				this.needToPlayLight = false;
				this.removeLinksIn = .3;
				var r = this.level.gemChain.links;
				var i = r.length;
				for (var s = 0; s < i; ++s) {
					var o = r[s];
					if (o.parent) {
						removeClip(o);
						this.level.topChainLayer.addChild(o)
					} else break
				}
				var u = cjp(this.sprite.x - 29, this.sprite.y - 66);
				var a = this.level.gemChain.lastEndPoint;
				var f = cjp(0, 0);
				var l = cjp(0, 0);
				var c = distanceBetweenPoints(u.x, u.y, a.x, a.y);
				var h = Math.max(1, Math.round(c / GemChain.CHAIN_WIDTH));
				var p = h * GemChain.CHAIN_WIDTH;
				var d = c / p;
				var v = angleBetween(u.x, u.y, a.x, a.y) / DEG_TO_RAD;
				for (var m = 0; m < h; m++) {
					o = r[s]; ++s;
					o.scaleX = d;
					o.gotoAndPlay(this.level.gemChain.lastAnimName);
					o.rotation = v;
					o.regX = o.getBounds().width / 2;
					o.regY = o.getBounds().height / 2;
					this.level.topChainLayer.addChild(o);
					linePoint(u, a, m / h, f);
					linePoint(u, a, (m + 1) / h, l);
					o.x = (f.x + l.x) / 2;
					o.y = (f.y + l.y) / 2
				}
			}
		} else if (this.removeLinksIn > 0) {
			this.removeLinksIn -= t;
			if (this.removeLinksIn <= 0) {
				this.level.gemChain.isLocked = false;
				this.level.gemChain.update(0);
				this.anim.gotoAndPlay(62)
			}
		}
		this.anim.getPart(0).x = -3
	};
	t.prototype.attack = function(e) {
		this.anim.gotoAndPlay(60);
		this.needToPlayLight = true;
		this.removeLinksIn = e;
		this.update(0)
	};
	return t
} (GameObject);
var BlockDestroyAnimation = function(e) {
	function t(t, n) {
		e.call(this);
		this.particles = [];
		this.speeds = [];
		this.angularSpeeds = [];
		for (var r = 1; r <= 3; ++r) {
			var i = createSpriteFromSpritesheet("block_particle" + r);
			i.regX = i.getBounds().width / 2;
			i.regY = i.getBounds().height / 2;
			i.x = t + (r == 1 ? 20 : r == 2 ? -11 : -17);
			i.y = n + (r == 1 ? 1 : r == 2 ? -18 : 10);
			this.particles.push(i);
			this.level.blockLayer.addChild(i);
			var s = cjp(0, -70 * lerp(10, 20, Math.random()));
			rotatePoint(s, lerp( - 35, 35, Math.random()));
			this.speeds.push(s);
			this.angularSpeeds.push(lerp( - 60, 60, Math.random()))
		}
	}
	__extends(t, e);
	t.prototype.update = function(t) {
		e.prototype.update.call(this, t);
		var n = 0;
		var r = this.particles.length;
		for (var i = 0; i < r; ++i) {
			var s = this.speeds[i];
			s.y += 4e3 * t;
			var o = this.particles[i];
			o.y += s.y * t;
			o.x += s.x * t;
			o.visible = o.y < App.FULL_SCREEN_H;
			if (o.visible) n += 1;
			o.rotation += this.angularSpeeds[i] * t
		}
		if (n == 0) this.destroy()
	};
	t.prototype.destroy = function() {
		e.prototype.destroy.call(this);
		if (this.particles) {
			for (var t = 0; t < this.particles.length; ++t) removeClip(this.particles[t]);
			this.particles = null;
			this.speeds = null;
			this.angularSpeeds = null
		}
	};
	return t
} (GameObject);
var ShieldRemoveSprite = function(e) {
	function t() {
		e.call(this);
		var t = createSpriteFromSpritesheet("monster_shell");
		setReg(t, .5, .5);
		this.sprite = t
	}
	__extends(t, e);
	t.prototype.init = function(e, n, r) {
		var i = this;
		Match3Level.instance.bonusIndicatorLayer.addChild(this.sprite);
		createjs.Tween.removeTweens(this.sprite);
		this.sprite.alpha = this.sprite.scaleX = this.sprite.scaleY = 1;
		this.sprite.x = e + t.data[r][0];
		this.sprite.y = n + t.data[r][1];
		this.sprite.scaleX = t.data[r][2];
		this.sprite.scaleY = t.data[r][3];
		createjs.Tween.get(this.sprite, {
			loop: false
		}).to({
			scaleY: 1.3,
			scaleX: 1.3,
			alpha: 0
		},
		300, createjs.Ease.cubicOut).call(function() {
			return i.killShield()
		})
	};
	t.prototype.killShield = function() {
		if (this.sprite.parent) {
			removeClip(this.sprite);
			createjs.Tween.removeTweens(this.sprite);
			Match3Level.pool.returnShield(this)
		}
	};
	t.prototype.destroy = function() {
		this.killShield()
	};
	t.data = [[0, -6, 1, 1, 43, 53], [0, -6, 1, 1, 43, 53], [0, -6, 1, 1, 43, 53], [0, -6, 1, 1, 43, 53], [ - 4, -6, 1.05, 1.07, 48, 56]];
	return t
} (GameObject);
var ColorBlockDestroyAnimation = function(e) {
	function t() {
		e.call(this);
		var t = createSpriteFromSpritesheet("cage");
		setReg(t, .5, .5);
		this.sprite = t
	}
	__extends(t, e);
	t.prototype.init = function(e, t, n) {
		var r = this;
		Match3Level.instance.bonusIndicatorLayer.addChild(this.sprite);
		createjs.Tween.removeTweens(this.sprite);
		this.sprite.alpha = this.sprite.scaleX = this.sprite.scaleY = 1;
		this.sprite.x = e + ShieldRemoveSprite.data[n][0];
		this.sprite.y = t + ShieldRemoveSprite.data[n][1];
		this.sprite.scaleX = ShieldRemoveSprite.data[n][2];
		this.sprite.scaleY = ShieldRemoveSprite.data[n][3];
		createjs.Tween.get(this.sprite, {
			loop: false
		}).to({
			scaleY: 1.3,
			scaleX: 1.3,
			alpha: 0
		},
		300, createjs.Ease.cubicOut).call(function() {
			return r.killShield()
		})
	};
	t.prototype.killShield = function() {
		if (this.sprite.parent) {
			removeClip(this.sprite);
			createjs.Tween.removeTweens(this.sprite);
			Match3Level.pool.returnCage(this)
		}
	};
	t.prototype.destroy = function() {
		this.killShield()
	};
	t.data = [[0, -6, 1, 1, 43, 55], [0, -6, 1, 1, 43, 55], [0, -6, 1, 1, 43, 55], [0, -6, 1, 1, 43, 55], [ - 4, -6, 1.05, 1.07, 49, 59]];
	return t
} (GameObject);
var viewporter;
window.onload = function() {
	var e = new App
}