import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world1')
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});

app.use(express.json());

app.post('/auth/login', (req, res ) => {
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Василий'
    },
    'secret123'
    );


    res.json({
        success: true,
        token
    })

})


