function showSection(section){

document.getElementById("mcq").style.display="none";
document.getElementById("exam").style.display="none";
document.getElementById("summary").style.display="none";

document.getElementById(section).style.display="block";

}

let question = "What does DBMS stand for?";
let correctAnswer = "A";

document.getElementById("question").innerHTML =
question + "<br><br>A. Database Management System <br>B. Data Backup System <br>C. Digital Base System <br>D. Data Binary Model";

function checkAnswer(answer){

if(answer === correctAnswer){
document.getElementById("result").innerHTML = "Correct!";
}
else{
document.getElementById("result").innerHTML = "Wrong Answer";
}

}

function startExam(){

let time = 60;

let timer = setInterval(function(){

document.getElementById("timer").innerHTML =
"Time Remaining: " + time + " seconds";

time--;

if(time < 0){
clearInterval(timer);
document.getElementById("timer").innerHTML = "Exam Finished";
}

},1000)

}
