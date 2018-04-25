console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;

var command = process.argv[2];
console.log('Command:', command);
console.log('Process', process.argv);
console.log('yargs', argv);


if (command === 'add'){

  var note = notes.addNote(argv.title, argv.body);

  if (note){
    console.log('Note Created');
    notes.logNote(note);

  }else {

console.log('Note title Taken');

  }

} else if (command === 'list') {

notes.getAll();

} else if (command === 'read') {

var note = notes.readNote(argv.title);
if (note){
  console.log('Note Found');
  notes.logNote(note);
} else {
  console.log('No note Found');
}



} else if (command === 'remove') {

var noteRemoved = notes.removeNote(argv.title)
var message = noteRemoved ? 'Note was removed' : 'Note Not Found';
console.log(message);

} else
{
console.log('invalid Command');

}
