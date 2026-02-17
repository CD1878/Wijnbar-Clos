const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('menu-data/wijnkaart.pdf');

pdf.default(dataBuffer).then(function (data) {
    // PDF text
    console.log(data.text);
});
