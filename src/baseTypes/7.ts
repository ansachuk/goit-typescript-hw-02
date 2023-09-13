/*
Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
	Mon = "MONDAY",
	Tue = "TUESDAY",
	Wed = "WEDNESDAY",
	Thu = "THURSDAY",
	Fri = "FRIDAY",
	Sat = "SATURDAY",
	Sun = "SUNDAY",
}

const isWeekend = (day: Days): boolean => day.toUpperCase() === Days.Sat || day.toUpperCase() === Days.Sun;
