var button0 = document.getElementById('b0');
var button1 = document.getElementById('b1');
var button2 = document.getElementById('b2');
var button3 = document.getElementById('b3');
var button4 = document.getElementById('b4');
var button5 = document.getElementById('b5');
var elevator1 = document.getElementById('elevator_1');
var elevator2 = document.getElementById('elevator_2');

elevator1.flore = 0;
elevator2.flore = 0;

button0.onclick = function () {
    var flore = 0;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '300px';
        elevator1.flore = 0;
    } else {
        elevator2.style.top = '300px';
        elevator2.flore = 0;
    }
}
button1.onclick = function () {
    var flore = 1;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '240px';
        elevator1.flore = 1;
    } else {
        elevator2.style.top = '240px';
        elevator2.flore = 1;
    }
}
button2.onclick = function () {
    var flore = 2;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '180px';
        elevator1.flore = 2;
    }  else {
        elevator2.style.top = '180px';
        elevator2.flore = 2;
    }
}
button3.onclick = function () {
    var flore = 3;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '120px';
        elevator1.flore = 3;
    } else {
        elevator2.style.top = '120px';
        elevator2.flore = 3;
    }
}
button4.onclick = function () {
    var flore = 4;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '60px';
        elevator1.flore = 4;
    } else {
        elevator2.style.top = '60px';
        elevator2.flore = 4;
    }
}
button5.onclick = function () {
    var flore = 5;
    if (Math.abs(flore - elevator1.flore) <= Math.abs(flore - elevator2.flore)) {
        elevator1.style.top = '0px';
        elevator1.flore = 5;
    } else {
        elevator2.style.top = '0px';
        elevator2.flore = 5;
    }
}

