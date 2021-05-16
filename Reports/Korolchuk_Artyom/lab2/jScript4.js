function determiningDay(dayNumber, monthNumber, monthsDaysNumber)
{

	for (let i = 1; i < monthNumber; i++)
	{
		dayNumber += monthsDaysNumber[i-1];
	}

	return whatDay(dayNumber % 7);
}

function whatDay(weekDayNumber)
{
	switch(weekDayNumber)
	{
		case 1:
			return "Friday";
		case 2:
			return "Saturday";
		case 3:
			return "Sunday";
		case 4:
			return "Monday";
		case 5:
			return "Tuesday";
		case 6:
			return "Wednesday";
		case 7:
			return "Thursday";
	}
}

function checkData(dayNumber, monthDaysNumber)
{
	let isValid = true;

	if (dayNumber < 1 || dayNumber > monthDaysNumber)
	{
		alert("Invalid data");
		isValid = false;
		return isValid;
	}
	if (!Number.isInteger(dayNumber))
	{
		alert("Invalid data");
		isValid = false;
		return isValid;
	}

	return isValid;
}

function task4()
{
	let januaryDaysNumber = 31;
	let FebruaryDaysNumber = 29;
	let MarchDaysNumber = 31;
	let AprilDaysNumber = 30;
	let MayDaysNumber = 31; 
	let JuneDaysNumber = 30; 
	let JulyDaysNumber = 31; 
	let AugustDaysNumber = 31; 
	let SeptemberDaysNumber = 30; 
	let OctoberDaysNumber = 31; 
	let NovemberDaysNumber = 30; 
	let DecemberDaysNumber = 31;

	let monthsDaysNumber = [januaryDaysNumber, FebruaryDaysNumber, MarchDaysNumber,
	AprilDaysNumber, MayDaysNumber, JuneDaysNumber, JulyDaysNumber, AugustDaysNumber,
	SeptemberDaysNumber, OctoberDaysNumber, NovemberDaysNumber, DecemberDaysNumber];

	let monthNumber = prompt("Enter number of a month (1, ..., 12)");
	let dayNumber = prompt("Enter number of a day (1, ..., 31)");

	if (isNaN(monthNumber) || isNaN(dayNumber))
	{
		alert("Invalid data");
		return;
	}

	monthNumber = (+monthNumber);
	dayNumber = (+dayNumber);

	switch(monthNumber)
	{
		case 1:
			if (!checkData(dayNumber, januaryDaysNumber))
				return;
			break;
		case 2:
			if (!checkData(dayNumber, FebruaryDaysNumber))
				return;
			break;
		case 3:
			if (!checkData(dayNumber, MarchDaysNumber))
				return;
			break;
		case 4:
			if (!checkData(dayNumber, AprilDaysNumber))
				return;
			break;
		case 5:
			if (!checkData(dayNumber, MayDaysNumber))
				return;
			break;
		case 6:
			if (!checkData(dayNumber, JuneDaysNumber))
				return;
			break;
		case 7:
			if (!checkData(dayNumber, JulyDaysNumber))
				return;
			break;
		case 8:
			if (!checkData(dayNumber, AugustDaysNumber))
				return;
			break;
		case 9:
			if (!checkData(dayNumber, SeptemberDaysNumber))
				return;
			break;
		case 10:
			if (!checkData(dayNumber, OctoberDaysNumber))
				return;
			break;
		case 11:
			if (!checkData(dayNumber, NovemberDaysNumber))
				return;
			break;
		case 12:
			if (!checkData(dayNumber, DecemberDaysNumber))
				return;
			break;
		default:
			alert("Invalid data");
			break;
	}

	alert(determiningDay(dayNumber, monthNumber, monthsDaysNumber));
}