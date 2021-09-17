const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();


const rawQuestions = fs.readFileSync('questions.json');
const questions = JSON.parse(rawQuestions);
let currentKey = Math.floor(Math.random() * questions.length);
const answered = [];

console.log(`Total questions ${questions.length}`)

app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile(path.join(path.resolve(path.dirname('')), '', 'index.html'));
});

app.get('/current', (req, res) => {
    if (questions.length > 0) {
        const question = questions[currentKey]
        res.send({
            question
        })
    } else {
        res.send({
            question: '😱 no more questions'
        })
    }

})
app.get('/next', (req, res) => {
    questions.splice(currentKey, 1);
    answered.push(questions[currentKey]);

    currentKey = Math.floor(Math.random() * questions.length);
    res.send({
        currentKey
    })
    console.log(`Remaining questions ${questions.length}`)
    fs.writeFile('answered.json', JSON.stringify(answered, null, 2), () => {})
});

// Original
app.get('/random', (req, res) => {
    currentKey = Math.floor(Math.random() * questions.length);
    const question = questions[currentKey]
    res.send({
        question
    })
    questions.splice(currentKey, 1);
    answered.push(question);
    console.log(`Remaining questions ${questions.length}`)
    fs.writeFile('answered.json', JSON.stringify(answered, null, 2), () => {})
});


app.listen(8181);
console.log('Server listening on port 8181');
