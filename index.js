let randomNumber
let guessNumber
let guessAmount = 1
let HighScore = 9999999
let HighScore10000 = 9999999
let choise

document.getElementById('1-100').onclick = function(){
    choise = 100
    document.getElementById('H1').innerHTML = 'Guess the number between 1 and 100';
    document.getElementById("labelScore1-10000").style.display = 'none';
    document.getElementById("labelHighscore1-10000").style.display = 'none';
    document.getElementById("labelScore").style.display = 'block';
    document.getElementById("labelHighscore").style.display = 'block';
}
document.getElementById('1-10000').onclick = function(){
    choise = 10000
    document.getElementById('H1').innerHTML = 'Guess the number between 1 and 1000'
    document.getElementById("labelScore").style.display = 'none';
    document.getElementById("labelHighscore").style.display = 'none';
    document.getElementById("labelScore1-10000").style.display = 'block';
    document.getElementById("labelHighscore1-10000").style.display = 'block';
}

/*Generating number*/
document.getElementById('BTN1').onclick = function(){
    randomNumber = Math.round(Math.random() * choise) + 1;
    console.log(randomNumber);

};

/*Guessing number*/
document.getElementById('BTN2').onclick = function(){
    guessNumber = document.getElementById('input').value
    if(isNaN(guessNumber)){
        document.getElementById('label').innerHTML = 'Not a number'
    }
    else if(guessNumber > randomNumber){
        document.getElementById('label').innerHTML = 'Lower'
        guessAmount += 1
    }
    else if(guessNumber < randomNumber){
        document.getElementById('label').innerHTML = 'Higher'
        guessAmount += 1
    }
    else if(guessNumber == randomNumber && choise == 100){
        document.getElementById('label').innerHTML = 'Correct'
        document.getElementById('labelScore').innerHTML = 'Current Score: ' + guessAmount;
        if(guessAmount < HighScore){
            HighScore = guessAmount
            document.getElementById('labelHighscore').innerHTML = 'High Score: ' + HighScore;
        }
        guessAmount = 1;
        randomNumber = Math.round(Math.random() * 100) + 1;
        console.log(randomNumber)
        document.getElementById('label').innerHTML = 'Correct';
    }
    else if(guessNumber == randomNumber && choise == 1000){
        document.getElementById('label').innerHTML = 'Correct'
        document.getElementById('labelScore1-1000').innerHTML = 'Current Score: ' + guessAmount;
        if(guessAmount < HighScore10000){
            HighScore10000 = guessAmount
            document.getElementById('labelHighscore1-1000').innerHTML = 'High Score: ' + HighScore11000;
        }
        guessAmount = 1;
        randomNumber = Math.round(Math.random() * 1000) + 1;
        console.log(randomNumber)
        document.getElementById('label').innerHTML = 'Correct';
    }

}