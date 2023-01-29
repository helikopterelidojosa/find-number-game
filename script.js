var guessThisNumber = Math.ceil(Math.random()*1000000)
var guessScore = 0;


function findNumberGame(){
guessScore++;


var myNumber  = document.getElementById('myGuess').value;

if(myNumber == guessThisNumber){
    document.getElementById('info').innerHTML = "<br>Congratulations, You guessed right " +guessThisNumber+ " <br> It took you " + guessScore + " guesses";
    document.getElementById('history').innerHTML +='<br><b style="color:cyan">'+ myNumber + " Right Number!</b>";
    
}

if(myNumber < guessThisNumber){
    document.getElementById('history').innerHTML +='<br><b style="color:green">'+ myNumber + " More!</b>";
    document.getElementById('info').innerHTML =""+ myNumber +" More!";
}


if(myNumber > guessThisNumber){
    document.getElementById('history').innerHTML +='<br><b style="color:red">'+ myNumber + " Less!</b>";
    document.getElementById('info').innerHTML =""+ myNumber +" Less!";;
}
}