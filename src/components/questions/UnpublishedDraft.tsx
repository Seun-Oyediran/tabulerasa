import React from 'react';
import { Delete, Write } from '../../svg';

interface IProps {
  img?: string;
  question: string;
  answer: string;
  handleDelete?: () => void;
}

const UnpublishedDraft = (props: IProps) => {
  const {
    answer, img, question, handleDelete,
  } = props;

  return (
    <div className="unpublished-draft-con">
      <div className="question-card-container bg-white mb-4">
        <div className="title">
          <p>Unpublished answer</p>
        </div>
        {img && (
          <div className="img-con">
            <img src={img} alt="question" />
          </div>
        )}

        <div className="content" style={{ paddingTop: img ? '20px' : '0' }}>
          <p className="question" style={{ marginTop: 0 }}>
            {question}
          </p>

          <h5 className="answer mt-2">{answer}</h5>
        </div>

        <div className="action-con">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-1 action">
              <button className="d-flex align-items-center gap-1" type="button">
                <Write />
                {' '}
                Edit
              </button>
              <div className="small-dot" />
            </div>

            <div className="d-flex align-items-center gap-1 action">
              <button
                className="d-flex align-items-center gap-1"
                type="button"
                onClick={handleDelete}
              >
                <Delete />
                Delete
              </button>
              <div className="small-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnpublishedDraft;
