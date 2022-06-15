const lessons = [['test']];
var questionNum = 1;
var lesson = 0;
var answer = document.getElementById('answer');
var question = document.getElementById('question');
var result = document.getElementById('result');
var next = document.getElementById('next');
question.textContent = lessons[lesson][num-1];
next.style.visibility = 'hidden';

answer.addEventListener('change', (event) => {
  
  if(lessons[lesson][num]===event.target.value) {
    result.textContent = 'poprawnie!';
    result.style.color = 'green';
  }
  else {
    result.textContent = 'źle';
    result.style.color = 'red'
  }
  next.style.visibility = 'visible';
});
next.addEventListener('click', (event) => {
  num += 2;
  question.textContent = lessons[lesson][questionNum-1];
  result.textContent = '';
  next.style.visibility = 'hidden';
});
