function search (str) {
    console.log(str)
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(str)) {
          a.scrollIntoView()
          break
        }
      }
  }

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.word !== ""){
            search(request.word)
        }
});