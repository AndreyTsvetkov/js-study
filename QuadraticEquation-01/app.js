var check11 = function(x1, a, b, c) {
		return a*(x1**2)+(b*x1)+1*c
	};
	var check1 = check11(x1, a, b, c);

var check21 = function(x2, a, b, c) {
		return a*(x2**2)+(b*x2)+1*c
	};
	var check2 = check21(x2, a, b, c);
var check31 = function(x3, a, b, c) {
		return a*(x3**2)+(b*x3)+1*c
	};
	var check3 = check31(x3, a, b, c);
var d3 = function(d) {
		return d**(1/2)};
var d1 = function(argument1,argument2) {
	return argument1 + argument2
	};
		var a = window.prompt('чему равен коэффициент а');
		parseInt (a);
		console.log('первый коэффициент равен ' + a);
		var b = window.prompt('чему равен коэффициент b');
		console.log('второй коэффициент равен ' + b);
		var c = window.prompt('чему равен коэффициент c');
		console.log('третий коэффициент равен ' + c);
		var argument1 = 1*b*b;
		var argument2 = (-4)*a*c;
		
	var d = d1(argument1, argument2);
	console.log('дискриминант равен ' + d);
	var d2 = d3(d);
		if (d>0) {
		var x11 = function(a, b, d2) {
			return ((-1)*b + d2)/(2*a)
		};
		var x1 = x11(a, b, d2);
		var x21 = function(a, b, d2) {
			return ((-1)*b - d2)/(2*a)
		};
		var x2 = x21(a, b, d2);
		console.log('уравнение имеет два корня: ' + x1 + ' и ' + x2);
		console.log('проверка первого корня, получается ли ноль?', + check1);
		console.log('проверка второго корня, получается ли ноль?', + check2);	
	}
	else if (d===0) {
		var x31 = function(a, b) {
			return ((-1)*b)/(2*a)
		};
		var x3 = x31(a, b);
		console.log('уравнение имеет одно решение: ' + x3);
		console.log('проверка корня, получается ли ноль?', + check3);	
	}
	else {
		console.log('нет решений')
	};
