
import React from 'react';

interface FaqProps {
  title: string;
}

const FaqItem: React.FC<FaqProps> = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default FaqItem;
