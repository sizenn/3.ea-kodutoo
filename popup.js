let input

function sendString () {
    console.log("sending string")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"word": input.value})
      });
};

function sendEnter () {
    console.log("sending enter")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"enter": "enter"})
      });
}

document.addEventListener("DOMContentLoaded", function() {
    input = document.getElementById('input');
    input.addEventListener("input", sendString)

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            sendEnter()
            input.value = ''
        }
    });
    
});


