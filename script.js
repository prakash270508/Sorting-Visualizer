const arrBtn = document.getElementById("arrBtn");
const bblSort = document.getElementById("bblSort");
const selectionSort = document.getElementById("selectionSort");
const main = document.getElementById("main");
let bars = [];

arrBtn.addEventListener("click", () => {
  main.innerHTML = "";
  bars = new Array(100);
  for (let i = 0; i < 100; i++) {
    bars[i] = Math.floor(Math.random() * 300);
    let barElement = document.createElement("div");
    barElement.classList.add("bar");
    barElement.style.height = bars[i] + "px";
    main.appendChild(barElement);
  }
});

function swap(a, b) { 
  return new Promise((resolve) => {
    setTimeout(() => {
      let temp = bars[a];
      bars[a] = bars[b];
      bars[b] = temp;
      let barsElements = document.getElementsByClassName("bar");
      barsElements[a].style.height = bars[a] + "px";
      barsElements[a].style.backgroundColor = 'red';
      barsElements[b].style.height = bars[b] + "px";
      barsElements[b].style.backgroundColor = 'white';
      resolve();
    }, 5);
  });
}

bblSort.addEventListener('click' , async function(){
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
          if (bars[j] > bars[j + 1]) {
            await swap(j, j + 1);
          }
        }
      }
})


selectionSort.addEventListener('click' , async function(){
  for (let i = 0; i < bars.length; i++) {
    let midIndex = i
      for (let j = 0; j < bars.length; j++) {
        if (bars[j] > bars[midIndex]) {
          midIndex = j
        }
        await swap(midIndex, i)
      }
    }
})
