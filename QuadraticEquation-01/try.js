function solve(first, second, third) {
	var discr = 1*second**2 - 4*first*third;
	var sqrtOfDiscr = discr ** (1/2);

	if (discr > 0) {
		var x1 = ((-1)*second + sqrtOfDiscr)/(2*first);
		var x2 = ((-1)*second - sqrtOfDiscr)/(2*first);
		return [x1, x2]
	}
	else if (discr === 0) {
		var x3 = ((-1)*second)/(2*first);
		return [x3]
	}
	else {
		return 'нет решений'
			};
};

var a = parseFloat(window.prompt('чему равен коэффициент а'));
var b = parseFloat(window.prompt('чему равен коэффициент b'));
var c = parseFloat(window.prompt('чему равен коэффициент c'));
var resultList = solve(a, b, c);
if (resultList.lenght = 2) {
	console.log(resultList);
}
else if (resultList.lenght = 1) {
	console.log(resultList);
}
else {
	console.log(resultList);	
} 
