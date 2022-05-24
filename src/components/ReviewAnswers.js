import React from 'react';

function ReviewAnswers({ selectedAnswers }) {
  return (
    <div className='paper reviewAnswers'>
      <i className='fa-solid fa-list icon' />
      <p style={{ fontSize: '1.5rem' }}>Review Answers Here...</p>
      <div>
        {Object.keys(selectedAnswers).length > 0 &&
          Object.entries(selectedAnswers).map((el, idx) => {
            return (
              <p key={el} idx={el} className='ft-12'>
                <span
                  style={{
                    fontWeight: 600,
                    padding: '0px 8px',
                  }}
                >
                  #{el[0]}:
                </span>
                {el[1]}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default ReviewAnswers;
