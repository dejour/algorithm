/*集合S的power set 是这个集合所有子集的集合，包括空集和它自己。
实现一个方法，输入带有不同元素的集合S，打印出S的power set，每行打印一个
子集，元素之间用逗号分开

关键是长度为|s|的2的s次方中比特数组和s的所有子集有一一对应关系。
如 s={g，l，e}比特数组<0,1,1>表示子集{l，e}*/


function generate_power_set(s){
	//1<<s.length是有多少个子集
	for (var i = 0; i < (1<<s.length); i++) {
	    var str='';
			var x=i;
		while(x){
			//找到最不重要位的索引，x&~(x-1)保留最低位，2的n次方中n为索引。
			var tar=Math.log2(x&~(x-1));
			str+=(s[tar]);
			if(x&=x-1){
			str+=',';
			}
		}
		console.log(str);
	};
}
