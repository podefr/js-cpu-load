A simple tool for measuring the CPU load
-----------------------------------------

A simple tool that will start a timer that ticks every 15 ms by default. Everytime it ticks, the current timestamp is saved in an array.
When you stop the timer, you can get a report that tells how many time the timer ticked, and when. If the JS runtime was overloaded at the same time, some ticks will be lost are will splipped.

Note that the accuarcy of the measure is very poor, so it's worth repeating the measure several times and to compare it to a base measure. Even without doing anything, 5% of the ticks will be missed.

```bash
npm install js-cpu-load
```

##Initialising the tool

```js
var Measure = require("js-cpu-load");

// By default, the timer will be set to 15 ms
var measure = new Measure();

// It can be configured
var measure = new Measure(30); // 30 ms
```

##Using the tool

```js
// Start timer
measure.start();

// Stop timer
measure.stop();

// Report measure
measure.report();

// Reset timer, before starting it again
measure.reset();

// Get only the collected data
measure.dump();

// Change the timer
measure.setInterval(30); // 30 ms
```

##The actual measure

```js
measure.report();
```

returns:

	data {Array} array of timestamps
	dataFromStart {Array} timestamps relative to the start time
	startTime {Number} timestamp when the measure started
	stopTime {Number} timestamp when the measure stopped
	count {Number} the number of ticks
	expectedCount {Number} the theoretical number of count


