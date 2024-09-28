const fs = require('fs');

function getUsersFromFile() {
    return JSON.parse(fs.readFileSync('users.json'));
}

module.exports = {
    getUsersFromFile
}