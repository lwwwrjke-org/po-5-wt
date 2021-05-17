function tripl() 
{
    alert(triple([1, 2, 1, 3, 1, 3, 1, 4]));
    alert(triple("mama ramu"));
	alert(triple([1, 1, 1, 5, 5, 6, 6, 6, 8]));
}

function triple(mass)
{
    let result = [];
    let doing = [];

    if (!(mass instanceof Array)) 
    {
        mass = mass.split('');
    }

    for (let value of mass) 
    {
        doing[value] = (doing[value] || 0) + 1;
    }

    for(let i in mass) 
    {
      if ( doing[ mass[i] ] < 3 ) 
      {
        result.push(mass[i]);
      }
    }
    return('Исходный массив: ['+ mass +']'+'\nРезультат: ['+ result +']');
}