function task4()
{
	let unioned = union([1, 1, 2], [2, 3, 4, 4], [4, 4, 5, 4]);

	console.log(unioned);
	alert(unioned);
}

function union(...args)
{
	let newMass = [];

	for (let mass of args)
	{
		for (let item of mass)
		{
			if (!newMass.includes(item))
			{
				newMass.push(item);
			}
		}
	}

	return newMass;
}