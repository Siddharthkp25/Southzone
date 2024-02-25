/** Function to get unique array of year */
export default function getUniqueYears(objects, keyVal) {
	const uniqueYears = new Set();

	objects.forEach((obj) => {
		const date = new Date(obj.attributes[keyVal]);
		const year = date.getFullYear();
		uniqueYears.add(year);
	});

	const sortedYears = Array.from(uniqueYears).sort((a, b) => b - a);
	return sortedYears;
}
