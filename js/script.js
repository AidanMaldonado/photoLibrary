//Getting Id's for buttons from the dom
let cityNav = document.querySelector('#city');
let beachNav = document.querySelector('#beach');
let mountainNav = document.querySelector('#mountain');
let showNav = document.querySelector('#show');
let city = document.querySelector('.city');
let beach = document.getElementsByClassName('.beach');
let mountain = document.querySelector('.mounntain');

//Event listeners for each button
beachNav.addEventListener("click", clickTagBeach);
cityNav.addEventListener("click", clickTagCity);
mountainNav.addEventListener("click", clickTagMountain);
showNav.addEventListener("click", clickTagMain);

//Functions that hide the respective tags for each button click
function clickTagMain () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "";
    document.getElementsByClassName("mountain")[i].style.display = "";
    document.getElementsByClassName("beach")[i].style.display = "";
  }
}

function clickTagBeach () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "none";
    document.getElementsByClassName("mountain")[i].style.display = "none";
    document.getElementsByClassName("beach")[i].style.display = "";
  }
}

function clickTagCity () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "";
    document.getElementsByClassName("mountain")[i].style.display = "none";
    document.getElementsByClassName("beach")[i].style.display = "none";
  }
}

function clickTagMountain () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "none";
    document.getElementsByClassName("mountain")[i].style.display = "";
    document.getElementsByClassName("beach")[i].style.display = "none";
  }
}
