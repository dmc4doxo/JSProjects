// Link to quiz app

const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Mack Coulibaly",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// initialized variables

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
// Array of the 4 answers
const questionEl = document.getElementById("question");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
// let answer = undefined;
// let correct_ans = undefined;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  // Initialize currentQuizData
  const currentQuizData = quizData[currentQuiz];
  // quizData[0].a (or .b .c .d .correct)
  // Fill-in the Quiz info
  questionEl.innerHTML = currentQuizData.question;
  text_a.innerText = currentQuizData.a;
  text_b.innerText = currentQuizData.b;
  text_c.innerText = currentQuizData.c;
  text_d.innerText = currentQuizData.d;
  correct_ans = currentQuizData.correct;
}

// submitBtn.addEventListener("click", () => {
quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = getSelected();
  console.log(answer); // Does not console.log... Why?
  console.log(correct_ans);

  if (answer) {
    if (answer === correct_ans) {
      score++;
      console.log(answer); // Does not console.log-- Why?
      console.log("Correct!");
    }

    currentQuiz++;
    console.log(currentQuiz);

    if (currentQuiz < quizData.length) {
      // undefined... Why?
      console.log(currentQuiz); // this gives is is not executed
      console.log(quizData.length); // this gives is is not executed

      loadQuiz(); // loadQuiz with currentQuiz incremented.
      console.log("Loading..."); // testing to see if it get here.
    } else {
      // End of the questions....
      quiz.innerHTML = `<h3>You have answered correctly ${score} out of ${quizData.length}</h3> <br>

          <button onclick="document.location.reload()"> Click to Start Over </button> `;
    }
  }
});

// function getSelected() {
//   // let answer = undefined;
//   let answer_array = Array.from(answerEls);
//   let answer = answer_array.find((ans_text) => {
//     return ans_text.checked;
//   });
//   return answer;
// }

function getSelected() {
  let answer = undefined;
  answerEls.forEach((ans_text) => {
    if (ans_text.checked) {
      answer = ans_text.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
