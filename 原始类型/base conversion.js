/*在十进制系统中，数字的位置用来标识此数字用以相乘的
10的power。十进制体系是位置数字体系的一个例子。相同的符号用于不同的
量级（如个位，十位，百位）*/


/*写一个函数进行base conversion。具体而言，输入是整数base b1
，字符串s，表示基于b1的整数x，还有整数基数b2，输出是基于b2的
整数x，假设2<=b1,b2<<16.用“A”表示10，"B"表示11.
*/

function convert_base (s,b1,b2) {
	var neg=s[0]==='-';
	var x=0;
	var arr=[];
	var str='';
	for (var i = (neg===true?1:0); i <s.length; i++) {
		x*=b1;
		if('0'<=s[i]<='9'){
			x+=s[i]-'0';
		}else{
			x+=s[i]-'A'+10;
		}
	};
	while(x){
		var r=x%b2;
		if (r>=10) {
			arr.push(String.fromCharCode(65+(r-10)));
		}else{
			arr.push(''+r);
		}
		x=Math.floor(x/b2);
	}
	if (neg) {arr.push('-')};

	arr=arr.reverse();
	str=arr.join('');
  console.log(str);
	return str;


}