const chalk = require('chalk')

const loadNote = require("./LoadNote")

const readNote = (title) => {
    const notes = loadNote()
    const desiredNote = notes.find((note) => note.title === title)

    if (!desiredNote) {
        console.log(chalk.red.inverse(title + " is not found!"))
    }
    else {
        console.log(chalk.inverse(title))
        console.log(desiredNote.body)
    }
}

module.exports = readNote;
