import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world1')
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok')
})
