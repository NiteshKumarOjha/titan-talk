export function getTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = padZero(date.getDate());
  return `${hours}:${minutes} (${day} ${month} ${year})`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}

// Helper function to get month name from month index
function getMonthName(monthIndex) {
  const monthNames = [
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
  return monthNames[monthIndex];
}
