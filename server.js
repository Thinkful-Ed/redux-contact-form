const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/api/messages', bodyParser.json(), (req, res) => {
    // TODO: Validate the field types
    if (req.body.magicWord.toLowerCase() !== 'please') {
        return res.status(400).json({
            message: 'Incorrect magic word',
            reason: 'ValidationError',
            location: 'magicWord'
        });
    }
    // TODO: Store the message
    return res.status(204).end();
});

app.listen(8080);
