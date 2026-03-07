let questions = [

{
question: "What is computer programming?",
options: [
"Using computer hardware",
"Writing instructions for a computer",
"Playing games on computer",
"Repairing computer"
],
answer: 1
},

{
question: "A step-by-step procedure to solve a problem is called:",
options: [
"Program",
"Algorithm",
"Compiler",
"Syntax"
],
answer: 1
},

{
question: "Who writes computer programs?",
options: [
"User",
"Programmer",
"Operator",
"Technician"
],
answer: 1
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("progress").innerText =
"Question " + (currentQuestion+1) + " of " + questions.length;

document.getElementById("question").innerText = q.question;

document.getElementById("opt0").innerText = q.options[0];
document.getElementById("opt1").innerText = q.options[1];
document.getElementById("opt2").innerText = q.options[2];
document.getElementById("opt3").innerText = q.options[3];

}

function checkAnswer(option){

let q = questions[currentQuestion];

if(option === q.answer){
score++;
}

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}else{
showResult();
}

}

function showResult(){

document.getElementById("quiz").innerHTML =
"<h2>Quiz Finished</h2>" +
"<p>Your Score: " + score + " / " + questions.length + "</p>";

}

window.onload = loadQuestion;
