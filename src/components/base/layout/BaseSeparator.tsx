// src/DividerWithText.js

import React from 'react';

type BaseSeparatorProps = {
  text: string;
};

const BaseSeparator = ({ text }: BaseSeparatorProps) => {
  return (
    // <div className={styles['divider-container']}>
    //   <div className={styles['divider-line']}></div>
    //   <div className={styles['divider-text']}>{text}</div>
    //   <div className={styles['divider-line']}></div>
    // </div>
    <div className="flex items-center mb-8 mt-6">
      <div className="flex-grow border-t border-primary-300"></div>
      <span className="px-4 text-primary">{text}</span>
      <div className="flex-grow border-t border-primary-300"></div>
    </div>
  );
};

export default BaseSeparator;
