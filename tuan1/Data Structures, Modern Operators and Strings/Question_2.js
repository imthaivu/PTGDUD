const game = { 
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

game.scored.forEach((player, i) => {
    console.log(`Goal ${i + 1}: ${player}`);
})

const odds = Object.values(game.odds);
const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

for (const [key, value] of Object.entries(game.odds)) {
    const team = key === 'x' ? 'draw' : `victory ${game[key]}`;
    console.log(`Odd of ${team}: ${value}`);
}

const scorers = {};
game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);


