##Node class module for Mock Sensor

#####This class module should work on any Linux platform, and has been thoroughly tested on BBB

###Install

```
npm install @agilatech/mock
```
OR
```
git clone https://github.com/Agilatech/mock.git
```

###Usage
#####Load the module and create an instance
```
const driver = require('@agilatech/mock');

// create an instance 
const mock = new driver();
```
#####Get basic device info
```
const name = mock.deviceName();  // returns string with name of device
const type = mock.deviceType();  // returns string with type of device
const version = mock.deviceVersion(); // returns this software version
const active = mock.deviceActive(); // true if active, false if inactive
const numVals =  mock.deviceNumValues(); // returns the number of paramters sensed
```
####Get parameter info and values
```
// given a parameter index, these return parameter info
const paramName0 = mock.nameAtIndex(0);
const paramType0 = mock.typeAtIndex(0);
const paramVal0  = mock.valueAtIndexSync(0);
```
####Asynchronous value collection is also available
```
//valueAtIndex(index, callback)
mock.valueAtIndex(0, function(err, val) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`Asynchronous call return: ${val}`);
    }
});
```
####Watch for value changes
```
// watchValueAtIndex(index, callback)
mock.watchValueAtIndex(0, function(err, val) {
	if (!err) {
		console.log("Mock value is now : " + val);
	}
});
```
####Reset the value to 0
```
//resetValueAtIndex(index)
mock.resetValueAtIndex(0);
```

###Operation Notes
This class module is a mock sensor driver.  It is intended for testing purposes, as well as serving as a template for real drivers.  It simply generates random float numbers between 0 and 100.  It is intended for use with the Agilatech VersaLink IIoT system, but has a simple and generic enough API to be used by most anything.


###Copyright
Copyright © 2017 Agilatech. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

