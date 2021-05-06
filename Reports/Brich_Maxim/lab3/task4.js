function task_4(){
	alert("[" + union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) + "]");
} 
    function union(){
        var map = new Map();
        var arr = new Array();
        for (var i = 0; i < arguments.length; i++) 
			for (var j = 0; j < arguments[i].length; j++) 
				map.set(arguments[i][j], 0);

        for (var keys of map.keys()) 
			arr.push(keys);
        return arr;
    }