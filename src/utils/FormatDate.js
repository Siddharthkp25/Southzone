/* eslint-disable indent */

// PLUGINS //
import parse from "html-react-parser";

/** Function to Format date*/
/** 2023-12-01 ----> 1st Dec, 2023 */
export default function formatDate(inputDate) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const [year, month, day] = inputDate.split("-").map(Number);
	const monthName = months[month - 1];
	const suffix =
		day === 1 || day === 21 || day === 31
			? "st"
			: day === 2 || day === 22
			? "nd"
			: day === 3 || day === 23
			? "rd"
			: "th";

	const formattedDate = `${day}<sup>${suffix}</sup> ${monthName}, ${year}`;
	return parse(formattedDate);
}
