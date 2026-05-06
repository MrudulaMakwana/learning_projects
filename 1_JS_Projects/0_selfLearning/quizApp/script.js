const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'React',
        'correct': 'a'
    },
    {
        'que': 'Which language is used for styling web pages?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'React',
        'correct': 'b'
    },
    {
        'que': 'Which programming language is used for web development?',
        'a': 'Python',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'C++',
        'correct': 'c'
    },
    {
        'que': 'Which library is used for building UI components?',
        'a': 'JavaScript',
        'b': 'CSS',
        'c': 'React',
        'd': 'C++',
        'correct': 'c'
    }
];

let index = 0;
const quesBox = document.querySelector('#box h1');  // Select the <h1> inside #box
const optionInputs = document.querySelectorAll('.option');
const labels = document.querySelectorAll('label');  // Get all labels

const total = questions.length;
let right = 0, wrong = 0;

const loadQuestion = () => {
    if(index===total)
    {
        return endQuiz();
    }
    reset()
    const data = questions[index];

    // Set the question text inside <h1>
    quesBox.innerText = `${index + 1}) ${data.que}`;

    // Set the options correctly
    labels[0].innerText = data.a;
    labels[1].innerText = data.b;
    labels[2].innerText = data.c;
    labels[3].innerText = data.d;
}
const submitQuiz = () => {
    let data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        right++
    }
    else {
        wrong++
    }
    index++
    loadQuestion()
    return
}


const getAnswer = () => {
    optionInputs.forEach((input) => {
        if (input.checked) {
            return input.value
        }
    })
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;

    })
}
// Load the first question on page load
loadQuestion();

const answer=document.getElementById('answer')

function endQuiz()
{
answer.innerHTML=`<b> Your Score : ${right}<b/>
                <b> Your Wrong Answer : ${wrong}<b/>`
setTimeout(()=>{
loadQuestion()
},5000)
}