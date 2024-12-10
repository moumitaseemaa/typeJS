let type = document.querySelector(".type");

let typeContent = type.innerHTML;
console.log(typeContent);

type.innerHTML = "";
let typeCount = -1;

function typeJs() {
  typeCount++;
  type.innerHTML += typeContent.charAt(typeCount);
  console.log(typeCount);
  if (typeCount == typeContent.length) {
    // clearInterval(typeStop)
    type.innerHTML = "";
    typeCount = -1;
  }
}

let typeStop = setInterval(() => {
  typeJs();
}, 1000);
