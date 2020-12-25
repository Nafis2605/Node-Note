const fs = require('fs')

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data

    } catch (error) {
        return []
    }

}

module.exports = loadNote;
