class Match {
    constructor(player1, player2, round, bracket, correct) {
        document.getElementById('playerOneName').innerText = player1;
        document.getElementById('playerTwoName').innerText = player2;
        document.getElementById('round-title').innerText = round;
        document.getElementById('tournament-title').innerText = bracket;
        document.getElementById('playerOneImg').src = `media/players/${player1}.png`;
        document.getElementById('playerTwoImg').src = `media/players/${player2}.png`;
        if(correct == 1){
            document.getElementById('playerOne').classList.add('correct');
            document.getElementById('playerTwo').classList.remove('correct');
        }
        else{
            document.getElementById('playerTwo').classList.add('correct');
            document.getElementById('playerOne').classList.remove('correct');
        };
    }
}

let playerOneProfile = document.getElementById('playerOne');
let playerTwoProfile = document.getElementById('playerTwo');
let playerOneImg = document.getElementById('playerOneImg');
let playerTwoImg = document.getElementById('playerTwoImg');
playerOneProfile.addEventListener('click', () => {
    document.getElementById('nextBtn').classList.add('btnFadeIn');
    document.getElementById('nextBtn').classList.remove('btnVanish');
    if(playerOneProfile.classList.contains('correct')){
        playerTwoProfile.classList.add('incorrectAns');
        playerTwoProfile.classList.remove('player')
        playerOneProfile.classList.remove('player')
        playerOneImg.classList.add('correctAns');
    } else{
        playerTwoImg.classList.add('correctAns');
        playerTwoProfile.classList.remove('player');
        playerOneProfile.classList.add('incorrectAns');
        playerOneProfile.classList.remove('player');
    }
})
playerTwoProfile.addEventListener('click', () => {
    document.getElementById('nextBtn').classList.add('btnFadeIn');
    document.getElementById('nextBtn').classList.remove('btnVanish');
    if(playerTwoProfile.classList.contains('correct')){
        playerOneProfile.classList.add('incorrectAns');
        playerOneProfile.classList.remove('player');
        playerTwoProfile.classList.remove('player')
        playerTwoImg.classList.add('correctAns');
    } else{
        playerOneImg.classList.add('correctAns');
        playerOneProfile.classList.remove('player');
        playerTwoProfile.classList.add('incorrectAns');
        playerTwoProfile.classList.remove('player');
    }
})

let currentNum = 30;
let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * currentNum) + 1;
    nextBtn.classList.add('btnVanish');
    nextBtn.classList.remove('btnFadeIn');
    playerOneProfile.classList.add('player');
    playerTwoProfile.classList.add('player');
    document.querySelectorAll('.player-container > div').forEach(el => el.classList.remove('incorrectAns'));
    document.querySelectorAll('img').forEach(el => el.classList.remove('correctAns'));
    matches();
})

window.addEventListener('load', () => {matches();});

let randomNum = Math.floor(Math.random() * currentNum) + 1;
function matches(){
    switch(randomNum){
        case 1: new Match("Mango", "Hungrybox", "Losers Top 12", "Genesis 8", 2); break;
        case 2: new Match("aMSa", "Axe", "Losers Eighths", "MAJOR UPSET", 1); break;
        case 3: new Match("Lucky", "PewPewU", "Winners Quarters", "Super Smash Con 2018", 2); break;
        case 4: new Match("Aklo", "Spark", "Losers Top 32", "Genesis 9", 2); break;
        case 5: new Match("aMSa", "Aklo", "Losers Semis", "Shine 2023", 2); break;
        case 6: new Match("Polish", "Axe", "Winners Quarters", "Tipped Off 14", 1); break;
        case 7: new Match("Magi", "SDJ", "Winners Quarters", "Low Tide City 2023", 2); break;
        case 8: new Match("Cody Schwab", "Jmook", "Losers Eighths", "Scuffed World Tour", 2); break;
        case 9: new Match("Zain", "Moky", "Losers Eighths", "Apex 2023", 1); break;
        case 10: new Match("KoDoRiN", "Soonsay", "Group C Pools", "Smash Summit 14", 2); break;
        case 11: new Match("Cody Schwab", "Hungrybox", "Winners Semis", "GOML 2022", 2); break;
        case 12: new Match("Wizzrobe", "Leffen", "Winners Semis", "Smash Summit 12", 1); break;
        case 13: new Match("SFAT", "Ginger", "Losers Quarters", "Mainstage 2021", 1); break;
        case 14: new Match("SluG", "Aklo", "Losers Semis", "The Function", 2); break;
        case 15: new Match("Hungrybox", "Wizzrobe", "Losers Semis", "Riptide 2021", 1); break;
        case 16: new Match("Gahtzu", "2Saint", "Losers Quarters", "Pound 2021 Online", 2); break;
        case 17: new Match("Axe", "Zain", "Losers Quarters", "LACS 3", 1); break;
        case 18: new Match("Spark", "SFAT", "Losers Quarters", "GOML Online 2020", 2); break;
        case 19: new Match("Zain", "Plup", "Winners Semis", "Pound 2020 Online", 1); break;
        case 20: new Match("Mango", "Plup", "Winners Quarters", "Smash Summit 9", 1); break;
        case 21: new Match("Trif", "Solobattle", "Losers Semis", "Valhalla III", 2); break;
        case 22: new Match("S2J", "Trif", "Losers Eighths", "Dreamhack Rotterdam 2019", 1); break;
        case 23: new Match("Lucky", "Wizzrobe", "Losers Top 16", "The Big House 9", 1); break;
        case 24: new Match("Leffen", "Moky", "Winners Quarters", "Shine 2019", 2); break;
        case 25: new Match("aMSa", "Mango", "Winners Quarters", "Smash'N'Splash 5", 1); break;
        case 26: new Match("Cody Schwab", "Ginger", "Losers Semis", "The Script: Episode 2", 2); break;
        case 27: new Match("Zain", "S2J", "Winners Finals", "DPOTG 2018", 2); break;
        case 28: new Match("Leffen", "Axe", "Losers Quarters", "Smash Summit 7", 1); break;
        case 29: new Match("Duck", "Hungrybox", "Grand Finals - Set 1", "Canada Cup 2018", 1); break;
        case 30: new Match("Mango", "Hungrybox", "Group 1 Pools", "Smash Summit 6", 1); break;
    }
}