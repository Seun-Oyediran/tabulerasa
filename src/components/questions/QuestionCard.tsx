import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Answer, QuestionMenu, Useful } from '../../svg';
import { formatShortDate } from '../../utils';
import { questionMenuArray } from '../../utils/static';

interface IProps {
  anon?: boolean;
  question: string;
  img?: string;
  request?: boolean;
}

const ContentPopover = () => {
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

const QuestionCard = (props: IProps) => {
  const {
    anon, img, request, question,
  } = props;
  return (
    <div className="question-card-container bg-white mb-4">
      {img && (
        <div className="img-con">
          <img src={img} alt="question" />
        </div>
      )}
      <div className="content">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex gap-2">
            <div className="avatar-con">
              <img src={anon ? '/svg/anon_avatar.svg' : '/svg/small_avatar.svg'} alt="avatar" />
            </div>
            <div className="user">
              {anon ? (
                <h4>Anonymous</h4>
              ) : (
                <h4>
                  Mary Idahosa
                  {request && <span>requested you to answer</span>}
                </h4>
              )}
              <p>{formatShortDate(new Date().toString())}</p>
            </div>
          </div>

          <div className="icon">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={(
                <div>
                  <ContentPopover />
                </div>
              )}
              rootClose
            >
              <button type="button">
                <QuestionMenu />
              </button>
            </OverlayTrigger>
          </div>
        </div>

        <p className="question">{question}</p>
      </div>

      <div className="action-con">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-1 action">
            <button className="d-flex align-items-center gap-1" type="button">
              <Answer />
              {' '}
              Answer
            </button>
            <div className="small-dot" />
            <h5>5</h5>
          </div>

          <div className="d-flex align-items-center gap-1 action">
            <button className="d-flex align-items-center gap-1" type="button">
              <Useful />
              Mark as Useful
            </button>
            <div className="small-dot" />
            <h5>123</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
