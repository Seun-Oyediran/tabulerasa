import Link from 'next/link';
import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import {
  QuestionMenu, Reply, Star, Useful,
} from '../../svg';
import QuestionPopover from './QuestionPopover';

const AnswerCard = () => {
  return (
    <div className="tabulerasa-answer-card-con">
      <div className="content">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex gap-2">
            <div className="avatar-con">
              <img src="/svg/small_avatar.svg" alt="avatar" />
            </div>
            <div className="user">
              <h4>Mary Idahosa</h4>
              <div className="d-flex align-items-center gap-2">
                <p>Answering</p>
                <Link href="/">
                  <a href="/">
                    <p style={{ color: ' #F39433' }}>@Anonymous</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="icon">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={(
                <div>
                  <QuestionPopover />
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

        <p className="question answer">
          You can eaily use tabulerasa you find a lawyer and communicate with them in a language
          they understand, force.
        </p>
      </div>

      <div className="action-con">
        <div className="d-flex gap-4">
          <div className="d-flex align-items-center gap-1 action">
            <button className="d-flex align-items-center gap-1" type="button">
              <Star />
              {' '}
              Concur
            </button>
            <div className="small-dot" />
            <h5>5</h5>
          </div>

          <div className="d-flex align-items-center gap-1 action">
            <button className="d-flex align-items-center gap-1" type="button">
              <Reply />
              {' '}
              Reply
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

export default AnswerCard;
