function determineWinner(avgDolphins, avgKoalas){
    var point = 100;
    if(avgDolphins >= 100 && avgKoalas >= 100){
        if(avgDolphins > avgKoalas){
            return "Dolphins win the trophy!";
        }else if(avgDolphins < avgKoalas){
            return "Koalas win the trophy!";
        }else{
            return "It's a draw!";
        }
    }else{
        return "No team wins the trophy!";
    }
}

function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Data 1
var dolphinsScores_1 = [96, 108, 89];
var koalasScores_1 = [88, 91, 110];

// Data 2
var dolphinsScores_2 = [97, 112, 101];
var koalasScores_2 = [109, 95, 123];

// Data 3
var dolphinsScores_3 = [97, 112, 101];
var koalasScores_3 = [109, 95, 106];

var avgDolphinsScores_1 = dolphinsScores_1.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / dolphinsScores_1.length;

var avgKoalasScores_1 = koalasScores_1.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / koalasScores_1.length;
var content_1 = determineWinner(avgDolphinsScores_1, avgKoalasScores_1);
console.log('Data 1');
console.log(content_1);

var avgDolphinsScores_2 = dolphinsScores_2.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / dolphinsScores_2.length;

var avgKoalasScores_2 = koalasScores_2.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / koalasScores_2.length;
var content_2 = determineWinner(avgDolphinsScores_2, avgKoalasScores_2);
console.log('Data 2');
console.log(content_2);

var avgDolphinsScores_3 = dolphinsScores_3.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / dolphinsScores_3.length;

var avgKoalasScores_3 = koalasScores_3.reduce(
    (sum, currentScore) => sum + currentScore, 0
) / koalasScores_3.length;
var content_3 = determineWinner(avgDolphinsScores_3, avgKoalasScores_3);
console.log('Data 3');
console.log(content_3);