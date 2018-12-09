const itemsList = document.querySelector('.categories');

// Measuring how big is the lessons object and getting its length
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
let size = Object.size(lessons);

// Getting lesson names
let lessonNames = Object.keys(lessons);
let fileNames = [];
for(i=0; i<lessonNames.length; i++) {
    fileNames.push(eval(`lessons.${lessonNames[i]}[0]`));  // eval is king
}

// Posting names onto the page
function populateList(lessons = [], itemsList) {
    let toHTML = '';
    for(i=0; i<size; i++) {
        toHTML += `<li>Lesson ${fileNames[i]}</li>`;
    }
    itemsList.innerHTML = toHTML
}

populateList(lessons, itemsList);