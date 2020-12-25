const yargs = require("yargs")
const addNote = require("./functions/AddNote")
const removeNote = require("./functions/RemoveNote")
const listNote = require("./functions/ListNote")
const readNote = require("./functions/ReadNote")




yargs.command(
    {
        command: "add",
        describe: "Add a note",
        builder: {
            title: {
                describe: 'Note Title',
                demandOption: true,
                type: "string",
            },
            body: {
                describe: "Note Body",
                demandOption: true,
                type: "string",
            },
        },
        handler(argv) {
            addNote(argv.title, argv.body)
        }
    }
)

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note Title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title)
    }
}
)

yargs.command({
    command: "list",
    describe: "List of notes",
    builder: {
        title: {
            describe: "List of Notes",
            type: 'string'
        }
    },
    handler() {
        listNote()
    }
}
)

yargs.command(
    {
        command: "read",
        describe: "Reading a note",
        builder: {
            title: {
                describe: "Read a Note",
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            readNote(argv.title)
        }
    }
)

yargs.parse();
