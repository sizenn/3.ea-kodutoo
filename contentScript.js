let current
let linkArray = []
function search (str) {
    //change colors back
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
        current = linkArray[0];
        current.style.backgroundColor = "#66FFFF"
        current.scrollIntoView()
        window.scrollBy(0, -150);
    }else{
        current = null;
    }
    console.log(linkArray)
  }
function enter () {
    if(current != null){
        current.click();
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.word){
            if (request.word.length >= 3){
                search(request.word)
            }
        }
        if(request.enter){
            enter()
        }
});