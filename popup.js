let input

function send () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"word": input.value})
      });
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("click", send);
    input = document.getElementById('input');
});