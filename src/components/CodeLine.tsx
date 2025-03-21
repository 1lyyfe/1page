import React from 'react';

interface CodeLineProps {
  number: number;
  indent?: number;
  children: React.ReactNode;
}

const CodeLine: React.FC<CodeLineProps> = ({ number, indent = 0, children }) => {
  return (
    <div className="code-line">
      <span className="line-number">{number}</span>
      <span style={{ marginLeft: `${indent * 20}px` }}>{children}</span>
    </div>
  );
};

export default CodeLine;