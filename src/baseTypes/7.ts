/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay{
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY, 
  SATURDAY,
  SUNDAY,    
}

const isWeekend = (day: WeekDay): boolean => {
  return day === WeekDay.SATURDAY || day === WeekDay.SUNDAY;

}

console.log(isWeekend(WeekDay.SATURDAY));
console.log(isWeekend(WeekDay.MONDAY));