let PDFkit = require('pdfkit');
let doc = new PDFkit;

let fs = require('fs');

doc.pipe(fs.createWriteStream('myNewDoc.pdf'));

doc.font('/home/lakshay/.local/share/fonts/Roboto-Regular.ttf')
.fontSize(28).text('Hey there!');

doc.end();