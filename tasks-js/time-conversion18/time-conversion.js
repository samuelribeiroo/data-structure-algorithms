function timeConversion(s) {
  const getFormat = s.substring(8, 10);

  const getTime = s.substring(0, 8);

  const storeInArray = getTime.split(":");

  const initorHour = parseInt(storeInArray[0]);

  // This line below do you can put him inside if validation. Alright? 
  // But imagine a big application and you wanna it use this same logic in another part of code make more sense attribute this logic to variable avoiding coupling

  const isValidInput = getFormat === "PM" && initorHour < 12;

  if (isValidInput) {
    storeInArray[0] = (initorHour + 12).toString();
  } else if (getFormat === "AM" && getTime === 12) {
    storeInArray[0] = "00";
  }

  const formatedHour = storeInArray.join(":");

  return formatedHour;
} 

// 19:00:32AM


module.exports = timeConversion;

// 1. A entrada vai ser em PM e a sáida AM  Ex: Input: 07:30:00 -> Output: 19:30:00
// 2. A soma vai ser sempre de 12 em 12 (a partir do pm) -> Estrutura condicional.
// 19:45:32
