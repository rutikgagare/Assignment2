function xyz(){
    console.log("hello");
}

let getData = ()=>{ fetch('index.json').then((response) => {
    return response.json();
}).then((catData) => {

    // top3 bottom3 2019

    function topbot2019() {
        let top1 = document.getElementById('top1');
        let bot1 = document.getElementById('bot1');

        catData.sort(function (a, b) { return a.scorePercent2019 - b.scorePercent2019 });
        let temp = catData.slice(0, 3);

        for (item in temp) {
            top1.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }

        catData.sort(function (a, b) { return b.scorePercent2019 - a.scorePercent2019 });
        temp = catData.slice(0, 3);

        for (item in temp) {
            bot1.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }
    }

    // top3 bottom3 2014
    function topbot2024() {
        let top2 = document.getElementById('top2');
        let bot2 = document.getElementById('bot2');

        catData.sort(function (a, b) { return a.scorePercent2024 - b.scorePercent2024 });
        temp = catData.slice(0, 3);

        for (item in temp) {
            top2.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }

        catData.sort(function (a, b) { return b.scorePercent2024 - a.scorePercent2024 });
        temp = catData.slice(0, 3);

        for (item in temp) {
            bot2.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }
    }

    function accdec() {
        let top3 = document.getElementById('top3');
        let bot3 = document.getElementById('bot3');

        let temp = catData;
        for (item in temp) {
            temp[item].diff = (temp[item].scorePercent2024 - temp[item].scorePercent2019);
        }

        temp.sort(function (a, b) { return a.diff - b.diff });
        let temp_ = temp.slice(0, 3);

        for (item in temp_) {
            top3.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }

        temp.sort(function (a, b) { return b.diff - a.diff });
        temp_ = temp.slice(0, 3);

        for (item in temp_) {
            bot3.innerHTML += `<h3>${temp[item].skills}</h3>`;
        }
    }

    topbot2019();
    topbot2024();
    accdec();
})};

getData();


let getRank = ()=>{fetch('index.json').then((response) => {
    return response.json();
}).then((catData) => {

    console.log(catData);

    let userInput = document.getElementById('userinput');
    let output19 = document.getElementById('out1');

    let rank19 = 0;

    catData.sort(function (a, b) { return a.scorePercent2019 - b.scorePercent2019 });
    console.log(catData);

    let cnt = 0;
    for (item in catData) {
        cnt++;
        if (catData[item].skills === userInput.value) {
            rank19 = cnt;
        }
    }
    output19.textContent = rank19;

    let output24 = document.getElementById('out2');
    let rank24 = 0;

    catData.sort(function (a, b) { return a.scorePercent2024 - b.scorePercent2024 });
    console.log(catData);

    cnt = 0;
    for (item in catData) {
        cnt++;
        if (catData[item].skills === userInput.value) {
            rank24 = cnt;
            break;
        }
    }
    output24.textContent = rank24;
})};




