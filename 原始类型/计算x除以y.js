/*给定两个正整数，你怎么计算x/y，如果你只能使用加，减和乘。*/
/*我们可以用递归；当x小于y时为0；否则，x除以y
等于1+（x-y）/y;
*/
/*一次减y不够快可以一次多减几个y，也就是2的k次方。只要保证2的k次方乘以y小于等于x*/
function divide_x_y (x,y) {
	var power=0;
	var part;
	if(x<y){

		return 0;
	}
	while((1<<power)*y<=x){
		++power;
	}
  //part=2的k次方，之前大了1所以要减一
	part=1<<(power-1);
	return part+divide_x_y(x-part*y,y)
	// body...
}