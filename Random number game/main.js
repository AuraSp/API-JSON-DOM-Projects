
$(document).ready(function () {
    $('html').mousemove( (e) => {
        $('#cursor').css({left: e.clientX, top: e.clientY});
        $('.cursorInner').css({left: e.clientX, top: e.clientY});
    });
});

//Counter space
let counter = 0;
//Random number generator
var randomNumber = function() {
    return Math.floor(Math.random() * 200);
}

console.log(randomNumber());

//To see random generated numbers
var btn = document.getElementsByClassName('seeNumber');
btn = addEventListener('onclick', change_text);

function change_text() {
    document.getElementById("getNumber").innerHTML = `Generated random number : ${randomNumber()}`;
}

//Controlling given numbers
function check_number() {
    var enteredNr = document.querySelector('[name="searchText"]').value;
    document.getElementById("getNumber").innerHTML = '';

    //BIGGER
    if (enteredNr > randomNumber() && enteredNr > 0) {
        //If entered more than 3 digits
        if (enteredNr.length > 3) {
            alert('Must be max 3 digits and no blank spaces');
        }

        counter++;
        console.log(enteredNr);
        document.getElementById("getAnswer").innerHTML = `You tried to guess - ${enteredNr} when generated number was - ${randomNumber()}. Ahhh..! Try again?`;

        //LESS
    } else if (enteredNr < randomNumber() && enteredNr > 0) {
        counter++;
        console.log(randomNumber());
        document.getElementById("getAnswer").innerHTML = `You tried to guess - ${enteredNr} when generated number was - ${randomNumber()}... Maybe again?`;

        //EQUAL
    } else if (enteredNr == randomNumber()) {
        counter++;
        console.log(true);
        document.getElementById("getAnswer").innerHTML = `You tried to guess - ${enteredNr} when generated number was - ${randomNumber()}... WOOHOOOO!!`;

        //If entered nothing
    } else if (enteredNr === '') {
        alert('Good try! Write only numbers with max 3 digits and no blank spaces');
    };

    document.getElementsByTagName('input')[0].value = '';

    //Counter
    document.getElementById("my-Counter").innerHTML = '&nbsp' + counter + '&nbsp';
    document.getElementById("my-Counter").style.borderBottom = '2px solid black';

    randomNumber().reset();
};


//Reset given information
var reset = document.getElementById('resetGame');
reset.addEventListener('click', function () {
    document.getElementById('my-Counter').innerHTML = '&nbsp' + 0 + '&nbsp';
    document.getElementById("getAnswer").innerHTML = '';
    document.getElementById("getNumber").innerHTML = '';
    console.clear();
});