const fs = require('fs');

function withdrawalService(withdrawalValue, id) {
    let users = JSON.parse(fs.readFileSync('users.json'));
    const modifiedIndex = users.findIndex((user) => {
        return (user.id === id)
    });


    if ((users[modifiedIndex].balance - withdrawalValue.balance) >= 0) {
        users[modifiedIndex].balance -= withdrawalValue.balance;
    }

    fs.writeFileSync('users.json', JSON.stringify(users));
}

function depositService(withdrawalValue, id) {
    let users = JSON.parse(fs.readFileSync('users.json'));
    const modifiedIndex = users.findIndex((user) => {
        return (user.id === id)
    });

    users[modifiedIndex].balance += withdrawalValue.balance;

    fs.writeFileSync('users.json', JSON.stringify(users));
}

module.exports = {
    withdrawalService,
    depositService
}