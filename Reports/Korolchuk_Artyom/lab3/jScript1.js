function task1()
{
	let start = prompt("Enter a start:");
	let end = prompt("Enter an end:");
	let step = prompt("Enter a step:", 1);

	getMass(start, end, step);
}

function getMass(start, end, step)
{

	if (start === undefined || end === undefined || step === undefined)
	{
		alert("Invalid data");
		return;
	}

	start = +start;
	end = +end;
	step = +step;

	if (step === 0)
	{
		alert("Invalid data");
		return;
	}
	if (end > start && step < 0)
	{
		alert("Invalid data");
		return;
	}
	if (start > end && step > 0)
	{
		alert("Invalid data");
		return;
	}

	let count = 0;
	let mass = [];
	if (start < end || (start === end && step > 0))
	{
		for (let i = start; i <= end; i += step)
		{
			mass[count] = i;
			count += 1;
		}
	}
	else
	{
		for (let i = start; i >= end; i += step)
		{
			mass[count] = i;
			count += 1;
		}
	}

	alert(mass);
	return mass;
}