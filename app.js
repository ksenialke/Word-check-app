const itemsList = document.querySelector('.categories');

// Getting lesson names
let lessonNames = Object.keys(lessons);
let fileNames = [];
for(i=0; i<lessonNames.length; i++) {
    fileNames.push(eval(`lessons.${lessonNames[i]}[0]`));  // eval is king
}

// Posting names onto the page
function populateList(lessons = [], itemsList) {
    let toHTML = '';
    for(i=0; i<lessonNames.length; i++) {
        toHTML += `<li id="${i}" onClick ="replyClick(this.id)"><a href="lesson.html">Lesson ${fileNames[i]}</a></li>`;
    }
    itemsList.innerHTML = toHTML
}

populateList(lessons, itemsList);

function replyClick(clicked_id) {
    return document.getElementById(clicked_id).textContent;
}
