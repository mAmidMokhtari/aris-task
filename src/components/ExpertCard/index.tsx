import React from 'react';

interface ExpertCardProps {
  name: string;
  rating: number;
  specialties: string[];
}

export const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  rating,
  specialties,
}) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>Rating: {rating}</p>
      <p>Specialties: {specialties.join(", ")}</p>
    </div>
  );
};
