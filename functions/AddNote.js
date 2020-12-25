const chalk = require('chalk')

const loadNote = require("./LoadNote")
const saveNotes = require("./SaveNotes")

const addNote = (title, body) => {
    const notes = loadNote()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes)
        console.log(chalk.greenBright.inverse("New Note is added!"))
    }
    else {
        console.log(chalk.redBright.inverse("Note title is already taken!"))
    }
}

module.exports = addNote;