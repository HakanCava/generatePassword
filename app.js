const form = document.getElementById("form");
const btn = document.getElementById("button");
const password = document.getElementById("password");
const icon = document.getElementById("iconic");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createPassword();
});

icon.addEventListener("click", (e) => {
  e.preventDefault();
  copyContent();
});

const createPassword = () => {
  let pswrd = "";

  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "~",
    "|",
    "}",
    "{",
    "[",
    "]",
    ":",
    ";",
    "?",
    ">",
    "<",
    ",",
    ".",
    "/",
    "-",
    "=",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lowerLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "y",
    "z",
    "x",
    "w",
  ];
  const upperLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Y",
    "Z",
    "X",
    "W",
  ];

  for (let i = 1; i <= 2; i++) {
    pswrd += symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  for (let i = 1; i <= 3; i++) {
    pswrd += numbers[Math.floor(Math.random() * numbers.length)];
  }
  
  for (let i = 1; i <= 3; i++) {
    pswrd += lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
  }
  
  for (let i = 1; i <= 2; i++) {
    pswrd += upperLetter[Math.floor(Math.random() * upperLetter.length)];
  }
 

  let pswrd1 = [...pswrd];
  pswrd1 = pswrd1.sort(() => Math.random() - 0.5).join("");
  // console.log(pswrd1);
  password.innerText = pswrd1;
  icon.innerHTML = ` <i class="fa-regular fa-copy"></i>`;
  password.style.backgroundColor = "aliceblue";
  password.style.display = "inline-block";
};

password.onmouseover = () => {
  icon.style.display = "inline-block";
};
password.onmouseout = () => {
  icon.style.display = "none";
};
icon.onmouseover = () => {
  icon.style.display = "inline-block";
};


const copyContent = () => {
  let textCopy = password.innerText;
  // console.log("clicked");
  // console.log(textCopy);
  icon.innerHTML = `<i class="fa-solid fa-check"></i>`;
  navigator.clipboard.writeText(textCopy);

};

