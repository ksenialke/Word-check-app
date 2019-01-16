const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');


//EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/faviconit'));
app.use(express.urlencoded());

app.use(favicon(path.join(__dirname, '/faviconit/favi.ico')));

app.use( '/css', express.static( './css' ) );

// Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lessons',{ useNewUrlParser: true });
var db = mongoose.connection;
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    translation: String,
    characters: String,
    pronunciation: String,
    tones: [Number],
    notes: String,
});

const LessonSchema = new Schema({
    name: String,
    words: [WordSchema]
});

var Lesson = mongoose.model('Lesson', LessonSchema);
var Word = mongoose.model('Word', WordSchema);


let takeNRandomWords = async function(n){
    var words = await Word.aggregate( [ { $sample: {size: n} } ] ).exec();
    return words;
}
// get all lessons from baza here
let listLessons = async function() {
    var lessons = await Lesson.find({}, null).exec();
    return lessons;
};




app.get("/", async function (req,res) {
    var lessons = await listLessons();
    res.render('main', {
        lessons: lessons
    });
});

app.get('/add-word-form', (req, res) => {
    res.sendFile(path.join(__dirname, '/form.html'));
});

app.post("/add-word-form", (req, res) => {
    let data = req.param('data');
    let lesson = JSON.parse(data);
    console.log(lesson);

    var name = lesson.name;
    var words = lesson.words;


    var wordsDatabaseObjects = [];
    words.forEach(function(word){
        word.tones = word.tones.split(',');
        var w = new Word(word);
        w.save();
        wordsDatabaseObjects.push(w);
    });

    var l = new Lesson({name: name, words: wordsDatabaseObjects});
    l.save(function(x){});
    res.redirect('/');
})

app.get("/lesson/:id", async function (req,res) {

    var id = req.params["id"];
    var lessonY = await Lesson.findById(id).exec();
    var lenOfLesson = lessonY.words.length;
    console.log(lenOfLesson)
    res.render('lesson', {
        lesson: lessonY,
        numOfWordsHere: lenOfLesson
    });
});

app.get("/word/:id", async function (req,res) {
    var id = req.params["id"];
    console.log(id);
    var wordX = await Word.findById(id).exec();
    res.render('word', {
        word: wordX
    });
});

app.get("/random_words/:n", async function (req,res) {
    var n = req.params["n"];
    n = parseInt(n);
    var wordX = await takeNRandomWords(n);
    res.render('random_words', {
        words: wordX
    });
});

app.listen(9001, () => {
    console.log('App is starting at port', 9001)
});


