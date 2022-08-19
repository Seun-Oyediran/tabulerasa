import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import routes from '../../routes';
import { ArrowRight, BackArrow, Draft, Requests, SearchIcon } from '../../svg';

interface IQuestionLink {
  text: string;
  icon: ReactNode;
  route: string;
}

const QuestionLink = (props: IQuestionLink) => {
  const { text, icon, route } = props;
  const router = useRouter();

  const active = router.pathname === route;

  return (
    <Link href={route}>
      <a href={route}>
        <div className={`question-link my-2 py-2 ${active ? 'active' : ''}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <div>{icon}</div>
              <p className="mt-1">{text}</p>
            </div>
            {active && (
              <div>
                <ArrowRight />
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

const QuestionLeftSidebar = () => {
  return (
    <div className="question-left-sidebar">
      <div className="box">
        <Link href="/">
          <a className="back-btn d-flex align-items-center" href="/">
            <BackArrow /> Back
          </a>
        </Link>

        <h3>Answer questions</h3>
        <div>
          <img src="/svg/question_img.svg" alt="question" />
        </div>

        <div className="links-con">
          <QuestionLink
            route={routes.questions.path}
            icon={<SearchIcon />}
            text="Questions for you"
          />
          <QuestionLink
            route={routes.questions.answerRequests.path}
            icon={<Requests />}
            text="Answer requests"
          />
          <QuestionLink
            route={routes.questions.answerDrafts.path}
            icon={<Draft />}
            text="Answer drafts"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionLeftSidebar;
