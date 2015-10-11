/*prime number
自然数比一大，除了1和它本身没有约数*/

/*写一个函数接收一个正整数n>=2,返回所有在1和n之间的质数。*/

function prime (n) {
	var j=1;
	while(j<=n){
		var count=0;
		for (var i = 1; i <=j; i++) {
			if(j%i===0){
				count++;
			}
		}
		if(count===2){
			console.log(j);
		};
		j++;
	}
	// body...
}