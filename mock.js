module.exports = class Mock {

    constructor() {
    	this.name = "MOCK";
		this.type = "sensor";

		this.valueNames  = ["value"];
		this.valueTypes  = ["float"];
		this.values      = [0];
 		this.callbacks   = [];
 		this.tooSoon     = false;
 		this.constructed = false;
 
        this.active = true;
        this.constructed = true;

        this._minRange = 0;
        this._maxRange = 99;

        // generate a new random number now and every 10 seconds
        this._generateRandomValue();
        setInterval((this._generateRandomValue).bind(this), 10000);
    }

    _generateRandomValue() {
    	this.values[0] = Math.round((Math.random() * (this._maxRange - this._minRange) + this._minRange) * 10)/10;

    	// call the callback if we've got one
		if (typeof this.callbacks[0] === 'function') {
			this.callbacks[0](null, this.values[0]);
		}
    }

    deviceName() {
    	return this.name;
	}

	deviceType() {
		return this.type;
	}

	deviceVersion() {
		return "1.0.0";
	}

	deviceNumValues() {
		return this.valueNames.length;
	}

	typeAtIndex(index) {
		if ((index < 0) || (index > this.valueTypes.length)) {
        	return "none";
    	}
    	else {
			return this.valueTypes[index];
		}
	}

	nameAtIndex(index) {
		if ((index < 0) || (index > this.valueNames.length)) {
        	return "none";
    	}
    	else {
			return this.valueNames[index];
		}
	}

	deviceActive() {
		return this.active;
	}

	valueAtIndexSync(index) {
		if ((index < 0) || (index > this.values.length)) {
        	return "none";
    	}
    	else {
			return this.values[index];
		}
	}

	valueAtIndex(index, callback) {
		var err = null;
		var val = 0;

		if ((index < 0) || (index > this.values.length)) {
			err = "Value Index Out Of Range";
		}
		else {
			val = this.values[index];
		}

		callback(err, val);
	}

	watchValueAtIndex(index, callback) {
		this.callbacks[index] = callback;
	}

	resetValueAtIndex(index) {
		if (this.values[index] !== 'undefined') {
			this.values[index] = 0;
		}
    }
    
}








