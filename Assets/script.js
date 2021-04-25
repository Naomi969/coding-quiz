//timer
var startBtn = document.getElementById('startButton');
var time = document.getElementById('timer')
var timeLeft = 70;
var timer;
//global
var currentQuestionIndex = 0;



// this holds all the questions
var questions = [
    {
        'question1':"At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        'options1':[
            '4',
            '5',
            '6',
            '3',
        ],
        'answer1': 'btn1'
    },
    {
        'question2':"Who is the first character in the series to be called king of the north?",
        'options2':[
            'Robb Stark',
            'Ned Stark',
            'Edmure Tully',
            'Jon Snow',
        ],
        'answer2': 'btn0'
    },
    {
        'question3':"How does Daenerys hatch her dragon eggs?",
        'options3':[
            'With the help of a witch',
            'Using wild fire',
            'In a funeral pyre',
            'With a lighting strike',
        ],
        'answer3': 'btn2'
    },
    {
        'question4':"How does Daenerys hatch her dragon eggs?",
        'options4':[
            'Lady',
            'Ghost',
            'Grey wind',
            'Nymeria',
        ],
        'answer4': 'btn3'
    },
    {
        'question5':"What is Olenna Tyrell's nickname?",
        'options5':[
            'Queen of Hearts',
            'Queen of Thorns',
            'Lady of Roses',
            'Queen of High Garden',
        ],
        'answer5': 'btn1'
    }
]

//function to populate
function showQuestion () {
    if (currentQuestionIndex > questions.length - 1) {
        clearInterval(timer);
        console.log(currentQuestionIndex)
        displayQuizResults();
    }

    if(quiz[currentQuestionIndex] !== undefined) {
        startScreen.hidden = true;
        questionEl.hidden = false;
        answerChoiceContainer.hidden = false;
        questionEl.textContent=quiz[currentQuestionIndex].question;
        AC0El.textContent=quiz[currentQuestionIndex].AC0;
        AC1El.textContent=quiz[currentQuestionIndex].AC1;
        AC2El.textContent=quiz[currentQuestionIndex].AC2;
        AC3El.textContent=quiz[currentQuestionIndex].AC3;
    }
}


//timer func- missing something
function startTimer () {
    timer = setInterval(function (){
        timeLeft--;
        // console.log(timeRemaining + 'that we see')
        time.textContent = timeLeft + ' seconds';
    if (timeLeft === 0) {
        clearInterval (timer);
        }
    }, 1000);  
}

startBtn.addEventListener("click", function() {
    startTimer();
})
