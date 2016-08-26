// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function(num1, num2){
	return num1 * num2;
};

var invokeMultiply = multiply(5, 7);
console.log("Testing multiply. We expect Kevin Durants number:", invokeMultiply);

// whatForLunch
var whatForLunch = function(name, food){
	return name + " had " + food + " for lunch today"
};

var invokeWhatForLunch = whatForLunch("Nathan", "pasta");
console.log("Testing whatForLunch:", invokeWhatForLunch);

// isLargerThan100
var isLargerThan100 = function(num){
	if(num > 100){
		return num + " is larger than 100!";
	}
	else{
		return num + " is not larger than 100 :(."
	}
};

var isTrue = isLargerThan100(101);
var isFalse = isLargerThan100(99);

console.log("Testing isLargerThan100. We expect true:", isTrue);
console.log("Testing isLargerThan100. We expect false:", isFalse);

// anyEvens
var anyEvens = function(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			return true;
		}
		else{
			return false;
		}
	}
};

var myArrOne = [30, 11, 35, 23, 9];
var myArrTwo = [3, 5, 7, 9];

console.log("Testing anyEvens. We expect true:", anyEvens(myArrOne))
console.log("Testing anyEvens. We expect false:", anyEvens(myArrTwo))

// printDataType
var printDataType = function(collection){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			console.log(collection[i]);
			if (Array.isArray(collection[i])){
				console.log("I am an array");
			}
			else if (typeof collection[i] === "function"){
				console.log("I am a function");
			}
			else{
				console.log("I am a " + typeof collection[i])
			}
		}
	}
	else if(typeof collection === "object"){
		for(var key in collection){
			console.log(collection[key])
			console.log("I am a " + typeof collection[key])
		}
	}
	else{
		console.log("I do not know what you are! What are you?")
	}
};

var emptyFunction = function(){};
var testArr = [[1, 2, 3], emptyFunction, [3, 2, 1], "string", 13];
var testObj = {};
	testObj.booleanOne = true;
	testObj.numberOne = 30;
	testObj.stringOne = "string";
	testObj.stringTwo = "another string";
	testObj.numberTwo = 11;
	testObj.booleanTwo = false;

printDataType(testArr);
// expect it to log array > function > array. the string and number are passed over through the interation and nothing is printed to the console.
printDataType(testObj);
// expect it to log boolean > number > string > string > number > boolean.

// isDivisibleBy
var isDivisibleBy = function(num1, num2){
	if(num1 % num2 === 0){
		return true;
	}
	else{
		return false;
	}
};

var isDivisible = isDivisibleBy(100, 2);
var isNotDivisible = isDivisibleBy(99, 2);
console.log("Testing isDivisibleBy. We expect true:", isDivisible);
console.log("Testing isDivisibleBy. We expect false:", isNotDivisible);

// fizzBuzz
var fizzBuzz = function(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 3 === 0 && arr[i] % 5 ===0){
			console.log("FizzBuzz");
		}
		else if(arr[i] % 3 === 0){
			console.log("Fizz");
		}
		else if(arr[i] % 5 === 0){
			console.log("Buzz");
		}
	}
};

var fizzBuzzArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30];
fizzBuzz(fizzBuzzArr);