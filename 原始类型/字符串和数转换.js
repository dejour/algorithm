/*字符串是一串字符，一串字符或许编码了一个整数，如“123”编码为123.
这个问题要实现一个方法，接收一个标识整数的字符串。返回相应的整数。相反也可以
方法应该能处理负数，如果字符串没有编码一个整数如‘123abc’应该抛出异常。*/

function numToString(x){
	var is_negative=false;
	var arr=[];
	var str='';
	if(x<0) {
		x=-x;
		is_negative=true;
	}else{
		is_negative=false;
	}

	while(x) {
		arr.push(''+x%10);
		//因为javascript中不区分整数和浮点数，
		x=Math.floor(x/10);
	}
	if(is_negative){
		arr.push('-');
	}
  arr=arr.reverse();
  str=arr.join('');
	if (arr.length===0) {
		return '0';
	};

	return str;
}


function stringToInt(s){
	var is_negative=s[0]==='-';
	var x=0;

	for (var i = 0; i <s.length; i++) {
		x+=(s[i]-'0')*Math.pow(10,(s.length-1)-i);
	};

	console.log( is_negative?-x:x);
}


numToString(0)