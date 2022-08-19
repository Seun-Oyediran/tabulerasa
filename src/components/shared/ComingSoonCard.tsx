import React from 'react';

interface IProps {
  title?: string;
  message?: string;
}

const ComingSoonCard = (props: IProps) => {
  const { message, title } = props;

  return (
    <div className="coming-soon-card-con">
      <div className="body">
        <div className="d-flex justify-content-between align-items-start">
          <h3>{title}</h3>
          <div>
            <img src="/svg/marketplace.svg" alt="coming soon" />
          </div>
        </div>
        <p>{message}</p>
      </div>
      <div className="footer">Coming soon</div>
    </div>
  );
};

export default ComingSoonCard;
