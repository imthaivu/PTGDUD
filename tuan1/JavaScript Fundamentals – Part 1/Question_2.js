//Data 1
var massMark1 = 78;
var heghtMark1 = 1.69;

var massJohn1 = 92;
var heghtJohn1 = 1.95;

//Data2
var massMark2 = 95;
var heghtMark2 = 1.88;

var massJohn2 = 85;
var heghtJohn2 = 1.76;

var BMIMark1 = massMark1 / (heghtMark1 * heghtMark1);
var BMIJohn1 = massJohn1 / (heghtJohn1 * heghtJohn1);
var markHigherBMI1 = BMIMark1 > BMIJohn1

var BMIMark2 = massMark2 / (heghtMark2 * heghtMark2);
var BMIJohn2 = massJohn2 / (heghtJohn2 * heghtJohn2);
var markHigherBMI2 = BMIMark2 > BMIJohn2

console.log("Data 1");
if (markHigherBMI1){
    console.log(`"Mark's BMI ${BMIMark1} is higher than John's ${BMIJohn1}!"`);
}else{
    console.log(`"John's BMI ${BMIJohn1} is higher than Mark's ${BMIMark1}!"`);
}

console.log("Data 2");
if (markHigherBMI2){
    console.log(`"Mark's BMI ${BMIMark2} is higher than John's ${BMIJohn2}!"`);
}else{
    console.log(`"John's BMI ${BMIJohn2} is higher than Mark's ${BMIMark2}!"`);
}