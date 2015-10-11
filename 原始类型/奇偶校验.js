// 如果序列中1的个数奇数，序列的parity是1，否则为零。
// 怎么计算64位非负整数的奇偶性
// 最快的算法取决于底层的硬件，直接计算一个数的奇偶性与位数成正比。

function parity1(x){
	var result=0;
	while(x){
		//x&1得到序列的最后一位。与result相xor（只有当操作数不同时结果才为1）
		//当目前遇到一的个数为奇数时，result为1，下次遇到一时result为0，遇到0时result为1；也就是不变
		//当为偶数时，遇到一时result为1，遇到0时result为0，也就是不变。
		result^= (x&1);
		//将序列向右移一位
		x>>=1;
	}

	return result;
}

//在一次操作中除掉最不重要的位也是一种技巧
function parity2(x){
	var result=0;
	while(x){
		result^=1;
		/*表达式的意思就是把x的二进制表示从最低位直到遇到第一个1的比特置0。 
		例如： 
		e1: 
		x           =   01001000 
		x-1       =   01000111 
		x&(x-1)=01000000 */
		x&=(x-1);

	}
	return result;

}

//当你执行大量的比特操作时，最好的方法是预先计算好结果，存在一个数组中。
function parity3(x){
	return precomputed_parity[x>>48]^
				 precomputed_parity[x>>32&0xFFFF]^
				 precomputed_parity[x>>16&0xFFFF]^
				 precomputed_parity[x&0xFFFF];
}