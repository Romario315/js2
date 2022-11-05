// 1 -2 =================================

var userObj = {
  firstName: "Roma",
  lastName: "Olifirenko",
  age: 22,
  fullName: function () {
    return `${userObj.firstName} ${userObj.lastName}`;
  },
};

console.log(userObj.fullName());

// 3 =================================

let defUpperStr = function (str) {
  return (str || "Default text").toUpperCase();
};

console.log(defUpperStr("My Text"));
console.log(defUpperStr());
// 4 =================================

let evenFn = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

  return arr;
};

console.log(evenFn(19));

// 5 =================================

let weekFn = function (n) {
  let str = "";

  switch (n) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }
  return str;
};

console.log(weekFn(3));

console.log(weekFn(9));

// 6 =================================

let ageClassification = function (num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
};

console.log(ageClassification(-4));
console.log(ageClassification(83));
// 7 =================================

let oddFn = function (n) {
  let arr = [];
  let i = 0;
  while (i++ < n) if (i % 2 !== 0) arr.push(i);
  return arr;
};

console.log(oddFn(12));
// 8 =================================

function mainFunc(a, b, cb) {
  if (cb && typeof cb === "function") return cb(a, b);
  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(cbRandom(3, 100));

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

console.log(mainFunc(2, 5, cbPow));

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, "not a func")); // false
