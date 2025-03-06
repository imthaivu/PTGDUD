function printForecast(arr){
    var content = "";
    arr.forEach((a,i) => {
        content += `... ${a}°C in ${i + 1} days `
    });
    content += '...';
    return content;
}

var data1 = [17, 21, 23];
var data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));