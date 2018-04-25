//var obj = {

//name:'Renan'
//};

//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//var personString = '{"name":"Renan","age":21}';
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(personString);

const fs = require('fs');
var originalNote = {
title: 'Some Title',
body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
