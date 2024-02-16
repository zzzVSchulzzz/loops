let dayNumber = prompt('Enter a number to convert it to a day of the week.');
const dayRequest = getDay(dayNumber);
function getDay(dayNumber) {
   const days= ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
   
   if (dayNumber >= 1 && dayNumber <= 7) {
    return days[dayNumber - 1]
   } else {
    return 'Incorrect day number'
   }
}

alert(`${dayNumber} corresponds to the day of the week: ${dayRequest}`)