function task5()
{
	let mass = [1, 2, [4, [5, [6]]]];

	let newMass = flatten(mass);

	alert(newMass);
}

function flatten(mass)
{
	let newMass = [];

	if (mass.length === 0)
		return newMass;

	for (let item of mass)
	{
		newMass = newMass.concat(item);
	}

	return newMass;
}