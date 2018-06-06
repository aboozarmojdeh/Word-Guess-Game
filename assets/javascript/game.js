var wins = 0;
var looses = 0;

window.wins = wins;
window.looses = looses;

var gameStart = function () {
    var nameLib = [
        "adele",
        "celin",
        "cohen",
        "feliciano",
        "madonna",
        "rihanna",
        "shaggy"
    ];


    var computerChoices = nameLib;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var computerGuessWordLength = computerGuess.length;
    var computerGuessLetters = computerGuess.split("");
    var userGuessAttempts = computerGuess.length + 5;
    var displayUnderline = [computerGuessWordLength];
    var userGuessLetter = "";
    var output = "";
    var win = computerGuessWordLength;
    var userKeys = [];
    var userRepeatTest="";


    for (i = 0; i < computerGuessWordLength; i++) {
        displayUnderline[i] = "_ ";
        output = output + displayUnderline[i];


    };

    document.querySelector("#Wins").textContent = wins;
    document.querySelector("#Looses").textContent = looses;
    document.querySelector("#Guess_Left").textContent = "You have " + userGuessAttempts + " Attempts";
    document.querySelector("#user_output").textContent = output;


    document.onkeydown = function (event) {

        var output = "";
        var userGuessLetter = event.key;
        
                
        userKeys = userKeys + userGuessLetter + " , ";

        
        document.querySelector("#user_Entry").textContent = userKeys;


    for (j = 0; j < computerGuessWordLength; j++) {


        if (userGuessLetter.toLowerCase() === computerGuessLetters[j]) {

            displayUnderline[j] = userGuessLetter.toLowerCase();
            win--;

        }

        output = output + displayUnderline[j] + "  ";

        document.querySelector("#user_output").textContent = output;

    }

    userGuessAttempts--;

    if (win < 1 ) {


        document.querySelector("#Guess_Left").textContent = "YOU WIN!!!";
        wins++;
        document.querySelector('#Wins').innerHTML = wins;

        var imageShow = output;

        switch (imageShow) {
            case "a  d  e  l  e  ":
                document.querySelector("#word_image").src= "./assets/images/adele.jpg";
                document.querySelector("#word_music").src= "./assets/musics/adele.mp3";
                break;
            
            case "c  e  l  i  n  ":
                document.querySelector("#word_image").src= "./assets/images/celin.jpg";
                document.querySelector("#word_music").src= "./assets/musics/celin.mp3";
            break;  
            
            case "c  o  h  e  n  ":
                document.querySelector("#word_image").src= "./assets/images/cohen.jpg";
                document.querySelector("#word_music").src= "./assets/musics/cohen.mp3";
            break;  
            
            case "f  e  l  i  c  i  a  n  o  ":
                document.querySelector("#word_image").src= "./assets/images/feliciano.jpg";
                document.querySelector("#word_music").src= "./assets/musics/feliciano.mp3";
            break;  


            case "m  a  d  o  n  n  a  ":
                document.querySelector("#word_image").src= "./assets/images/madonna.jpg";
                document.querySelector("#word_music").src= "./assets/musics/madonna.mp3";
            break;  

            case "r  i  h  a  n  n  a  ":
                document.querySelector("#word_image").src= "./assets/images/rihanna.jpg";
                document.querySelector("#word_music").src= "./assets/musics/rihanna.mp3";
            break;

            case "s  h  a  g  g  y  ":
                document.querySelector("#word_image").src= "./assets/images/shaggy.jpg";
                document.querySelector("#word_music").src= "./assets/musics/shaggy.mp3";
            break;

            default:
            document.querySelector("#word_image").src= "./assets/images/guess.png";
        }
     
    } else if (userGuessAttempts < 1) {

        document.querySelector("#Guess_Left").textContent = "YOU LOOSE!!! " + " Your answer was  " + computerGuess.toUpperCase();
        looses++;
        document.querySelector("#Looses").innerHTML = looses;


    }
    else {
        document.querySelector("#Guess_Left").textContent = "You Have " + userGuessAttempts + " Guessses Left!";
    }


};

}
gameStart();

function myContinue() {
    
    gameStart();
    output="";
    userKeys="";
    


};

function myPlayAgain() {
    location.reload();
    gameStart();


};









