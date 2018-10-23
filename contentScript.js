let current
let linkArray = []
let pointer
function search (str) {
    //change colors back
    pointer = 0
    if(linkArray.length != 0){
        linkArray.forEach(function(elem) {
            elem.style.backgroundColor = ""
        })
    }
    //empty linkArray
    linkArray = []
    //push new links
    for (let a of document.querySelectorAll("a")) {
        let lowerCase = a.textContent.toLowerCase()
        if (lowerCase.includes(str.toLowerCase())) {
            a.style.backgroundColor = "#FF99FF"
            linkArray.push(a)
        }
    }
    if(linkArray.length != 0){
        newCurrent()
    }else{
        current = null;
    }
  }

//set new active link and scroll to it
function newCurrent () {
    current = linkArray[pointer];
    current.style.backgroundColor = "#66FFFF"
    current.scrollIntoView()
    window.scrollBy(0, -150);
}

function enter () {
    if(current != null){
        current.click()
    }
}

function next () {
    pointer ++
    current.style.backgroundColor = "#FF99FF"
    newCurrent()
}

function previous () {
    pointer --
    current.style.backgroundColor = "#FF99FF"
    newCurrent()
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.word){
            if (request.word.length >= 3){
                search(request.word)
            }
        }
        if (request.enter){
            enter()
        }
        if (request.next) {
            next()
        }
        if(request.previous){
            previous()
        }
});