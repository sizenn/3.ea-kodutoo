let link

function search (str) {
    console.log(str)
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(str)) {
            link = a;
            link.scrollIntoView()
            break
        }
      }
  }
function enter () {
    console.log(link.textContent)
    console.log("here")
    link.click();
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.word){
            if (request.word !== ""){
                search(request.word)
            }
        }
        if(request.enter){
            enter()
        }
});