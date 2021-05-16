function task2()
{
	let numberOfStoreys, numberOfEntrances, amountOfApartmentsPerLanding, numberOfFlat;

	numberOfStoreys = prompt("Enter number of storeys (1-25)");
	numberOfEntrances = prompt("Enter number of entrances (1-10)");
	amountOfApartmentsPerLanding = prompt("Enter amount of apartments (1-20)");
	numberOfFlat = prompt("Enter number of flat");

	if (isNaN(numberOfStoreys) || isNaN(numberOfEntrances) ||
	isNaN(amountOfApartmentsPerLanding) || isNaN(numberOfFlat))
	{
		alert("Invalid data");
		return;
	}

	numberOfStoreys = (+numberOfStoreys);
	numberOfEntrances = (+numberOfEntrances);
	amountOfApartmentsPerLanding = (+amountOfApartmentsPerLanding);
	numberOfFlat = (+numberOfFlat);

	let numberOfAllApartments = numberOfStoreys * numberOfEntrances * amountOfApartmentsPerLanding;

	if (numberOfStoreys < 1 && numberOfStoreys > 25 ||
		numberOfEntrances < 1 && numberOfEntrances > 10 ||
		amountOfApartmentsPerLanding < 1 && amountOfApartmentsPerLanding > 20 ||
		numberOfFlat < 1 && numberOfFlat > numberOfAllApartments ||
		(numberOfAllApartments % numberOfEntrances) != 0 ||
		!Number.isInteger(numberOfStoreys) || !Number.isInteger(numberOfEntrances) ||
		!Number.isInteger(amountOfApartmentsPerLanding) || !Number.isInteger(numberOfFlat))
	{
		alert("Invalid data");
		return;
	}

	let amountOfApartmentsPerEntrance = numberOfAllApartments / numberOfEntrances;
	let numberOfEntrance;

	let checkedFlats = amountOfApartmentsPerEntrance;
	if (numberOfFlat >= 1 && numberOfFlat <= amountOfApartmentsPerEntrance)
		numberOfEntrance = 1;
	else
	{
		for(let i = 2; i <= numberOfEntrances; i++)
		{
			if (numberOfFlat > ((i-1) * amountOfApartmentsPerEntrance) &&
				numberOfFlat <= (i * amountOfApartmentsPerEntrance))
			{
				numberOfEntrance = i;
				break;
			}
		}
	}

	if (typeof(numberOfEntrance) == "undefined")
	{
		alert("Invalid data");
		return;
	}
	alert("Your entrance has number " + numberOfEntrance);
}