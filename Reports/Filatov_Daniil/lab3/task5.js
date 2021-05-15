function task_5(){
alert("["+flatten([[[1]], [2],[3,[4]]])+"]");
} 

function flatten(arr){
	for(var i = 0;i < arr.length;i++){
		arr = arr.reduce(function(a,b){ return a.concat(b); }, []);
	}
	return arr;
}