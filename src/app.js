import "./index.css";

window.onload = function() {
  document.querySelector("#click-me").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

// arrays
let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// getting random indexes.
let whoIndex = Math.floor(Math.random() * who.length);
let whatIndex = Math.floor(Math.random() * what.length);
let whenIndex = Math.floor(Math.random() * when.length);

function generateExcuse() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
}
