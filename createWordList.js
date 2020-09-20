const fs = require('fs');
const { exit } = require('process');

if (process.argv.length !== 4) {
    console.log('Usage: node createWordList.js inFile.csv outFile.txt');
    exit();
}

const inFile = process.argv[2];
const outFile = process.argv[3];

console.log(`Reading file ${inFile}`);
console.log(`Processing...`);

fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) throw error;

    // Remove the first row since that has the questions
    const rows = data.split(/\r?\n/).splice(1);
    const outputWords = [];

    let words;
    rows.forEach(row => {
        words = row.split(',');
        words.forEach((word, index) => {
            if (index === 0) {
                // The first row is the timestamp
                return;
            }

            const trimmedWord = word.trim();

            if (trimmedWord.length > 0 && outputWords.indexOf(trimmedWord) === -1) {
                outputWords.push(trimmedWord);
            }
        })
    });

    fs.writeFile(outFile, outputWords.join(','), (err) => {
        if (err) throw err;
        console.log(`Wrote ${outFile}`);
      });
});