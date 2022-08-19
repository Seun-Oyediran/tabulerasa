import React from 'react';

const ArrowRight = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 10H15.5"
        stroke="url(#paint0_linear_6976_11872)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.5L15.5 10L11 14.5"
        stroke="url(#paint1_linear_6976_11872)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6976_11872"
          x1="10"
          y1="10"
          x2="10"
          y2="10.4125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F39433" />
          <stop offset="1" stopColor="#F07900" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6976_11872"
          x1="13.25"
          y1="5.5"
          x2="13.25"
          y2="9.2125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F39433" />
          <stop offset="1" stopColor="#F07900" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowRight;
