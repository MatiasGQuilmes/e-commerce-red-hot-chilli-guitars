const fs = require("fs");
const path = require("path");
const users_db = path.join(('data', 'users.json'));

module.exports = {
    getUsers : () => {
        return JSON.parse(fs.readFileSync(users_db, 'utf-8'));
    },
    setUsers : (user) => {
        fs.writeFileSync(users_db, JSON.stringify(user), 'utf-8');
    }
}