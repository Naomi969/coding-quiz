//timer
var startBtn = document.getElementById('startButton');
var time = document.getElementById('timer')
var timeLeft = 70;
var timer;
//global
var cqIndex = 0;
var splashEl = document.getElementById('splashScreen');
var questionsEl = document.getElementById('questions');
var buttonsEl = document.getElementById('btns');
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');





// this holds all the questions
var questions = [
    {
        question:"At the beginning of the series, how many children do Ned and Catelyn Stark have?",
       
        btnc0:'4',
        btnc1:'5',
        btnc2:'6',
        btnc3:'3',
      
        answer: '5'
    },
    {
        question:"Who is the first character in the series to be called king of the north?",
       
        btnc0:'Robb Stark',
        btnc1:'Ned Stark',
        btnc2:'Edmure Tully',
        btnc3:'Jon Snow',
      
        answer: 'Robb Stark'
    },
    {
        question:"How does Daenerys hatch her dragon eggs?",
    
        btnc0:'With the help of a witch',
        btnc1:'Using wild fire',
        btnc2:'In a funeral pyre',
        btnc3:'With a lighting strike',
       
        answer: 'In a funeral pyre'
    },
    {
        question:"What is the name of Arya Stark's wolf?",

        btnc0:'Lady',
        btnc1:'Ghost',
        btnc2:'Grey wind',
        btnc3:'Nymeria',
        
        answer: 'Nymeria'
    },
    {
        question:"What is Olenna Tyrell's nickname?",
       
        btnc0:'Queen of Hearts',
        btnc1:'Queen of Thorns',
        btnc2:'Lady of Roses',
        btnc3:'Queen of High Garden',
        
        answer: 'Queen of Thorns'
    }
]

//function to populate-- it does not run through it. 
function showQuestion () {
    if (cqIndex > questions.length - 1) {
        clearInterval(timer);
        // console.log(currentQuestionIndex)
        // displayQuizResults();
    }
    if(questions[cqIndex] !== undefined) {
        splashEl.hidden = true;
        questionsEl.hidden = false;
        buttonsEl.hidden = false;
        questionsEl.textContent=questions[cqIndex].question;
        btn0.textContent=questions[cqIndex].btnc0;
        btn1.textContent=questions[cqIndex].btnc1;
        btn2.textContent=questions[cqIndex].btnc2;
        btn3.textContent=questions[cqIndex].btnc3;
    }
}
// function to chech the user choice
function checkSelected(event){
    if(event.target.textContent === questions[cqIndex].answer){
        console.log('correct!!!')
    }else{
        console.log('incorrect!!!')
        timeLeft = timeLeft - 10
    }
    cqIndex++
    showQuestion()
}


//timer
function startTimer () {
    timer = setInterval(function (){
        timeLeft--;
        time.textContent = timeLeft + ' seconds';
    if (timeLeft === 0) {
        clearInterval (timer);
        }
    }, 1000);  
}

startBtn.addEventListener("click", function() {
    startTimer();
    showQuestion();
})
