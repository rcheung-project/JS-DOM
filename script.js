//Your code goes here
// 1. Click the button to display your name
//Selectors
let nameBox = document.getElementById('myName');
//Function
function addName() {
  nameBox.value = "rcheung";
}  

//2. Switch lights on mouseover
//Selectors
let onTop = document.getElementById('imageOff');
//Function
function lightOn() {
  onTop.src = "./images/lighton.png";
};
//Call the event
onTop.addEventListener('mouseover', lightOn);

//3. Double click to display content
//Selectors
let double = document.querySelector('#btndbName');
let display = document.getElementById('displayPara');
function dClick() {
  display.innerText = "How are you?";
};
//Call the event
double.addEventListener('dblclick', dClick);

// 4. Traffic Lights
//Selectors
let bStop = document.getElementById('btnStop');
let bReady = document.getElementById('btnReady');
let bGo = document.getElementById('btnGo');
let turnRed = document.getElementById('stopDiv');
let turnAmber = document.getElementById('readyDiv');
let turnGreen = document.getElementById('goDiv');
function youStop() {
  turnRed.style.background = "red";
};
function youReady() {
  turnAmber.style.background = "orange";
};
function youGo() {
  turnGreen.style.background = "green";
};
//Call the events
bStop.addEventListener('click',youStop);
bReady.addEventListener('click',youReady);
bGo.addEventListener('click',youGo);


//5. Change textbox border colours
//Selectors
let borderBtn = document.getElementById('btn2Name');
let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
//Function
function chgColor() {
  firstname.style.borderColor = "orange";
  lastname.style.borderColor = "orange";
};
//Call the event
borderBtn.addEventListener('click', chgColor);


//6. validate the box [length should be more than 5 characters]
//Selectors
let subBtn = document.getElementById('btnSub2');
let userName = document.querySelector('myName2');
let errMsg = document.querySelector('errMsg');

console.log(errMsg);
function validateName() {
  if (userName === null) {
    errMsg.textContent = "Please enter Name again (minimum 8 characters"
    console.log("check again");
  }
};
//Call the event
subBtn.addEventListener('click', validateName);


// 7.create a list of hobbies
let hobbyBtn = document.getElementById('btnHobbies');
let promptAns = "";
function listHobbies() {
  for (let i = 0; i < 3; i++) {
    promptAns = prompt("Please enter 3 hobbies, one at a time", "type your hobby here...");
    let li = document.createElement('li');
    let adding = document.createTextNode(promptAns);
    li.appendChild(adding);
    document.getElementById("hobbies").appendChild(li);
  }
}

hobbyBtn.addEventListener('click', listHobbies);


// 8. Display a profile card from an object
//Object
let cat = {
  name: "Ginger",
  gender: "female",
  color: "orange"
};

//Selectors
let cardBtn = document.getElementById('btnProfile');
function showCard(){
  for (const key in cat) {
    let li = document.createElement('li');
    let adding = document.createTextNode(key + cat[key]);
    li.appendChild(adding);
    document.getElementById("displayCard").appendChild(li);
  }
};

cardBtn.addEventListener('click',showCard);



