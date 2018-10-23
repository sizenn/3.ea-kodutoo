let findBtn = document.getElementById('changeColor');
let input = document.getElementById('input');

findBtn.onclick = function(element) {
    search(input.value)
};

function search (str) {
    console.log(str)
    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes(str)) {
          console.log(a.textContent)
        }
      }
  }