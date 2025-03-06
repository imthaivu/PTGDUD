const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

const events =  [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const gameDuration = 90; // Thời gian của trận đấu
const eventFrequency = gameDuration / gameEvents.size;
console.log(`An event happened, on average, every ${eventFrequency.toFixed(2)} minutes`);

for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
}