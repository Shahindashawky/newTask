
$(window).on('load', function () {

  $('.loading').fadeOut("slow");
});
var pageWidth, pageHeight;
var basePage = {
  width: 1800,
  height: 900,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};
const button = document.querySelector(".img5");
const ch = document.querySelector(".btn");
const ch1 = document.querySelector(".btn1");
const ch2 = document.querySelector(".btn2");


var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

var btn = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("cls")[0];
var span2 = document.getElementsByClassName("cls2")[0];

var correct = ["eraser", "ruler", "pencil", "book", "pen"];
var divItems = document.getElementsByClassName("choices");
var thisitem;
var classname;
var additem;
let c = 0;
var right = document.createElement('img');
right.src = './assets/img/right.png';
var wrong = document.createElement('img');
wrong.src = './assets/img/wrong.png';




btn.onclick = function () {
  modal.style.display = "block";

}
btn2.onclick = function () {
  modal2.style.display = "block";

}
span.onclick = function () {
  modal.style.display = "none";

}
span2.onclick = function () {
  modal2.style.display = "none";

}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
  if (event.target == modal2) {
    modal2.style.display = "none";

  }
}




function selected(item) {
  this.clear();
  item.style.backgroundColor = '#0fa0c5';
  item.style.color = '#fff';
  if (ch.disabled == true) {
    item.style.backgroundColor = '#fff';
    item.style.color = '#000';
  }
  thisitem = item.getAttribute('value');
  choise = item.getAttribute('id');
  classname = item.getAttribute('class');
}

function addItem(additem) {
  var element = document.getElementById(choise);


  if (additem.getAttribute('id') == "op1") {

    if (correct.includes(thisitem)) {
      document.getElementById("op1").innerHTML = "<p>" + thisitem + "</p><div class='rightwrong' id='rw'></div><audio type='audio/mp3' id='music1' src='./assets/audio/Right-answer-ding-ding-sound-effect.mp3'></audio>";
      document.getElementById('rw').appendChild(right)
      document.getElementById("music1").play();
      document.getElementById(choise).innerHTML = "";
      element.classList.remove(classname);
      c += 1;

    }
    else {
      document.getElementById("op1").innerHTML = "<p class='pp'>" + thisitem + "</p><div class='rightwrong' id='rw'></div><audio type='audio/mp3' id='music6' src='./assets/audio/fail-buzzer-04.mp3'></audio>";
      document.getElementById('rw').appendChild(wrong)
      document.getElementById("music6").play();
      $('#rw').fadeOut("slow");
      $('.pp').fadeOut("slow");

    }
    thisitem ="";
  }

  else if (additem.getAttribute('id') == "op2") {
    if (correct.includes(thisitem)) {
      document.getElementById("op2").innerHTML = "<p>" + thisitem + "</p><div class='rightwrong' id='rw1'><img src='./assets/img/right.png'></div><audio type='audio/mp3' id='music2' src='./assets/audio/Right-answer-ding-ding-sound-effect.mp3'></audio>";
      document.getElementById("music2").play();
      document.getElementById(choise).innerHTML = "";
      element.classList.remove(classname);
      c += 1;

    }
    else {
      document.getElementById("op2").innerHTML = "<p class='pp'>" + thisitem + "</p><div class='rightwrong' id='rw1'><img src='./assets/img/wrong.png'></div><audio type='audio/mp3' id='music7' src='./assets/audio/fail-buzzer-04.mp3'></audio>";
      document.getElementById("music7").play();
      $('#rw1').fadeOut("slow");
      $('.pp').fadeOut("slow");
    }
    thisitem ="";

  }
  else if (additem.getAttribute('id') == "op3") {
    document.getElementById("op3").innerHTML = "<p>" + thisitem + "</p><div class='rightwrong' id='rw2'><img src='./assets/img/right.png'></div><audio type='audio/mp3' id='music3' src='./assets/audio/Right-answer-ding-ding-sound-effect.mp3'></audio>";
    if (correct.includes(thisitem)) {
      document.getElementById("music3").play();
      document.getElementById(choise).innerHTML = "";
      element.classList.remove(classname);
      c += 1;

    }
    else {
      document.getElementById("op3").innerHTML = "<p class='pp'>" + thisitem + "</p><div class='rightwrong' id='rw2'><img src='./assets/img/wrong.png'></div><audio type='audio/mp3' id='music8' src='./assets/audio/fail-buzzer-04.mp3'></audio>";
      document.getElementById("music8").play();
      $('#rw2').fadeOut("slow");
      $('.pp').fadeOut("slow");
    }
    thisitem ="";

  }
  else if (additem.getAttribute('id') == "op4") {
    document.getElementById("op4").innerHTML = "<p>" + thisitem + "</p><div class='rightwrong' id='rw3'><img src='./assets/img/right.png'></div><audio type='audio/mp3' id='music4' src='./assets/audio/Right-answer-ding-ding-sound-effect.mp3'></audio>";
    if (correct.includes(thisitem)) {
      document.getElementById("music4").play();
      document.getElementById(choise).innerHTML = "";
      element.classList.remove(classname);
      c += 1;

    }
    else {
      document.getElementById("op4").innerHTML = "<p class='pp'>" + thisitem + "</p><div class='rightwrong' id='rw3'><img src='./assets/img/wrong.png'></div><audio type='audio/mp3' id='music9' src='./assets/audio/fail-buzzer-04.mp3'></audio>";
      document.getElementById("music9").play();
      $('#rw3').fadeOut("slow");
      $('.pp').fadeOut("slow");

    }
    thisitem ="";

  }
  else if (additem.getAttribute('id') == "op5") {
    document.getElementById("op5").innerHTML = "<p>" + thisitem + "</p><div class='rightwrong' id='rw4'><img src='./assets/img/right.png'></div><audio type='audio/mp3' id='music5' src='./assets/audio/Right-answer-ding-ding-sound-effect.mp3'></audio>";
    if (correct.includes(thisitem)) {
      document.getElementById("music5").play();
      document.getElementById(choise).innerHTML = "";
      element.classList.remove(classname);
      c += 1;

    }
    else {
      document.getElementById("op5").innerHTML = "<p class='pp'>" + thisitem + "</p><div class='rightwrong' id='rw4'><img src='./assets/img/wrong.png'></div><audio type='audio/mp3' id='music10' src='./assets/audio/fail-buzzer-04.mp3'></audio>";
      document.getElementById("music10").play();
      $('#rw4').fadeOut("slow");
      $('.pp').fadeOut("slow");

    }
    thisitem ="";

  }
  if (correct.length == c) {
    button.disabled = true;
    ch.disabled = true;
    ch1.disabled = true;
    ch2.disabled = true;
  }
}
function clear() {

  for (var i = 0; i < divItems.length; i++) {
    var item = divItems[i];
    item.style.backgroundColor = 'white';
    item.style.color = '#000';

  }
}
function reset() {
  button.disabled = false;
  ch.disabled = false;
  ch1.disabled = false;
  ch2.disabled = false;

  document.getElementById("op1").innerHTML = "";
  document.getElementById("op2").innerHTML = "";
  document.getElementById("op3").innerHTML = "";
  document.getElementById("op4").innerHTML = "";
  document.getElementById("op5").innerHTML = "";

  document.getElementById("ch2").classList.add("choices");
  document.getElementById("ch2").innerHTML = "eraser";
  document.getElementById("ch3").classList.add("choices");
  document.getElementById("ch3").innerHTML = "ruler";
  document.getElementById("ch6").classList.add("choices");
  document.getElementById("ch6").innerHTML = "pencil";
  document.getElementById("ch7").classList.add("choices");
  document.getElementById("ch7").innerHTML = "book";
  document.getElementById("ch8").classList.add("choices");
  document.getElementById("ch8").innerHTML = "pen";



  this.clear();

}
function eye() {
  document.getElementById("op1").innerHTML = "<p> eraser </p><div class='rightwrong' id='rw'><img src='./assets/img/right.png'></div>";
  document.getElementById("op2").innerHTML = "<p> ruler </p><div class='rightwrong' id='rw1'><img src='./assets/img/right.png'></div>";
  document.getElementById("op3").innerHTML = "<p> pencil </p><div class='rightwrong' id='rw2'><img src='./assets/img/right.png'></div>";
  document.getElementById("op4").innerHTML = "<p> pen </p><div class='rightwrong' id='rw3'><img src='./assets/img/right.png'></div>";
  document.getElementById("op5").innerHTML = "<p> book </p><div class='rightwrong' id='rw4'><img src='./assets/img/right.png'></div>";

  document.getElementById("ch2").classList.remove("choices");
  document.getElementById("ch2").innerHTML = "";
  document.getElementById("ch3").classList.remove("choices");
  document.getElementById("ch3").innerHTML = "";
  document.getElementById("ch6").classList.remove("choices");
  document.getElementById("ch6").innerHTML = "";
  document.getElementById("ch7").classList.remove("choices");
  document.getElementById("ch7").innerHTML = "";
  document.getElementById("ch8").classList.remove("choices");
  document.getElementById("ch8").innerHTML = "";

  ch.disabled = true;
  ch1.disabled = true;
  ch2.disabled = true;


}

$(function () {
  var $page = $('.main');

  getPageSize();
  scalePages($page, pageWidth, pageHeight);

  $(window).resize(_.debounce(function () {
    getPageSize();
    scalePages($page, pageWidth, pageHeight);
  }, 150));


  function getPageSize() {
    pageHeight = $('#container').height();
    pageWidth = $('#container').width();
  }

  function scalePages(page, maxWidth, maxHeight) {
    var scaleX = 1, scaleY = 1;
    scaleX = maxWidth / basePage.width;
    scaleY = maxHeight / basePage.height;
    basePage.scaleX = scaleX;
    basePage.scaleY = scaleY;
    basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

    var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth) / 2));
    var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight) / 2));

    page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
  }
});
