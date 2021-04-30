function task2()
{
    let leng = prompt("Укажите длину массива: ");
	let max = prompt("УКажите максимальное значение элемента массива: ")
	let mass = new Array();
	for (let i = 0; i < leng; i++)
	{
		mass[i] = Math.floor(Math.random() * max);
	}
    alert("Массив: " + "[" + sort(mass) + "]");
}

function sort(mass){
    let time;

    for(let i = 0; i < mass.length - 1; i++){
        for(let j = mass.length; j > i ; j--){
            if(mass[j - 1] > mass[j]){
                time = mass[j - 1];
                mass[j - 1] = mass[j];
                mass[j] = time;
            }
        }
    }
    return mass;
} 
