import React, { useEffect, useState } from 'react';

const falseArray = Array.from(Array(4), (x) => false);

function Questions({
  questionToDisplay,
  moveForward,
  moveBack,
  currentQuestion,
  totalQuestions,
  addSelectedAnswer,
  selectedAnswers,
  submit,
}) {
  const [checked, setChecked] = useState(falseArray);
  useEffect(() => {
    const answerSelected = selectedAnswers[currentQuestion + 1];
    if (answerSelected) {
      let arr = [...falseArray];
      let idx = questionToDisplay.options.indexOf(answerSelected);
      // console.log('idx:: ', idx);
      arr[idx] = true;
      setChecked(arr);
    }
  }, [questionToDisplay, currentQuestion]);
  return (
    <>
      <div className='paper questions'>
        <i
          className='fa-solid fa-circle-question icon'
          style={{
            color: '#ffc600',
            margin: '20px',
          }}
        />
        <div className='questions__button w-90'>
          {currentQuestion === 0 ? (
            <p></p>
          ) : (
            <div
              className='btn'
              onClick={() => {
                moveBack();
                setChecked(falseArray);
              }}
            >
              <i className='fas fa-arrow-left' />
            </div>
          )}
          <div style={{ fontWeight: 'bold' }}>Attempt Questions Here</div>
          {currentQuestion === totalQuestions - 1 ? (
            <div></div>
          ) : (
            <div
              className='btn'
              onClick={() => {
                moveForward();
                setChecked(falseArray);
              }}
            >
              <i className='fas fa-arrow-right' />
            </div>
          )}{' '}
        </div>
        <div className='questions__display w-90'>
          <p className='ft-12 fw-bold'>
            Question #{currentQuestion + 1} {questionToDisplay.question}
          </p>
          <div>
            {questionToDisplay.options.map((option, idx) => {
              return (
                <div className='questions__option' key={idx}>
                  <input
                    // ref={radioButton}
                    type='radio'
                    name='option'
                    id={option}
                    value={option}
                    onChange={(e) => {
                      let val = e.target.value;
                      let arr = [...falseArray];
                      arr[idx] = true;
                      setChecked(arr);
                      addSelectedAnswer(currentQuestion, val);
                    }}
                    checked={checked[idx]}
                  />
                  <label htmlFor={option}>{option}</label>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
        {Object.keys(selectedAnswers).length === totalQuestions && (
          <div className='questions__submit'>
            <div className='as-end'>
              <div
                className='btn btn-submit'
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Questions;
