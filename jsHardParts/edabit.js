

function howManySeconds(x) {
  return x * 3600;
}

let result = howManySeconds(2);
console.log(result);


function howManySeconds2(hours) {
  const mins = 60;
  const seconds = 60;
  return hours * mins * seconds;
}

let howManySeconds3 = (h) => h * 3600;