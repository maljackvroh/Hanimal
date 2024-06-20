const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const users = {
    'user1': 'password1',
    'user2': 'password2'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const session = {
            username: username,
            loginTime: new Date()
        };

        // Simpan sesi login ke file JSON
        fs.writeFileSync('sessions.json', JSON.stringify(session, null, 2));

        res.json({ success: true, session });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
