/*长方形R的边和x轴和y轴平行，就称它he为xy—aligned，这样的
长方形的标志是左边最低点（Rx，Ry），它的宽Rw和高Rh。

R和S是在Cartesian plane的xy-aligned的长方形，写一个函数测试R和
S是否有非空交点，如果不为空，返回交点行形成的长方形*/
x轴[Rx,Rx+Rw]与[Sx,Sx+Sw]的交集为0时，长方形不相交，
同理y轴也是如此。

function is_intersect(R,S){
	return R.x<=S.x+S.width&&R.x+R.width>=S.x&&
				 R.y<=S.y+S.height&&R.y+R.height>S.y;
}

function intersect_rectangle (R,S) {
	if(is_intersect(R, S)){
		return {
			x:Math.max(R.x,S.x),
			y:Math.max(R.y,S.y),
			width:Math.min(R.x+R.width,S.x+S.width)-Math.max(R.x,S.x),
			height:Math.min(R.y+R.height,S.y+S.height)-Math.max(R.y,S.y)
		}
	}else{
		return {0,0,-1,-1};
	}
	// body...
	// 
}