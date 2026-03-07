let courses = {

programming: [
{
question: "What is computer programming?",
options:[
"Using computer hardware",
"Writing instructions for a computer",
"Playing games",
"Repairing computers"
],
answer:1
},

{
question:"Who writes computer programs?",
options:[
"User",
"Programmer",
"Operator",
"Technician"
],
answer:1
}
],

dbms:[
{
question:"What does DBMS stand for?",
options:[
"Database Management System",
"Data Binary Model",
"Data Backup Model",
"Digital Base System"
],
answer:0
}
],

os:[
{
question:"Which manages computer memory?",
options:[
"Compiler",
"Operating System",
"Browser",
"Keyboard"
],
answer:1
}
]

};

let questions = [];
let currentQuestion = 0;
let score = 0;

function startCourse(course){

questions = courses[course];

document.getElementById("courses").style.display = "none";
document.getElementById("quiz").style.display = "block";

currentQuestion = 0;
score = 0;

loadQuestion();

}

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("progress").innerText =
"Question " + (currentQuestion+1) + " of " + questions.length;

document.getElementById("question").innerText = q.question;

document.getElementById("opt0").innerText = q.options[0];
document.getElementById("opt1").innerText = q.options[1];
document.getElementById("opt2").innerText = q.options[2];
document.getElementById("opt3").innerText = q.options[3];
let progressPercent = ((currentQuestion) / questions.length) * 100;

document.getElementById("progress-bar").style.width =
progressPercent + "%";
}

function checkAnswer(option){

let q = questions[currentQuestion];

let buttons = [
document.getElementById("opt0"),
document.getElementById("opt1"),
document.getElementById("opt2"),
document.getElementById("opt3")
];

if(option === q.answer){

buttons[option].classList.add("correct");
score++;

}else{

buttons[option].classList.add("wrong");
buttons[q.answer].classList.add("correct");

}

setTimeout(function(){

buttons.forEach(btn => {
btn.classList.remove("correct");
btn.classList.remove("wrong");
});

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}else{
showResult();
}

},1000);

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

saveScore(score);

}

}
let examTime = 60;
let examTimer;

function startExam(){

document.getElementById("courses").style.display = "none";
document.getElementById("quiz").style.display = "block";

questions = courses["programming"];

currentQuestion = 0;
score = 0;

loadQuestion();

startTimer();

}

function startTimer(){

examTime = 60;

examTimer = setInterval(function(){

document.getElementById("timer").innerText =
"Time Remaining: " + examTime + " seconds";

examTime--;

if(examTime < 0){

clearInterval(examTimer);

showResult();

}

},1000);

}
.progress-container{
width:80%;
height:20px;
background:#ddd;
margin:20px auto;
border-radius:10px;
}

#progress-bar{
height:100%;
width:0%;
background:#4CAF50;
border-radius:10px;
}
