function task6()
{
	let mass = [1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6];
	let mass2 = "Hello world!";

	let newMass = delTriples(mass);
	let newMass2 = delTriples(mass2);

	alert(newMass);
	alert(newMass2);
}

function delTriples(object)
{
	let mass = Array.from(object);
	let newMass = [];

	for (let i = 0; i < mass.length; i++)
	{
		if (mass[i] === undefined)
			continue;

		let founded = mass.filter((item, index, array) => (item === mass[i]));

		if (founded.length > 2)
		{
			for (let value of founded)
			{
				let index = mass.findIndex((item, index, array) => (item === value));
				delete mass[index];
			}
		}
	}

	for (let item of mass)
	{
		if (item)
			newMass.push(item);
	}

	return newMass;
}