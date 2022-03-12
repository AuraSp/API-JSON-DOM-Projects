
//siunciam duomenis is githubo//
fetch('https://aurasp.github.io/Generator-Rokas-Aura/data.json')
//tada norim gauti atsakyma is response.json(), kad gaudytu JSON.json//
  .then(response => response.json())
  //norime gauti duomenis, sukuriam pavadinima 'dataLoad'
  .then(result => dataLoad(result));

  //sugalvojam kintamaji, kuriame gausime rezultata//
let data;

function randomNum() { //pasinaudojus random galime gauti is .json kazkuri objekta! data.length - is tiek kiek masyve yra objektu (siuo metu 7), funkcija random parenka kazkuri viena savo nuoziura//
  return Math.floor(Math.random() * data.length);
}

//stai cia gauname konsoleje visus egzistuojancius .json faile objektus
function dataLoad(result) {
  data = result;
  console.log(data);
};

//cia generuojame nuotraukas i html panaudojus .json failui sukurta kintamaji, kuriame bus tie duomenis(kadangi sujungeme ji per function dataLoad(result)...) //
function generate() {
  // .src ir .title yra .json faile nurodyti objekto pavadinimai, juos privalome nurasyti tokius kokius sukureme, kitaip negausim duomenu
  document.getElementById('img').src = data[randomNum()].src;
  document.getElementById('message').innerHTML = data[randomNum()].title;

  //papildomi dizaino stiliai//
  document.getElementById('message').style.fontWeight = 'bold';
  document.getElementById('message').style.borderWidth = '1px';
  document.getElementById('message').style.borderStyle = 'solid';
  document.getElementById('message').style.borderColor = 'white';
  document.getElementById('message').style.backgroundColor = 'rgba(58, 58, 58, 0.548)';
}


//particles animacija, NEKREIPTI DEMESIO! NESUSIJE SU DATA.JSON
function starts() {
  const count = 400;
  const fallingArea = document.querySelector('section');
  var i = 0;

  while (i < count) {
    const particles = document.createElement('particles');
    var width = Math.floor(Math.random() * innerWidth);
    var height = Math.floor(Math.random() * innerHeight);

    particles.style.left = width + 'px';
    particles.style.top = height + 'px';
    particles.style.width = Math.random() + 'px';
    particles.style.height = Math.random() + 'px';
    particles.style.animationDuration = 2 + Math.random() + 's';
    fallingArea.appendChild(particles);
    i++;
  }
}
starts();
