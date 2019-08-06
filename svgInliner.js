const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './src/template.html');
const fileDest = path.join(__dirname, './src/templateSVG.html');

// Store file in variable
const htmlFile = fs.readFileSync(filePath, {encoding: 'utf-8'});

const svgPaths = htmlFile.match(/(?<=<use xlink:href=")(.*)(?="><\/use>)/gim);
const svgs = svgPaths.map((element, index) => {
    return fs.readFileSync('./src/' + element, {encoding: 'utf-8'}).replace(/((?=<\?xml)(.*)(?<=>))|(<\/svg>)|(?=<!DOCTYPE)(.*)|(?=<svg)(.*)|(?=<!--)(.*)/gm, '');
});

const finalHtml = htmlFile.
// fs.writeFile(fileDest, "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 

console.log(svgs);