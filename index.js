document.getElementById("button").addEventListener("click", (e) => {
  fetch("http://localhost:5000")
    .then((res) => res.json())
    .then((data) => {
      data.map(e => {
       const doc = document.createElement('p')
       doc.innerText = `${e.id} : ${e.title}`;
       document.getElementById('todo').appendChild(doc)
      })
    });
});
document.getElementById("button").addEventListener("mousedown", (e) => {
  e.target.style.boxShadow = "inset 2px 2px 4px black, inset -1px -1px 5px white";
  e.target.style.scale = "0.95";
});
document.getElementById("button").addEventListener("mouseup", (e) => {
  e.target.style.boxShadow = "inset 1px 1px 4px white, 2px 2px 4px black";
  e.target.style.scale = "1";
});