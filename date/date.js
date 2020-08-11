const getDay = (year) => {
  let day = 0;
  for (let m = 0; m < 12; m++) {
    day += new Date(year, m, 13).getDay() === 5 ? 1 : 0;
  }
  return day;
};
console.log(getDay(1994));
