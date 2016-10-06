function solution(first, second, third) {
	var discr = 1*second**2 - 4*first*third;
	var sqrtOfDiscr = discr ** (1/2);

	if (discr > 0) {
		var x1 = ((-1)*second + sqrtOfDiscr)/(2*first);
		var x2 = ((-1)*second - sqrtOfDiscr)/(2*first);
	}
	else if (discr === 0) {
		var x3 = ((-1)*second)/(2*first);
	}
	else {
	
	};
	return [x1, x2, x3];
};

var a = parseFloat(window.prompt('чему равен коэффициент а'));
var b = parseFloat(window.prompt('чему равен коэффициент b'));
var c = parseFloat(window.prompt('чему равен коэффициент c'));
var resultList = solution(a, b, c)
console.log(resultList);
