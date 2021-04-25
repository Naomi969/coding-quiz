//timer
var startBtn = document.getElementById('startButton');
var time = document.getElementById('timer')
var timeLeft = 70;




// this holds all the questions
var questions [
    {
        question1="At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        options=[
            '4',
            '5',
            '6',
            '3',
        ],
        answer1= 'button1'
    }
    {
        question2="Who is the first character in the series to be called king of the north?",
        options=[
            'Robb Stark',
            'Ned Stark',
            'Edmure Tully',
            'Jon Snow',
        ],
        answer2= 'button0'
    }
    {
        question3="How does Daenerys hatch her dragon eggs?",
        options=[
            'With the help of a witch',
            'Using wild fire',
            'In a funeral pyre',
            'With a lighting strike',
        ],
        answer3= 'button2'
    }
    {
        question4="How does Daenerys hatch her dragon eggs?",
        options=[
            'Lady',
            'Ghost',
            'Grey wind',
            'Nymeria',
        ],
        answer4= 'button3'
    }
    {
        question5="What is Olenna Tyrell's nickname?",
        options=[
            'Queen of Hearts',
            'Queen of Thorns',
            'Lady of Roses',
            'Queen of High Garden',
        ],
        answer5= 'button1'
    }
]


//timer func
var seconds = document.getElementById("timer").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

startBtn.addEventListener('click', countdown);