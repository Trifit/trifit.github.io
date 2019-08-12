const fs = require('fs');
// const path = require('path');
const filePath = './src/template.html';
const fileDest = './src/templateSVG.html';

// Store file in variable
const htmlFile = fs.readFileSync(filePath, {encoding: 'utf-8'});

const svgPaths = htmlFile.match(/(?<=<use xlink:href=")(.*)(?="><\/use>)/gim); // find paths

if(svgPaths === null) {
    console.error("The file doesn't have any svg <use> tag with a valid path")
    return;
 } // stop the script execution if you can't find any tag with svgs

const svgs = svgPaths.map(element => {
    return fs.readFileSync('./src/' + element, {encoding: 'utf-8'}).replace(/(?=<svg)(.*)(?<=>)|(<\/svg>)|(?=<!DOCTYPE)(.*)|(?=<svg)(.*)|(?=<!--)(.*)/gm, '').trim();
}); //get svgs (cleaning them a bit)

const svgTags = htmlFile.match(/(?=<use xlink:href=")(.*)(?<="><\/use>)/gim); // get exterior of the <use>...

let splittedHtml = htmlFile;

svgTags.forEach((currentValue, index) => splittedHtml = splittedHtml.split(currentValue).join(svgs[index]));

splittedHtml = splittedHtml.replace((/(version=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm)|(/(xmlns=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm), '');

fs.writeFile(fileDest, splittedHtml, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 

