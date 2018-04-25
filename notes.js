console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {

  try {

      var notesString = fs.readFileSync('notes-data.json');
      return JSON.parse(notesString);
  } catch (e) {

    return [];
  }

};

var saveNotes = (notes) =>{

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};


var addNote = (title, body) => {

var notes = fetchNotes();

var note = {
    title,
    body
  };

try {

    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);


} catch (e) {

}

var duplicatedNotes = notes.filter((note) => note.title === title);

if (duplicatedNotes.length === 0 ) {
  notes.push(note);
  saveNotes(notes);
  return note;
}
};


var getAll = () => {

console.log('Getting all the notes');

};


var removeNote = (title) =>{
var notes = fetchNotes();
var filteredNotes = notes.filter((note) => note.title !== title);
saveNotes(filteredNotes);

return notes.length !== filteredNotes.length;

}

var readNote = (title) => {
var notes = fetchNotes();
var filterNotes = notes.filter((note) => note.title === title);
return filterNotes[0];


}

var logNote = (note) => {
  console.log('--#--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);

}


module.exports = {

addNote,
getAll,
removeNote,
readNote,
logNote
}