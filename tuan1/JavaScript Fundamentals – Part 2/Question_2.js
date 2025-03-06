function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

var bills = [125, 555, 44];
var tips = bills.map(calcTip);
var totals = bills.map((bill, i) => {
    return bill + tips[i]
});

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", totals);