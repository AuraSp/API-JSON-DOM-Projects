function createCard(img, name, nickname, status, occupation) {
    let colDiv = document.createElement("div");
    colDiv.className = "col-4";
    let card = document.createElement("div");
    card.className = "card";
    let imgC = document.createElement("img");
    imgC.src = img;
    imgC.className = "card-img-top w-100";
    imgC.alt = img;
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let cardTitle = document.createElement("h5");
    cardTitle.textContent = name;
    let p1 = document.createElement("p");
    p1.textContent = nickname;
    let p2 = document.createElement("p");
    p2.textContent = status;
    let p3 = document.createElement("p");
    p3.textContent = occupation;
    cardBody.append(cardTitle, p1, p2, p3);
    card.append(imgC, cardBody);
    colDiv.append(card);
    return colDiv;
}
function addCard(card) {
    let row = document.querySelector("#row");
    row.append(card);
}

const getRandomCharacter = async () => {
    try {
        let response = await fetch(`https://www.breakingbadapi.com/api/character/random`);
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

let btnRandom = document.querySelectorAll("button")[0];
btnRandom.addEventListener("click", function () {
    getRandomCharacter().then(data => {
        let { img, name, nickname, status, occupation } = data[0];
        let card = createCard(img, name, nickname, status, occupation);
        addCard(card);
    })
})


const getCharacterId = async (id) => {
    try {
        let response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

let btnById = document.getElementById('id');
btnById.addEventListener('click', function () {
    let id = +prompt("Enter ID");
    getCharacterId(id).then(data => {
        let { img, name, nickname, status, occupation } = data[0];
        let card = createCard(img, name, nickname, status, occupation);
        addCard(card);
    })
});

let btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', function (throwAwayNode) {
    var row = document.getElementById('row');
    let div = document.getElementsByClassName('col-4')[0];
    throwAwayNode = row.removeChild(div);
});

let btnDelete2 = document.getElementById('delete2');
btnDelete2.addEventListener('click', function () {
    let div = document.getElementsByClassName('col-4')[0];
    div.remove();
});

let btnDelete3 = document.getElementById('delete3');
btnDelete3.addEventListener('click', function () {
    document.querySelector('#row').innerHTML = "";
    console.log(row);
});

const getCharacterAll = async () => {
    try {
        let response = await fetch(`https://www.breakingbadapi.com/api/characters/`);
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

let btnAll = document.getElementById('all');
btnAll.addEventListener('click', function () {
    getCharacterAll().then(data => {
        data.forEach((item) => {
            let { img, name, nickname, status, occupation } = item;
            let card = createCard(img, name, nickname, status, occupation);
            addCard(card);
        });
    });
})

const getCharacterByName = async (name) => {
    try {
        let response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

let btnName = document.getElementById('byName');
btnName.addEventListener('click', function () {
    let name = +prompt('Name', '');
    getCharacterByName(name).then(data => {
        data.forEach((item) => {
            let { img, name, nickname, status, occupation } = item;
            let card = createCard(img, name, nickname, status, occupation);
            addCard(card);
        });
    });
});