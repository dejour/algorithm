/*嵌入式系统里的处理器没有硬件相乘。要处理相乘的程序必须自己处理。
写一个两个无符号整数相乘的函数，允许使用的操作符是赋予和bit操作符，
你可以使用循环，条件和你自己写的函数。*/

function add_no_operator (a,b) {
	var sum=0;
	var carryin=0;
	var carryout;
	var k=1;
	var ak;
	var bk;

	while(k){
		ak=a&k;
		bk=b&k;
		//每位相加后的进位
		carryout=(ak&bk)|(ak&carryin)|(bk&carryin);
		sum|=(ak^bk^carryin);
		//当前位相加时还要考虑后面位的进位
		carryin=carryout<<1;
		k<<=1;
	}

	return sum;
	// body...
}

function multiply_no_operator (x,y) {
	var sum=0;
	var k=1;
	var scaled_y=y;
	while(k){
		if(x&k){
			sum=add_no_operator(sum,scaled_y);
		}
		k<<=1;
		scaled_y<==1;
	}
	return sum;
}

