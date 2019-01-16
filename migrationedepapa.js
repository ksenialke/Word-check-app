// {'title of the lesson',[
// {
//     translation: '',
//     characters: '',
//     pronunciation: '',
//     tones:，
//      notes：
// },
// ]}
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

// Every time someone creates a new Mushroom mongoose is gonna place it in mushrooms collection and base it on MushroomSchema
var Lesson = mongoose.model('Lesson', LessonSchema);
var Word = mongoose.model('Word', WordSchema);

const lessons = {
    lesson17 : [
        'Seventeen',
        {
            translation: 'summer vacation',
            characters: '暑假',
            pronunciation: 'shu jia',
            tones: [3, 4]
        },
        {
            translation: 'to make an appointment',
            characters: '约',
            pronunciation: 'yue',
            tones: [1]
        }
    ],
    lesson18 : ['Eighteen'],
    lessonB3 : ['Formal Meeting. Business Chinese'],
    lesson23 : [
        'Twenty Three',
        {
            translation: 'to start school',
            characters: '开学',
            pronunciation: 'kai xue',
            tones: [1, 2]
        },
        {
            translation: 'head, teacher in charge of a class',
            characters: '班主任',
            pronunciation: 'banzhuren',
            tones: [1,3,4]
        },
        {
            translation: 'to ask, to let',
            characters: '叫',
            pronunciation: 'jiao',
            tones: [4]
        },
        {
            translation: 'to have a dinner party',
            characters: '聚餐',
            pronunciation: 'ju can',
            tones: [4, 1]
        },
        {
            translation: 'not only... but also...',
            characters: '既',
            pronunciation: 'ji',
            tones: [4]
        },
        {
            translation: 'classwide meeting',
            characters: '班会',
            pronunciation: 'banhui',
            tones: [1,4]
        },
        {
            translation: 'to communicate',
            characters: '沟通',
            pronunciation: 'goutong',
            tones: [1,1]
        },
        {
            translation: 'to register',
            characters: '报道',
            pronunciation: 'bao dao',
            tones: [4,4]
        },
        {
            translation: 'hence',
            characters: '于是',
            pronunciation: 'yushi',
            tones: [2,4]
        },
        {
            translation: 'tight, close',
            characters: '紧',
            pronunciation: 'jin',
            tones: [3]
        },
        {
            translation: 'to be next to',
            characters: '挨',
            pronunciation: '',
            tones: [1],
            notes: 'commonly used with 着'
        },
        {
            translation: 'to continue, to go on',
            characters: '接着',
            pronunciation: 'jiezhe',
            tones: [1,0]
        },
        {
            translation: 'measure word for meals',
            characters: '顿',
            pronunciation: 'dun',
            tones: [4]
        },
        {
            translation: 'unloudly',
            characters: '小声',
            pronunciation: 'xiaosheng',
            tones:[3,1],
            notes: "🤫"
        },
        {
            translation: 'haha',
            characters: '哈哈',
            pronunciation: 'haha',
            tones:[1,1]
        },
        {
            translation: 'once upon a time',
            characters: '从前',
            pronunciation: 'congqian',
            tones:[2,2]
        },
        {
            translation: 'nickname',
            characters: '外号',
            pronunciation: 'waihao',
            tones:[4,4]
        },
        {
            translation: 'greedy',
            characters: '馋',
            pronunciation: 'chan',
            tones:[2]
        },
        {
            translation: 'wife',
            characters: '老婆',
            pronunciation: 'laopo',
            tones:[3,0]
        },
        {
            translation: 'no matter',
            characters: '不管。。。都',
            pronunciation: 'buguan...dou',
            tones:[4,3,1]
        },
        {
            translation: 'banquet, feast',
            characters: '宴会',
            pronunciation: 'yanhui',
            tones:[4,4]
        },
        {
            translation: 'room',
            characters: '屋子',
            pronunciation: 'wuzi',
            tones:[1,0]
        },
        {
            translation: 'milk',
            characters: '牛奶',
            pronunciation: 'niunai',
            tones:[2,3]
        },
        {
            translation: 'pancake',
            characters: '烙饼',
            pronunciation: 'laobing',
            tones:[4,3],
            notes:'made of dough seasoned with oil and salt 🥞'
        },
        {
            translation: 'to violate',
            characters: '犯',
            pronunciation: 'fan',
            tones:[4]
        },
        {
            translation: 'must',
            characters: '非。。。不可',
            pronunciation: 'fei...bu ke',
            tones:[1,4,3]
        },
        {
            translation: 'to touch',
            characters: '摸',
            pronunciation: 'mo',
            tones:[1]
        },
        {
            translation: 'face',
            characters: '脸',
            pronunciation: 'lian',
            tones:[3]
        },
        {
            translation: 'dare',
            characters: '敢',
            pronunciation: 'gan',
            tones:[3]
        },
        {
            translation: 'cruel, heartless',
            characters: '狠心',
            pronunciation: 'henxin',
            tones:[3,1]
        },
        {
            translation: 'steamed bread',
            characters: '馒头',
            pronunciation: 'mantou',
            tones:[2,0]
        },
        {
            translation: 'as if, seem',
            characters: '似的',
            pronunciation: 'shide',
            tones:[4,0]
        },
        {
            translation: 'daughter',
            characters: '女儿',
            pronunciation: 'nuer',
            tones:[3,2]
        },
        {
            translation: 'to get a beating',
            characters: '挨打',
            pronunciation: 'aida',
            tones:[2,3]
        },
        {
            translation: 'to cry',
            characters: '哭',
            pronunciation: 'ku',
            tones:[1]
        },
        {
            translation: 'to hug, to embrace',
            characters: '抱',
            pronunciation: 'bao',
            tones:[4]
        },
        {
            translation: 'to wipe, to clean',
            characters: '擦',
            pronunciation: 'ca',
            tones:[1]
        },
        {
            translation: 'tear',
            characters: '眼泪',
            pronunciation: 'yanlei',
            tones:[3,4]
        },
        {
            translation: 'sound, voice',
            characters: '声音',
            pronunciation: 'shengyin',
            tones:[1,1]
        },
        {
            translation: 'bread',
            characters: '面包',
            pronunciation: 'mianbao',
            tones:[4,1]
        }
    ]
};

Object.keys(lessons).forEach(function(key) {
    var lesson = lessons[key];
    var name = lesson[0];
    var words = lesson.slice(1);

    var wordsDatabaseObjects = [];
    words.forEach(function(word){
        var w = new Word(word);
        w.save();
        wordsDatabaseObjects.push(w);
    });

    var l = new Lesson({name: name, words: wordsDatabaseObjects});
    l.save(function(x){});
});