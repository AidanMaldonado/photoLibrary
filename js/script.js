//Getting Id's for buttons from the dom
let cityNav = document.querySelector('#city');
let beachNav = document.getElementById('beach');
let mountainNav = document.querySelector('#mountain');
let city = document.querySelector('.city');
let beach = document.getElementsByClassName('.beach');
let mountain = document.querySelector('.mounntain');

beachNav.addEventListener("click", clickTagBeach);

function clickTagBeach () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "none";
    document.getElementsByClassName("mountain")[i].style.display = "none";
    document.getElementsByClassName("beach")[i].style.display = "";
  }
}

cityNav.addEventListener("click", clickTagCity);

function clickTagCity () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "";
    document.getElementsByClassName("mountain")[i].style.display = "none";
    document.getElementsByClassName("beach")[i].style.display = "none";
  }
}

mountainNav.addEventListener("click", clickTagMountain);

function clickTagMountain () {
  for(let i = 0; i < 3; i++) {
    document.getElementsByClassName("city")[i].style.display = "none";
    document.getElementsByClassName("mountain")[i].style.display = "";
    document.getElementsByClassName("beach")[i].style.display = "none";
  }
}


/*
const clickEvent = () => {
  beach.style.visibility = "hidden";
};

cityNav.append(clickEvent);
*/
