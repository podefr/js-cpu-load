function Measure($interval) {

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

module.exports = Measure;
