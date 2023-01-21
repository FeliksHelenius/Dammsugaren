const body = document.querySelector('body');
let q = document.querySelector('.questionDisplayer');

const questions = [];

let answers = {
  one: document.querySelector('.one'),
  two: document.querySelector('.two'),
  three: document.querySelector('.three'),
};

function prompt(a) {
  let target = a.target;
  let tC = a.target.classList;
  let answer = 0;

  if (target == answers.one) {
    target.style.backgroundColor = 'black';
    answers.two.style.backgroundColor = 'gray';
    answers.three.style.backgroundColor = 'gray';
    answer = target;
  } else if (target == answers.two) {
    target.style.backgroundColor = 'black';
    answers.one.style.backgroundColor = 'gray';
    answers.three.style.backgroundColor = 'gray';
    answer = target;
  } else if (target == answers.three) {
    target.style.backgroundColor = 'black';
    answers.two.style.backgroundColor = 'gray';
    answers.one.style.backgroundColor = 'gray';
    answer = target;
  }
  return receive(answer);
}

function receive(answer) {
  document.querySelector('.submit').addEventListener('click', () => {});
}

body.addEventListener('click', prompt.bind(this));
