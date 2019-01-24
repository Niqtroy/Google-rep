var myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome To My Javascript';

document.querySelector('#search').onclick = function(){
        alert('Tell me, how can i help...?');
    }
document.querySelector('#lucky').onclick = function(){
    alert('Do  you feel lucky too!!!')
}

var myImg = document.querySelector('img');
myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if (mySrc ==='img/images.jpg'){
        myImg.setAttribute('src', 'img/images2.jpg');
    }
    else{
        myImg.setAttribute('src', 'img/images.jpg');
    }
}

var theButton = document.querySelector('button');
var headd = document.querySelector('h3')

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    headd.textContent = 'Enkay  is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Enkay is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
/*
let name = "Niquel";
alert(`hello, ${1}`);
alert(`hello, ${"name"}`);
alert(`hello, ${name}`);*/