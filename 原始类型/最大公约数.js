/*GCD greatest common divisor

设计一个算法来计算两个数的最大公约数，不用到乘法，除法和模运算符*/
/*奇数和偶数相乘必为偶数，奇数和奇数相乘必为奇数。*/
/*聪明的解法*/
/*brutal-force的方法就是一个一个试*/

function gcd (m,n) {
	if(m==n){
		return m;
	}
	if(m>=n){
		return gcd(m-n,n);
	}else{
		return gcd(m,n-m);
	}

	// body...
}