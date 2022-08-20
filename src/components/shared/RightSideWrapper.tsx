import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const RightSideWrapper = (props: IProps) => {
  const { children } = props;
  return (
    <div className="question-right-sidebar">
      <div className="right-con">
        <div className="abs">
          <div className="fixed">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default RightSideWrapper;
