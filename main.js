// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const cellChanger = document.querySelectorAll ("cell")
const colorPicker = document.querySelectorAll(".color")
const currentColor = document.querySelector("#current-color")

for (let color of colorPicker){
  color.addEventListener("click",(event)=> {
    color.style.background = currentColor.style.background
  })
}

for (let cell of cellChanger){
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background
  })
}