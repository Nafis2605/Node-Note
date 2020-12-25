const loadNote = require("./LoadNote")

const listNote = () => {
    const notes = loadNote()
    notes.forEach((note) => {
        console.log(note.title)
    }
    )
}

module.exports = listNote;
