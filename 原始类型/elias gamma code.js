/*数字系统是写数字的方式，最简单的数字系统是单元数字系统，每个自然数由对应的数字
符号表示。如果符号|被选中，数字7会用|||||||来表示。
elias gamma code用来编码正整数，当整数的优先上边界不知道时，它是有用的。
具体而言，一个正整数的elias gamma code时这么计算的。
--写出n的二进制字符串b。
---将bit的数量减一，在b的开始加入相同数量的0
如13的二进制1101，code就为0001101*/

/*A是n个整数的数组，写一个编码函数，返回一个字符串，它由
整数的elias gamma code连接而成。还写一个解码函数，接收由
编码函数产生的字符串，返回对应数组*/
/*前面的0s比bits的数目少一*/
function trans_int_to_binary (decimal) {
	var str='';
	while(decimal){
		
		str=str.concat(''+(decimal&1));
		
		decimal>>=1;
	}
	str=str.split('').reverse().join('');
	return str;
	
}

function encode (arr) {
	var str='';
	var zeroFiller='';
	for (var i = 0; i < arr.length; i++) {
		
		var binary=trans_int_to_binary(arr[i])
		for (var j = 0; j < binary.length-1; j++) {
			zeroFiller=zeroFiller.concat('0');
		};

		binary=zeroFiller.concat(binary);
		str+=binary;
		zeroFiller='';


	};
	return str;
	
}

function trans_binary_to_int (binary) {
	var ret=0;
	for (var i = 0; i < binary.length; i++) {
		ret=(ret<<1)+(binary[i]-'0');
	};
	return ret;
	// body...
}

function decode (s) {
	var arr=[];
	var idx=0;
	while(idx<s.length){
		var zero_idx=idx;

		//找到连续0的数量
		while(zero_idx<s.length&&s[zero_idx]==='0'){
			++zero_idx;
		}

		var len=zero_idx-idx+1;
		arr.push(trans_binary_to_int(s.substring(zero_idx,zero_idx+len)));
		idx=zero_idx+len;
	}
	
	return arr;
	// body...
}