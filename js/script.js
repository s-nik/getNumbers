(function(){
	'use strict'
	var a = prompt('Enter "a"');
	var b = prompt('Enter "b"');
	var numbers = [];
	function getNumbers(x1,x2) {
		for(var i = x1; i <= x2; i++) {
			var number = i;
			console.log('number ', number)
			for(var j = 2; j < number; j++) {
				var remainder = number % j;
				if (remainder === 0) {
					break;
				} else if (j === number-1){
					numbers.push(number);
					console.log('2');
				}
			}
		}
	return numbers;
	}

	if (a === null || b === null) {
		alert('Cancel');
	} else {
		!isNaN(a) && !isNaN(b) ? document.write('<h1>' + (a < b ? getNumbers(a,b) : getNumbers(b,a)) + '</h1>') : alert('Error');
	}
	
})()