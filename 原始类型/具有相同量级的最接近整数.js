/*64位无符号整数中为1的位的个数为它的weight。
Sk 表示weight为k的无符号整数集

假设x属于sk k不是0或64， 你怎么计算也属于sk的y 使|y-x|最小

y可以通过循环查找x的比特位，从最低位到最高位。交换第一个不同的连续位*/

function closet_int_same_bits (x) {
	for (var i = 0; i < 63; i++) {
	if (((x>>i)&1)^((x>>(i+1))&1) {
		x^=(1<<i)|(1<<(i+1));
		return x;
	};
	};

	return 'all 0s or 1s';

};