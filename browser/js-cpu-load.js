require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"js-cpu-load":[function(require,module,exports){
module.exports=require('J+a4Rj');
},{}],"J+a4Rj":[function(require,module,exports){
module.exports = function Measure($interval) {

	var _data = [],
		_interval = $interval || 15,
		_startTime = 0,
		_stopTime = 0,
		_handle;

	function getTime() {
		return (new Date).getTime();
	}

	this.start = function start() {
		_startTime = getTime();
		_handle = setInterval(this._onTick.bind(this), _interval);
	};

	this.stop = function stop() {
		_stopTime = getTime();
		clearInterval(_handle);
	};

	this.report = function report() {
		return {
			data: _data,
			dataFromStart: this.getDataFromStart(),
			startTime: _startTime,
			stopTime: _stopTime,
			count: this.count(),
			expectedCount: this.getExpectedCount()
		}
	};

	this.reset = function reset() {
		_data = [];
		_startTime = 0;
		_stopTime = 0;
	};

	this.count = function count() {
		return _data.length;
	};

	this.getExpectedCount = function expectedCount() {
		return Math.floor((_stopTime - _startTime) / _interval);
	};

	this.getDataFromStart = function getDataFromStart() {
		return _data.map(function (value) {
			return value - _startTime;
		});
	};

	this.dump = function dump() {
		return _data;
	};

	this.setInterval = function setInterval(interval) {
		_interval = interval;
	};

	this._onTick = function _onTick() {
		var time = getTime();
		_data.push(time);
	};

};

},{}]},{},[])
;