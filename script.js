class Match {
    constructor(player1, player2, round, bracket, correct) {
        document.getElementById('playerOneName').innerText = player1;
        document.getElementById('playerTwoName').innerText = player2;
        document.getElementById('round-title').innerText = round;
        document.getElementById('tournament-title').innerText = bracket;
        document.getElementById('playerOneImg').src = `media/players/${player1}.png`;
        document.getElementById('playerTwoImg').src = `media/players/${player2}.png`;
        if(correct == 1){
            document.getElementById('playerOne').classList.add('correct', 'point');
            document.getElementById('playerTwo').classList.remove('correct', 'point');
        }
        else{
            document.getElementById('playerTwo').classList.add('correct', 'point');
            document.getElementById('playerOne').classList.remove('correct', 'point');
        };
    }
}

let score = document.getElementById('score');
let scoreNum = 1;
let playerOneProfile = document.getElementById('playerOne');
let playerTwoProfile = document.getElementById('playerTwo');
let playerOneImg = document.getElementById('playerOneImg');
let playerTwoImg = document.getElementById('playerTwoImg');
playerOneProfile.addEventListener('click', () => {
    document.getElementById('nextBtn').classList.add('btnFadeIn');
    document.getElementById('nextBtn').classList.remove('vanish');
    score.classList.remove('vanish');
    if(playerOneProfile.classList.contains('correct')){
        // score.innerText = scoreNum++;
        playerTwoProfile.classList.add('incorrectAns');
        playerTwoProfile.classList.remove('player')
        document.getElementById('playerOneName').classList.add('correctAnsTxt');
        playerOneProfile.classList.remove('player')
        playerOneImg.classList.add('correctAns');
    } else{
        // score.innerText = 0;
        // scoreNum = 1;
        playerTwoImg.classList.add('correctAns');
        playerTwoProfile.classList.remove('player');
        document.getElementById('playerTwoName').classList.add('correctAnsTxt');
        playerOneProfile.classList.add('incorrectAns');
        playerOneProfile.classList.remove('player');
    }
    if(playerOneProfile.classList.contains('point')){
        score.innerText = scoreNum++;
        playerOneProfile.classList.remove('point');
    } else{
        score.innerText = 0;
        scoreNum = 1;
    }
})
playerTwoProfile.addEventListener('click', () => {
    document.getElementById('nextBtn').classList.add('btnFadeIn');
    document.getElementById('nextBtn').classList.remove('vanish');
    score.classList.remove('vanish');
    if(playerTwoProfile.classList.contains('correct')){
        // score.innerText = scoreNum++;
        playerOneProfile.classList.add('incorrectAns');
        playerOneProfile.classList.remove('player');
        document.getElementById('playerTwoName').classList.add('correctAnsTxt');
        playerTwoProfile.classList.remove('player');
        playerTwoImg.classList.add('correctAns');
    } else{
        // score.innerText = 0;
        // scoreNum = 1;
        playerOneImg.classList.add('correctAns');
        playerOneProfile.classList.remove('player');
        document.getElementById('playerOneName').classList.add('correctAnsTxt');
        playerTwoProfile.classList.add('incorrectAns');
        playerTwoProfile.classList.remove('player');
    }
    if(playerTwoProfile.classList.contains('point')){
        score.innerText = scoreNum++;
        playerTwoProfile.classList.remove('point');
    } else{
        score.innerText = 0;
        scoreNum = 1;
    }
})

let currentNum = 90;
let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * currentNum) + 1;
    score.classList.add('vanish');
    nextBtn.classList.add('vanish');
    nextBtn.classList.remove('btnFadeIn');
    document.getElementById('playerTwoName').classList.remove('correctAnsTxt');
    document.getElementById('playerOneName').classList.remove('correctAnsTxt');
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
        case 12: new Match("Wizzrobe", "Leffen", "Group C Pools", "Smash Summit 12", 1); break;
        case 13: new Match("SFAT", "Ginger", "Losers Quarters", "Mainstage 2021", 1); break;
        case 14: new Match("SluG", "Aklo", "Losers Semis", "The Function", 2); break;
        case 15: new Match("Hungrybox", "Wizzrobe", "Losers Semis", "Riptide 2021", 1); break;
        case 16: new Match("Gahtzu", "2Saint", "Losers Quarters", "Pound 2021 Online", 2); break;
        case 17: new Match("Axe", "Zain", "Losers Quarters", "LACS 3", 1); break;
        case 18: new Match("Spark", "SFAT", "Losers Quarters", "GOML Online 2020", 2); break;
        case 19: new Match("Zain", "Plup", "Winners Semis", "Pound 2020 Online", 1); break;
        case 20: new Match("Mango", "Plup", "Group B Pools", "Smash Summit 9", 2); break;
        case 21: new Match("Trif", "Solobattle", "Losers Semis", "Valhalla III", 2); break;
        case 22: new Match("S2J", "Trif", "Losers Eighths", "Dreamhack Rotterdam 2019", 1); break;
        case 23: new Match("Lucky", "Wizzrobe", "Losers Top 16", "The Big House 9", 1); break;
        case 24: new Match("Leffen", "Moky", "Winners Quarters", "Shine 2019", 2); break;
        case 25: new Match("aMSa", "Mango", "Winners Quarters", "Smash'N'Splash 5", 1); break;
        case 26: new Match("Cody Schwab", "Ginger", "Losers Semis", "The Script: Episode 2", 2); break;
        case 27: new Match("Zain", "S2J", "Winners Finals", "DPOTG 2018", 2); break;
        case 28: new Match("Axe", "Leffen", "Losers Quarters", "Smash Summit 7", 2); break;
        case 29: new Match("Duck", "Hungrybox", "Grand Finals", "Canada Cup 2018", 2); break;
        case 30: new Match("Hungrybox", "Mango", "Group 1 Pools", "Smash Summit 6", 2); break;
        case 31: new Match("Wizzrobe", "Zain", "Losers Top 12", "Full Bloom 4", 1); break;
        case 32: new Match("SFAT", "Lucky", "Losers Top 16", "Genesis 5", 2); break;
        case 33: new Match("Hungrybox", "Albert", "Losers Quarters", "Low Tier City 7", 1); break;
        case 34: new Match("Llod", "Polish", "Winners Quarters", "Super Smash Con 2019", 1); break;
        case 35: new Match("Cody Schwab", "Fiction", "Grand Finals", "Saving Mr. Lombardi 2", 2); break;
        case 36: new Match("Axe", "Wizzrobe", "Group A Pools", "Smash Summit 9", 1); break;
        case 37: new Match("Gahtzu", "S2J", "Losers Eighths", "Low Tide City 2021", 1); break;
        case 38: new Match("Hungrybox", "Cody Schwab", "Losers Semis", "SWT 2021 NA East", 2); break;
        case 39: new Match("Jmook", "Plup", "Winners Top 32", "Genesis 8", 1); break;
        case 40: new Match("Zain", "Llod", "Group A Pools", "Smash Summit 13", 2); break;
        case 41: new Match("Hungrybox", "aMSa", "Winners Finals", "LVL UP EXPO 2023", 2); break;
        case 42: new Match("aMSa", "Aklo", "Winners Finals", "The Come Up 2023", 1); break;
        case 43: new Match("Leffen", "Plup", "Winners Quarters", "Genesis 4", 2); break;
        case 44: new Match("Armada", "Leffen", "Winners Finals", "BEAST 7", 1); break;
        case 45: new Match("SFAT", "PewPewU", "Losers Top 12", "Smash Summit Spring 2017", 1); break;
        case 46: new Match("Leffen", "Duck", "Winners Quarters", "Full Bloom 3", 2); break;
        case 47: new Match("Axe", "Mango", "Losers Eighths", "Smash Rivalries", 1); break;
        case 48: new Match("Mew2King", "SFAT", "Winners Finals", "CEO Dreamland", 2); break;
        case 49: new Match("Mango", "Armada", "Winners Semis", "Royal Flush", 1); break;
        case 50: new Match("Axe", "Hungrybox", "Winners Semis", "CEO 2017", 2); break;
        case 51: new Match("S2J", "Wizzrobe", "Losers Top 24", "The Big House 11", 2); break;
        case 52: new Match("Plup", "Leffen", "Winners Quarters", "Shine 2017", 1); break;
        case 53: new Match("Mango", "SFAT", "Winners Quarters", "Shine 2018", 1); break;
        case 54: new Match("Wizzrobe", "n0ne", "Grand Finals", "The Script: Episode 1", 2); break;
        case 55: new Match("aMSa", "Hungrybox", "Group 1 Pools", "Smash Summit 7", 2); break;
        case 56: new Match("Axe", "SFAT", "Winners Finals", "LACS 1", 1); break;
        case 57: new Match("Trif", "PewPewU", "Winners Quarters", "Genesis 6", 2); break;
        case 58: new Match("Shroomed", "SFAT", "Losers Eighths", "Battle of BC 3", 2); break;
        case 59: new Match("Leffen", "Zain", "Winners Quarters", "GOML 2019", 1); break;
        case 60: new Match("Magi", "SFAT", "Winners Quarters", "CEO 2019", 2); break;
        case 61: new Match("n0ne", "Cody Schwab", "Losers Eighths", "Super Smash Con 2019", 1); break;
        case 62: new Match("Mew2King", "Hungrybox", "Winners Semis", "EGLX 2019", 1); break;
        case 63: new Match("KoDoRiN", "Lucky", "Losers Semis", "Genesis: Black", 2); break;
        case 64: new Match("Fiction", "S2J", "Losers Quarters", "Wavedash 2023", 1); break;
        case 65: new Match("Soonsay", "SluG", "Winners Top 32", "Mainstage 2022", 2); break;
        case 66: new Match("Zain", "aMSa", "Winners Semis", "Smash Summit 14", 2); break;
        case 67: new Match("Hungrybox", "Leffen", "Losers Finals", "Ludwig Smash Invitational", 1); break;
        case 68: new Match("SDJ", "Salt", "Losers Top 12", "The Off-Season", 2); break;
        case 69: new Match("SFAT", "PewPewU", "Winners Quarters", "DPOTG 2016", 1); break;
        case 70: new Match("Wizzrobe", "Trif", "Losers Eighths", "Dreamhack Winter 2016", 1); break;
        case 71: new Match("Mew2King", "Mango", "Winners Semis", "Smash Summit 3", 1); break;
        case 72: new Match("Leffen", "Axe", "Losers Top 12", "Smash Summit 3", 2); break;
        case 73: new Match("Mew2King", "Armada", "Winners Finals", "Canada Cup 2016", 2); break;
        case 74: new Match("Mango", "Armada", "Grand Finals", "The Big House 6", 1); break;
        case 75: new Match("Lucky", "SFAT", "Winners Quarters", "Clutch City Clash", 2); break;
        case 76: new Match("Mew2King", "Wizzrobe", "Losers Finals", "MomoCon 2018", 2); break;
        case 77: new Match("Mango", "KoDoRiN", "Winners Quarters", "Lost Tech City 2022", 1); break;
        case 78: new Match("Axe", "Shroomed", "Losers Quarters", "Super Smash Con 2016", 1); break;
        case 79: new Match("Plup", "Armada", "Winners Semis", "The Big House 7", 1); break;
        case 80: new Match("Plup", "SFAT", "Pools Group 2", "Smash Summit 10", 2); break;
        case 81: new Match("n0ne", "Ginger", "Losers Top 24", "Genesis 7", 1); break;
        case 82: new Match("Mango", "Leffen", "Winners Semis", "The Big House 9", 2); break;
        case 83: new Match("Duck", "Zain", "Grand Finals", "Pat's House 3", 1); break;
        case 84: new Match("Duck", "Axe", "Losers Top 12", "Shine 2016", 2); break;
        case 85: new Match("Zain", "Mango", "Losers FInals", "GTX 2018", 2); break;
        case 86: new Match("Lucky", "Axe", "Losers Top 12", "Evo 2015", 2); break;
        case 87: new Match("Leffen", "Mew2King", "Losers Top 12", "Apex 2015", 1); break;
        case 88: new Match("Westballz", "Leffen", "Winners Quarters", "Dreamhack Winter 2015", 1); break;
        case 89: new Match("Plup", "Shroomed", "Losers Top 16", "The Big House 5", 2); break;
        case 90: new Match("Armada", "Mango", "Losers Finals", "BEAST 5", 1); break;
    };
};