var calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return "No team wins!";
    }
}

var dolphinsData1 = calcAverage(44, 23, 71);
var koalasData1 = calcAverage(65, 54, 49);

var dolphinsData2 = calcAverage(85, 54, 41);
var koalasData2 = calcAverage(23, 34, 27);

console.log('Data 1');
console.log(checkWinner(dolphinsData1, koalasData1));

console.log('Data 2');
console.log(checkWinner(dolphinsData2, koalasData2));