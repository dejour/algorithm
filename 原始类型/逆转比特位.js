/*写一个函数，接收一个64位整数。返回比特顺序相反的64位整数。*/
/*与奇偶校验一样，最快的方法是计算出precomputed_reverse数组，对没16位整数i，对应的位置存着
相反顺序bit的i*/

function reverse_bits(x){
	return precomputed_reverse[(x>>48)&0xFFFF]|
				 precomputed_reverse[(x>>32)&0xFFFF]<<16|
				 precomputed_reverse[(x>>16)&0xFFFF]<<32|
				 precomputed_reverse[x&0xFFFF]<<48;
}