let input

function sendString () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"word": input.value})
      });
};

function sendEnter () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"enter": "enter"})
      });
}

function sendNext () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"next": "next"})
      });
}

function sendPrevious () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"previous": "previous"})
      });
}

document.addEventListener("DOMContentLoaded", function() {
    input = document.getElementById('input');
    input.addEventListener("input", sendString)
    input.focus()

    input.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            sendEnter()
            input.value = ''
        }
        if (event.ctrlKey && event.keyCode == 78){
            sendNext()
        }
        if (event.ctrlKey && event.keyCode == 66){
            sendPrevious()
        }
    });
    
});


