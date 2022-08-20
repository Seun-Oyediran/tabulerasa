import React from 'react';
import { questionMenuArray } from '../../utils/static';

const QuestionPopover = () => {
  return (
    <div className="bg-white question-menu-popover">
      {questionMenuArray.map((item) => (
        <button
          key={item.id}
          type="button"
          className="d-flex align-items-center w-100 px-3 py-2 gap-2"
        >
          <div>
            <img src={item.icon} alt={item.action} />
          </div>
          <p className="mt-1">{item.text}</p>
        </button>
      ))}
    </div>
  );
};

export default QuestionPopover;
