document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const lines = text.split('\n');

    for (const [index, line] of lines.entries()) {
        const trimmedLine = line.trim(); 
        if (!trimmedLine) continue; 

        const words = trimmedLine.toLowerCase().split('_'); 
        const camelCase = words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join(''); 

        console.log(`${camelCase.padEnd(20)} ${'✅'.repeat(index + 1)}`);
    }
});
