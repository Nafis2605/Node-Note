const chalk = require('chalk')

const loadNote = require("./LoadNote")
const saveNotes = require("./SaveNotes")

const removeNote = (title) => {
    const notes = loadNote()

    const notesToKeep = notes.filter(
        (note) => {
            return note.title != title
        }
    )

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(title + " is removed"))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.yellowBright.inverse(title + " is not found!"))
    }
}

module.exports = removeNote;