import React from 'react';

function Completion({ questionsAsked, questionsCorrect, score, reset }) {
  return (
    <div className='paper fw-bold' style={{ width: '100%' }}>
      <i
        className='fa-solid fa-circle-check success_icon'
        style={{ margin: '20px' }}
      />
      <p className='ft-15 '>You have successfully submitted the assignment</p>
      <p>
        Question Asked: <span className='fw-normal'>{questionsAsked}</span>
      </p>
      <p>
        Question Correct: <span className='fw-normal'>{questionsCorrect}</span>
      </p>
      <p>
        Your Score: <span className='fw-normal'>{score}</span>
      </p>
      <div className='questions__submit'>
        <div className='as-end'>
          <div
            className='btn btn-submit'
            onClick={() => {
              reset();
            }}
          >
            Attempt Again
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completion;
