import React from 'react';

interface ExpertCardProps {
  name: string;
  rating: number;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ name, rating }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Rating: {rating}</p>
    </div>
  );
};
