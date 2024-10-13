function fun1() {
  let inp1 = document.querySelector(".input1").value;
  let result = document.querySelector("b");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let birth = new Date(inp1);
  let nextBirth = new Date(inp1);
  nextBirth.setFullYear(today.getFullYear());
  if (today > nextBirth) {
    nextBirth.setFullYear(today.getFullYear() + 1);
  }
  let nextMonth = nextBirth.getMonth() + 1;
  let age = today.getFullYear() - birth.getFullYear();
  let diff = nextBirth - today;
  let remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (inp1 == "") {
    result.innerHTML = `PLEASE ENTER VALID VALUES`;
    return;
  }

  result.innerHTML = `YOUR DATE OF BIRTH IS ${inp1} AND YOUR AGE IS ${age} YEARS <br> YOUR NEXT BIRTH DAY DATE IS ${nextBirth.getDate()} / ${
    months[nextBirth.getMonth()]
  } / ${today.getFullYear()} , ${
    days[nextBirth.getDay()]
  }. <br> YOUR REMAINING DAYS ARE ${remainingDays}`;
}
