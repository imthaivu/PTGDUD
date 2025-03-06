var mark = {
    fullName: "Mark Miller",
    mass: 78, 
    height: 1.69, 
    calcBMI: function(){
        return this.mass / (this.height * this.height)
    }
}

var john = {
    fullName: "Mark Miller",
    mass: 92, 
    height: 1.95, 
    calcBMI: function(){
        return this.mass / (this.height * this.height)
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

var BMIMark = mark.calcBMI();
var BMIJohn = john.calcBMI();

if(BMIMark > BMIJohn){
    console.log(
        `John's BMI ${BMIJohn.toFixed(1)} is higher than Mark's ${BMIMark.toFixed(1)}!`
    )
}else{
    console.log(
        `Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJohn.toFixed(1)}!`
    )
}
