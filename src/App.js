import { useState } from 'react';
import './App.css';
import Completion from './components/Completion';
import Questions from './components/Questions';
import ReviewAnswers from './components/ReviewAnswers';
import { questions } from './questions';

function App() {
  /*  {
    question: 'A line which cuts a pair of parallel lines is called',
    options: ['Tangent', 'Chord', 'Traversal', 'Intersector'],
    answer: 'Chord',
  }, */
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showCompletion, setShowCompletion] = useState(false);
  const questionToDisplay = questions[currentQuestion];
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);

  const moveForward = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const moveBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const addSelectedAnswer = (currentQuestion, val) => {
    let answers = { ...selectedAnswers };
    answers[currentQuestion + 1] = val;
    setSelectedAnswers(answers);
  };
  const submit = () => {
    let correct = questionsCorrect();
    let score = calculateScore(correct);
    setScore(score);
    setCorrect(correct);
    setShowCompletion(true);
  };

  const questionsCorrect = () => {
    let ans = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === selectedAnswers[i + 1]) ans++;
    }
    return ans;
  };

  const calculateScore = (correct) => {
    let totalScore = 100;
    let totalQuestions = questions.length;
    let score = (totalScore / totalQuestions) * correct;
    score = score.toFixed(2);
    console.log();
    return score;
  };

  const reset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowCompletion(false);
    setCorrect(0);
    setScore(0);
  };
  // const
  return (
    <div className='container'>
      {showCompletion ? (
        <>
          <div className='box w-90'>
            <Completion
              questionsAsked={questions.length}
              questionsCorrect={correct}
              score={score}
              reset={reset}
            />
          </div>
        </>
      ) : (
        <>
          <div className='box left '>
            <ReviewAnswers selectedAnswers={selectedAnswers} />
          </div>
          <div className='box right'>
            <Questions
              currentQuestion={currentQuestion}
              questionToDisplay={questionToDisplay}
              moveForward={moveForward}
              moveBack={moveBack}
              totalQuestions={questions.length}
              addSelectedAnswer={(currentPos, val) => {
                addSelectedAnswer(currentPos, val);
              }}
              selectedAnswers={selectedAnswers}
              submit={submit}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
