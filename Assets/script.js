//timer
var startBtn = document.getElementById('startButton');
var time = document.getElementById('timer')
var timeLeft = 70;
var timer;
//global
var currentQuestionIndex = 0;
var spashEl = document.getElementById('splashScreen');
var questionsEl = document.getElementById('questions');



// this holds all the questions
var questions = [
    {
        question:"At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        options:[
            '4',
            '5',
            '6',
            '3',
        ],
        answer: 'btn1'
    },
    {
        question:"Who is the first character in the series to be called king of the north?",
        options:[
            'Robb Stark',
            'Ned Stark',
            'Edmure Tully',
            'Jon Snow',
        ],
        answer: 'btn0'
    },
    {
        question:"How does Daenerys hatch her dragon eggs?",
        options:[
            'With the help of a witch',
            'Using wild fire',
            'In a funeral pyre',
            'With a lighting strike',
        ],
        answer: 'btn2'
    },
    {
        question:"How does Daenerys hatch her dragon eggs?",
        options:[
            'Lady',
            'Ghost',
            'Grey wind',
            'Nymeria',
        ],
        answer: 'btn3'
    },
    {
        question:"What is Olenna Tyrell's nickname?",
        options:[
            'Queen of Hearts',
            'Queen of Thorns',
            'Lady of Roses',
            'Queen of High Garden',
        ],
        answer: 'btn1'
    }
]

//function to populate
function showQuestion () {
    if (currentQuestionIndex > questions.length - 1) {
        clearInterval(timer);
        console.log(currentQuestionIndex)
        displayQuizResults();
    }

    if(questions[currentQuestionIndex] !== undefined) {
        splashEl.hidden = true;
        questionEl.hidden = false;
        questionEl.textContent=questions[currentQuestionIndex].question;
        AC0El.textContent=quiz[currentQuestionIndex].AC0;
        AC1El.textContent=quiz[currentQuestionIndex].AC1;
        AC2El.textContent=quiz[currentQuestionIndex].AC2;
        AC3El.textContent=quiz[currentQuestionIndex].AC3;
    }
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
})
