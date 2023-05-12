/**
 * A function that takes a Date object and produces a string in the format yyyy-mm-dd
 * 
 * @param date A Date object for which the formatted string is required
 * 
 * @returns A string that is in the yyyy-mm-dd format for the input date object
 */
export const getFormattedDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;
  return formattedToday;
};

/**
 * A function that takes a date as a string in the 'yyyy-mm-dd' format and returns a string of the type 'dd-monthName-yyyy' for the corresponding date
 * @param dateString A string representing a date in the 'yyyy-mm-dd' format
 * @returns A string of the type 'dd-monthName-yyyy' for the input date
 */
export const getDisplayDate = (dateString) => {
  const date = new Date(dateString)
  console.log(date);
  const month = ["Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const resultDateString = date.getDate() + " " + month[date.getMonth()] + ", " + date.getFullYear();
  return resultDateString
}