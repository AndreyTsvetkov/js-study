var a = parseFloat(window.prompt('чему равен коэффициент а'));
console.log('первый коэффициент равен ' + a);
var b = parseFloat(window.prompt('чему равен коэффициент b'));
console.log('второй коэффициент равен ' + b);
var c = parseFloat(window.prompt('чему равен коэффициент c'));
console.log('третий коэффициент равен ' + c);
		
function calcDiscr(first, second, third) {
	return 1*second**2 - 4*first*third;
}

var discr = calcDiscr(a, b, c); 
console.log('дискриминант равен ' + discr);
var sqrtOfDiscr = discr ** (1/2);

if (discr > 0) {
	var x1 = ((-1)*b + sqrtOfDiscr)/(2*a);
	var x2 = ((-1)*b - sqrtOfDiscr)/(2*a);
	var check1 = a*(x1**2)+(b*x1)+1*c;
	var check2 = a*(x2**2)+(b*x2)+1*c;
	console.log('уравнение имеет два корня: ' + x1 + ' и ' + x2);
	console.log('проверка первого корня, получается ли ноль? ' + check1);
	console.log('проверка второго корня, получается ли ноль? ' + check2);
}
else if (discr === 0) {
	var x3 = ((-1)*b)/(2*a);
	var check3 = a*(x3**2)+(b*x3)+1*c;
	console.log('уравнение имеет одно решение: ' + x3);
	console.log('проверка корня, получается ли ноль? ' + check3);
}
else {
	console.log('нет решений');
};

